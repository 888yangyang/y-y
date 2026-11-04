import ParticleCanvas from './ParticleCanvas.jsx'
import { projectData } from '../data/works.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src="/photo.jpg" alt="杨洋" />
        <div className="hero-veil" />
      </div>
      <ParticleCanvas />

      <div className="hero-content">
        <p className="hero-kicker">SHORT-VIDEO DIRECTOR · CONTENT CREATOR</p>
        <div className="hero-title" aria-label="短视频编导 杨洋">
          <span className="line line-1">短视频编导</span>
          <span className="line line-2">杨洋<span className="accent">.</span></span>
        </div>
        <p className="hero-sub">严料坊身材书 · 内容创作与账号运营</p>
      </div>

      <div className="hero-side hero-left">
        <div className="hero-data">
          {projectData.slice(0, 3).map((d) => (
            <div key={d.label}>
              <div className="num">{d.value}</div>
              <div className="lab">{d.label}</div>
            </div>
          ))}
        </div>
        <a className="hero-cta" href="#contact"><span>合作邀约</span></a>
      </div>

      <div className="hero-side hero-right">
        <div className="slogan">从选题到成片，<br />让内容<em>有情绪、有转化</em></div>
      </div>

      <div className="hero-scroll">
        <span className="mouse" />
        <span>SCROLL</span>
      </div>
    </section>
  )
}
