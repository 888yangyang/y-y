import { useState, useEffect } from 'react'
import { works } from '../data/works.js'

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.6-9.5-9C.8 8.5 3 5 6.3 5c2 0 3.3 1.2 3.7 2h1.7c.4-.8 1.7-2 3.7-2C18 5 20.2 8.5 21.5 12 19 16.4 12 21 12 21z"/></svg>
)
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
)
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
)

export default function Projects() {
  const [active, setActive] = useState(null)

  // 关闭：Esc 键
  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    // 打开弹窗时锁定滚动
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const base = import.meta.env.BASE_URL

  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head mask-title">
          <span className="eyebrow">SELECTED PROJECTS</span>
          <h2 className="section-title">
            <span className="mask-inner">精选<em className="accent">作品</em></span>
          </h2>
          <p className="section-lead reveal">
            严料坊身材书爆款内容精选，破万赞为主、另含高赞代表作。以「情绪共鸣 × 干货价值」为创作主线，
            聚焦中年女性身材管理与自我成长。点击卡片即可在页面内直接播放完整视频。
          </p>
        </div>

        <div className="projects-grid stagger">
          {works.map((w) => (
            <div
              key={w.id}
              className="work-card"
              onClick={() => setActive(w)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(w) } }}
            >
              <div className="cover">
                <div
                  className="cover-fallback"
                  style={{
                    background: `linear-gradient(160deg, ${
                      ['#7a1f2b', '#5a141d', '#3d0f14', '#8a2636'][Number(w.id.slice(1)) % 4]
                    } 0%, #0b080a 85%)`,
                  }}
                >
                  <span>{String(w.id.slice(1)).padStart(2, '0')}</span>
                </div>
                <span className="tag">{w.category}</span>
                <span className="likes"><HeartIcon />{w.likesText}</span>
                <span className="play"><PlayIcon /></span>
              </div>
              <div className="meta">
                <h3>{w.title}</h3>
                <div className="row">
                  <span className="cat">{w.publishDate}</span>
                  <span>·</span>
                  <span>严料坊身材书</span>
                </div>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 页内视频播放弹窗：16:9 画幅，视频完整居中显示，不跳转抖音 */}
      {active && (
        <div className="video-modal" onClick={() => setActive(null)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setActive(null)}
              aria-label="关闭"
            >
              <CloseIcon />
            </button>
            <div className="video-modal-head">
              <h3>{active.title}</h3>
              <span className="video-modal-meta">
                {active.publishDate} · 严料坊身材书 · <HeartIcon />{active.likesText}
              </span>
            </div>
            <div className="video-frame">
              <video
                key={active.id}
                src={`${base}${active.videoFile}`}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
