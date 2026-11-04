import { projectData } from '../data/works.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head mask-title">
          <h2 className="section-title">
            <span className="mask-inner">个人经历</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* 完整竖版全身照，按 2:3 原比例完整呈现，不裁切 */}
          <div className="about-portrait reveal">
            <div className="frame parallax-wrap">
              <img className="parallax-media" src={`${import.meta.env.BASE_URL}photo.jpg`} alt="杨洋" />
            </div>
            <div className="about-badge">
              <div className="t">4年+</div>
              <div className="s">内容创作经验</div>
            </div>
          </div>

          <div className="about-body">
            <h3 className="about-name reveal">杨洋</h3>
            <p className="about-role reveal">短视频编导 · 新媒体运营</p>
            <p className="about-desc reveal">
              专注<strong>短视频内容创作与账号运营</strong>，长期服务于美妆、轻食等消费赛道。近四年深耕
              <strong>「严料坊身材书」</strong>账号，负责<strong>选题策划、脚本撰写、拍摄统筹与账号数据运营</strong>，
              用「情绪共鸣 + 干货价值」的内容策略服务 30–55 岁中龄女性用户，产出多支高赞爆款。
            </p>

            <div className="about-meta reveal">
              <div className="item"><div className="k">现定位</div><div className="v">短视频编导 / 新媒体运营</div></div>
              <div className="item"><div className="k">在岗项目</div><div className="v">严料坊身材书（2022.10–2026.08）</div></div>
              <div className="item"><div className="k">代表平台</div><div className="v">抖音 · 小红书 · 视频号 · 快手</div></div>
              <div className="item"><div className="k">联系方式</div><div className="v"><a href="#contact">18921650201</a></div></div>
            </div>

            <div className="project-stats reveal">
              {projectData.map((d) => (
                <div className="stat" key={d.label}>
                  <div className="num">{d.value}</div>
                  <div className="lab">{d.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
