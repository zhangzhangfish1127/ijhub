// shared/labs.js
window.LABS_DATA = [
  // === 综合分类 ===
  {
    id: 'exercises', name: '习题',
    items: [
      { title: '数学题库', desc: '代数、几何与函数经典例题', url: 'exercises/math.html', done: false },
      { title: '物理题库', desc: '力学、电学、光学综合应用', url: 'exercises/physics.html', done: false },
      { title: '化学题库', desc: '方程式默写与实验探究题', url: 'exercises/chemistry.html', done: false },
      { title: '生物题库', desc: '识图题与实验探究', url: 'exercises/biology.html', done: false },
      { title: '地理题库', desc: '读图分析与综合题', url: 'exercises/geography.html', done: false },
      { title: '语文题库', desc: '文言文阅读与诗词默写', url: 'exercises/chinese.html', done: false },
      { title: '英语题库', desc: '语法填空与阅读理解', url: 'exercises/english.html', done: false },
      { title: '历史题库', desc: '材料分析与时间轴事件', url: 'exercises/history.html', done: false },
      { title: '道法题库', desc: '宪法知识与辨析题', url: 'exercises/politics.html', done: false }
    ]
  },
  {
    id: 'download', name: '资源下载',
    items: [
      { title: 'ijhub 本站源码', desc: '包含百度网盘 / OpenList直链 / 123云盘 / GitHub', url: 'download/index.html', done: true },
      { title: '初中全科电子课本', desc: 'PDF 版本打包下载', url: '#', done: false },
    ]
  },
  {
    id: 'else', name: '其他',
    items: [
      { title: '关于我们', desc: 'ijhub 项目介绍', url: 'shared/about.html', done:  true },
      { title: '意见反馈', desc: '报告 Bug 或提出新需求', url: 'shared/feedback.html', done: true },
      { title: '支持我们', desc: '赞助或参与开源建设', url: 'shared/support.html', done: true }
    ]
  },

  // === 理科分类 ===
  {
    id: 'math', name: '数学',
    items: [
      { title: '三角函数图像', desc: '正弦/余弦/正切动态曲线', id: 'trigonometry', url: 'math/trigonometry.html', done: true },
      { title: '二次函数抛物线', desc: '顶点、对称轴与参数 a/b/c', url: '#', done: false },
      { title: '一次函数与方程', desc: 'k 与 b 对直线的影响', url: '#', done: false },
      { title: '反比例函数图像', desc: '双曲线的渐近线与对称性', url: '#', done: false },
      { title: '几何图形变换', desc: '平移、旋转与对称动态演示', url: '#', done: false },
      { title: '勾股定理拼图', desc: '面积拼合动态演示', url: '#', done: false },
      { title: '全等三角形判定', desc: 'SSS / SAS / ASA / AAS / HL', url: '#', done: false },
      { title: '概率统计实验', desc: '抛硬币、掷骰子与频率分布', url: '#', done: false }
    ]
  },
  {
    id: 'optics', name: '光学',
    items: [
      { title: '凸透镜成像', desc: '物距变化 → 像实时变', id: 'convex-lens', url: 'optics/convex-lens.html', done: true },
      { title: '凹透镜成像', desc: '始终正立缩小虚像', id: 'concave-lens', url: 'optics/concave-lens.html', done: true },
      { title: '光的反射定律', desc: '入射角 = 反射角', id: 'reflection', url: 'optics/reflection.html', done: true },
      { title: '光的折射', desc: '空气 / 水 / 玻璃中的折射', id: 'refraction', url: 'optics/refraction.html', done: true },
      { title: '全反射', desc: '超过临界角，折射光消失', id: 'total-reflection', url: 'optics/total-reflection.html', done: true },
      { title: '平面镜成像', desc: '物像对称，正立等大虚像', id: 'plane-mirror', url: 'optics/plane-mirror.html', done: true },
      { title: '小孔成像', desc: '倒立实像，大小随距离变化', id: 'pinhole', url: 'optics/pinhole.html', done: true },
      { title: '眼睛与视力矫正', desc: '近视、远视、眼镜矫正', id: 'eye-correction', url: 'optics/eye-correction.html', done: true },
      { title: '光的色散', desc: '白光经过三棱镜分色', id: 'dispersion', url: 'optics/dispersion.html', done: true },
      { title: '水中鱼虚像', desc: '折射光路与人眼视深', id: 'water-fish', url: 'optics/water-fish.html', done: true },
      { title: '显微镜与望远镜', desc: '透镜组光路图原理', url: '#', done: false }
    ]
  },
  {
    id: 'acoustics', name: '声学',
    items: [
      { title: '声音的反射与聚焦', desc: '天坛回音壁与声波反射', url: '#', done: false },
      { title: '声音的产生与传播', desc: '介质、声速与真空不能传声', url: '#', done: false }
    ]
  },
  {
    id: 'mechanics', name: '力学',
    items: [
      { title: '杠杆平衡', desc: '力臂与力矩', id: 'lever', url: 'mechanics/lever.html', done: true },
      { title: '滑轮组', desc: '定滑轮 / 动滑轮，省力费距离', id: 'pulley', url: 'mechanics/pulley.html', done: true },
      { title: '浮力', desc: '漂浮、悬浮、下沉', id: 'buoyancy', url: 'mechanics/buoyancy.html', done: true },
      { title: '压强', desc: '压力与受力面积的关系', id: 'pressure', url: 'mechanics/pressure.html', done: true },
      { title: '摩擦力', desc: '静摩擦与滑动摩擦', id: 'friction', url: 'mechanics/friction.html', done: true },
      { title: '连通器', desc: '液面始终相平', id: 'communicating-vessels', url: 'mechanics/communicating-vessels.html', done: true },
      { title: '大气压', desc: '托里拆利实验', id: 'atmospheric-pressure', url: 'mechanics/atmospheric-pressure.html', done: true },
      { title: '自由落体', desc: '小球下落，能量实时转换', id: 'free-fall', url: 'mechanics/free-fall.html', done: true },
      { title: '单摆', desc: '动能 ↔ 势能实时转换', id: 'pendulum', url: 'mechanics/pendulum.html', done: true },
      { title: '过山车', desc: '沿轨道运动，能量条实时变', id: 'roller-coaster', url: 'mechanics/roller-coaster.html', done: true },
      { title: '弹簧振子', desc: '弹性势能 ↔ 动能', id: 'spring-oscillator', url: 'mechanics/spring-oscillator.html', done: true },
      { title: '液体压强与压强计', desc: '探究液体内部压强规律', url: '#', done: false },
      { title: '反冲运动与火箭', desc: '作用力与反作用力', url: '#', done: false },
      { title: '阿基米德原理', desc: '浮力大小与排开液体重力', url: '#', done: false },
      { title: '物体的浮沉条件', desc: '鸡蛋在盐水中的三种状态', url: '#', done: false },
      { title: '潜水艇的浮沉', desc: '水舱充排水改变重力', url: '#', done: false },
      { title: '热气球与飞艇', desc: '气体浮力及密度变化', url: '#', done: false },
      { title: '二力平衡', desc: '同体、等大、反向、共线', url: '#', done: false },
      { title: '惯性演示', desc: '急刹车与小车碰撞模拟', url: '#', done: false },
      { title: '斜面与机械效率', desc: '有用功、额外功与总功', url: '#', done: false }
    ]
  },
  {
    id: 'motion', name: '运动学',
    items: [
      { title: '运动图像与平均速度', desc: 'v-t / s-t 图像', id: 'motion-graph', url: 'motion/motion-graph.html', done: true },
      { title: '火车过桥', desc: '路程 = 桥长 + 车长', id: 'train-bridge', url: 'motion/train-bridge.html', done: true },
      { title: '匀变速直线运动', desc: 'v = v₀ + at', id: 'accelerated-motion', url: 'motion/accelerated-motion.html', done: true },
      { title: '刹车问题', desc: '反应距离 + 刹车距离', id: 'braking', url: 'motion/braking.html', done: true },
      { title: '参照物与相对运动', desc: '切换参照物，状态完全变', id: 'relative-motion', url: 'motion/relative-motion.html', done: true },
      { title: '追及与相遇', desc: '同向追及 / 相向相遇', id: 'chase-meeting', url: 'motion/chase-meeting.html', done: true },
      { title: '平抛运动', desc: '水平匀速 + 竖直自由落体', id: 'projectile', url: 'motion/projectile.html', done: true },
      { title: '圆周运动', desc: '速度沿切线方向', id: 'circular-motion', url: 'motion/circular-motion.html', done: true }
    ]
  },
  {
    id: 'electricity', name: '电与磁',
    items: [
      { title: '串联电路', desc: '电流处处相等', id: 'series-circuit', url: 'electricity/series-circuit.html', done: true },
      { title: '并联电路', desc: '电流分流与汇合', id: 'parallel-circuit', url: 'electricity/parallel-circuit.html', done: true },
      { title: '欧姆定律', desc: '滑动变阻器与电压电流', id: 'ohm-law', url: 'electricity/ohm-law.html', done: true },
      { title: '电磁铁', desc: '匝数与电流对磁性的影响', id: 'electromagnet', url: 'electricity/electromagnet.html', done: true },
      { title: '摩擦起电与电荷规律', desc: '15种物质带电顺序', url: '#', done: false },
      { title: '雷电现象与放电', desc: '云层电荷积累与尖端放电', url: '#', done: false },
      { title: '静电除尘与复印', desc: '静电吸附微小颗粒', url: '#', done: false },
      { title: '家庭电路', desc: '火线、零线与漏电保护', url: '#', done: false },
      { title: '电动机原理', desc: '通电线圈在磁场中受力', url: '#', done: false },
      { title: '发电机原理', desc: '电磁感应与交流电产生', url: '#', done: false }
    ]
  },
  {
    id: 'chemistry', name: '化学',
    items: [
      { title: '溶解度曲线', desc: '温度对溶解度的影响', id: 'solubility', url: 'chemistry/solubility.html', done: true },
      { title: '酸碱指示剂与 pH', desc: '石蕊与酚酞的颜色魔法', id: 'ph-indicator', url: 'chemistry/ph-indicator.html', done: true },
      { title: '质量守恒定律', desc: '反应前后的微观粒子重组', url: '#', done: false },
      { title: '金属活动性顺序', desc: '置换反应模拟', url: '#', done: false },
      { title: '酸碱滴定曲线', desc: 'pH 随加碱量变化的突跃', url: '#', done: false },
      { title: '分子微观模型', desc: '物质三态变化与分子间隙', url: '#', done: false },
      { title: '原子结构与元素', desc: '原子核、电子排布', url: '#', done: false },
      { title: '溶液配制实验', desc: '溶质质量分数与量筒', url: '#', done: false }
    ]
  },
  {
    id: 'biology', name: '生物',
    items: [
      { title: '动植物细胞结构', desc: '细胞膜、细胞核与细胞器', id: 'cell-structure', url: 'biology/cell-structure.html', done: true },
      { title: '心脏与血液循环', desc: '体循环与肺循环', id: 'heart-circulation', url: 'biology/heart-circulation.html', done: true },
      { title: '光合与呼吸作用', desc: '气体交换与能量转化', id: 'photosynthesis', url: 'biology/photosynthesis.html', done: true },
      { title: '反射弧演示', desc: '神经元信号传导路径', id: 'reflex-arc', url: 'biology/reflex-arc.html', done: true },
      { title: '人体消化系统', desc: '食物在消化道中的旅程', id: 'digestive-system', url: 'biology/digestive-system.html', done: true },
      { title: '人体呼吸系统', desc: '膈肌运动与肺泡气体交换', id: 'respiratory-system', url: 'biology/respiratory-system.html', done: true },
      { title: '动植物分类系统', desc: '界门纲目科属种与代表生物', id: 'classification', url: 'biology/classification.html', done: true },
      { title: '植物蒸腾作用', desc: '气孔开闭与水分散失', url: '#', done: false },
      { title: '基因遗传图谱', desc: '孟德尔遗传定律模拟', url: '#', done: false },
      { title: '生态系统与食物链', desc: '能量流动与物质循环', url: '#', done: false }
    ]
  },
  {
    id: 'geography', name: '地理',
    items: [
      { title: '地球自转与昼夜交替', desc: '晨昏线与自转方向', id: 'day-night', url: 'earth/day-night.html', done: true },
      { title: '月相与日月食', desc: '三球运动与月相', id: 'moon-phase', url: 'earth/moon-phase.html', done: true },
      { title: '太阳系星际追踪', desc: '公转、彗星与小行星带', id: 'solar-system', url: 'earth/solar_system.html', done: true },
      { title: '地球公转与四季变化', desc: '地轴倾斜与直射点移动', id: 'seasons', url: 'earth/seasons.html', done: true },
      { title: '板块运动与地震带', desc: '大陆漂移与火山地震', url: '#', done: false },
      { title: '自然界水循环', desc: '蒸发、降水与径流', url: '#', done: false },
      { title: '等高线地形图', desc: '山脊山谷与坡度计算', url: '#', done: false },
      { title: '全球气候类型', desc: '热带雨林、沙漠与季风', url: '#', done: false },
      { title: '洋流与气候', desc: '暖流与寒流的影响', url: '#', done: false }
    ]
  },

  // === 文科分类 ===
  {
    id: 'chinese', name: '语文',
    items: [
      { title: '古诗词时间轴', desc: '唐诗宋词的发展脉络', url: '#', done: false },
      { title: '汉字演变', desc: '从甲骨文到楷书', url: '#', done: false },
      { title: '文言文虚词解析', desc: '之乎者也用法图解', url: '#', done: false }
    ]
  },
  {
    id: 'english', name: '英语',
    items: [
      { title: '高频词汇连连看', desc: '交互式词汇记忆', url: '#', done: false },
      { title: '不规则动词记忆卡', desc: '动态翻转记忆', url: '#', done: false },
      { title: '国际音标发音', desc: '点击发声与口型动画', url: '#', done: false },
      { title: '十六种时态图谱', desc: '时间轴与动作状态结合', url: '#', done: false }
    ]
  },
  {
    id: 'history', name: '历史',
    items: [
      { title: '中国历史时间轴', desc: '从史前到现代', id: 'timeline', url: 'history/timeline.html', done: true },
      { title: '世界历史大事件', desc: '中外历史横向对比', url: '#', done: false },
      { title: '历史地图变迁', desc: '版图与疆域动态演变', url: '#', done: false }
    ]
  },
  {
    id: 'politics', name: '道法',
    items: [
      { title: '宪法知识图谱', desc: '核心知识点网络图', url: '#', done: false },
      { title: '权利与义务', desc: '分类图示与关联分析', url: '#', done: false }
    ]
  }
];