// functions/api/sync.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const action = url.searchParams.get('action');
  const key = url.searchParams.get('key'); // 现在这里传的是用户名

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  // ★ 核心密钥藏在后端，前端绝对不可见
  const SECRET_KEY = env.IJHUB_SECRET_KEY || "ijhub_super_secret_f12_proof_2026";

  function generateHash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (h2 >>> 0).toString(16) + (h1 >>> 0).toString(16);
  }
  function encryptAndSign(jsonStr, secret) {
    let sig = generateHash(jsonStr + secret);
    let encoded = encodeURIComponent(jsonStr);
    let obfuscated = "";
    for (let i = 0; i < encoded.length; i++) {
      obfuscated += String.fromCharCode(encoded.charCodeAt(i) ^ secret.charCodeAt(i % secret.length));
    }
    return btoa(obfuscated) + "|" + sig;
  }
  function decryptAndVerify(payload, secret) {
    try {
      let parts = payload.split('|');
      if (parts.length !== 2) throw new Error("校验码格式错误");
      let b64 = parts[0], sig = parts[1];
      let obfuscated = atob(b64);
      let decoded = "";
      for (let i = 0; i < obfuscated.length; i++) {
        decoded += String.fromCharCode(obfuscated.charCodeAt(i) ^ secret.charCodeAt(i % secret.length));
      }
      let jsonStr = decodeURIComponent(decoded);
      let expectedSig = generateHash(jsonStr + secret);
      if (sig !== expectedSig) throw new Error("密码错误或文件被篡改");
      return { ok: true, data: jsonStr };
    } catch (e) { return { ok: false, error: e.message }; }
  }

  // 1. 云端同步逻辑 (使用用户名作为KV Key)
  if (key) {
    if (!env.IJHUB_KV) return new Response("KV未绑定", { status: 500, headers: corsHeaders });
    const kvKey = "user_" + key;
    if (request.method === 'GET') {
      const data = await env.IJHUB_KV.get(kvKey);
      if (!data) return new Response(JSON.stringify({ error: "云端暂无此账号的记录" }), { status: 404, headers: corsHeaders });
      return new Response(JSON.stringify({ data: data }), { headers: corsHeaders });
    }
    if (request.method === 'POST') {
      const body = await request.json();
      await env.IJHUB_KV.put(kvKey, body.data);
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
  }

  // 2. 本地文件导出加密 API (静默使用后端 SECRET_KEY)
  if (action === 'encrypt' && request.method === 'POST') {
    const body = await request.json();
    const encrypted = encryptAndSign(body.data, SECRET_KEY);
    return new Response(JSON.stringify({ data: encrypted }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }

  // 3. 本地文件导入解密 API
  if (action === 'decrypt' && request.method === 'POST') {
    const body = await request.json();
    const result = decryptAndVerify(body.data, SECRET_KEY);
    if (result.ok) {
      return new Response(JSON.stringify({ data: result.data }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    } else {
      return new Response(JSON.stringify({ error: result.error }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
  }

  return new Response("Method not allowed", { status: 405, headers: corsHeaders });
}