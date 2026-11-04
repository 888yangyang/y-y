const icon = (path, box = '0 0 24 24') => (
  <svg viewBox={box} aria-hidden="true">{path}</svg>
)

const STRENGTHS = [
  {
    n: '01',
    title: '编导思维 · 全流程',
    desc: '从选题洞察、脚本撰写、拍摄统筹到剪辑审片，覆盖短视频生产全链路，能独立把一个内容点子从概念推进到成片上线。',
    icon: icon(<><path d="M14 3H5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M9 3v6l3-2 3 2V3"/></>),
  },
  {
    n: '02',
    title: '爆款内容嗅觉',
    desc: '善于从用户情绪与生活场景里抓共鸣点，用「金句式表达 + 强情绪节奏」撬动完播与互动，操盘过 7.2 万赞单条爆款。',
    icon: icon(<><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></>),
  },
  {
    n: '03',
    title: '账号运营 · 数据驱动',
    desc: '负责账号整体运营与数据复盘，通过选题库、更新节奏与内容矩阵持续涨粉，服务账号实现粉丝 88.1 万、累计获赞 1071 万+。',
    icon: icon(<><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></>),
  },
  {
    n: '04',
    title: '垂类深耕 · 人群洞察',
    desc: '长期服务 30–55 岁中龄女性人群，理解其身材焦虑、自我成长与情绪价值诉求，能精准设计直击痛点又走心的内容。',
    icon: icon(<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 12l3.5-3.5"/></>),
  },
  {
    n: '05',
    title: '多平台 · 多体裁',
    desc: '熟悉抖音、小红书、视频号、快手多平台调性与算法逻辑，覆盖口播、剧情、干货、图文多体裁，适配不同渠道分发。',
    icon: icon(<><path d="M4 4h16v16H4z"/><path d="M9 8l6 4-6 4z"/></>),
  },
  {
    n: '06',
    title: 'AIGC · 提效能力',
    desc: '熟练运用 AI 工具辅助选题、文案、分镜与视觉生成，在保证调性与真实性的前提下，显著提升内容生产与复盘效率。',
    icon: icon(<><path d="M12 2l2.4 4.9L20 8l-4 4 1 5.6L12 15l-5 2.6 1-5.6-4-4 5.6-1.1z"/></>),
  },
]

export default function Strengths() {
  return (
    <section className="section" id="strengths" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head mask-title">
          <span className="eyebrow">MY STRENGTHS</span>
          <h2 className="section-title">
            <span className="mask-inner">个人<em className="accent">优势</em></span>
          </h2>
        </div>

        <div className="strengths-grid stagger">
          {STRENGTHS.map((s) => (
            <div className="strength-card" key={s.n}>
              <span className="num">{s.n}</span>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
