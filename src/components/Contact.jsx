import { account } from '../data/works.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="container">
          <div className="mask-title" style={{ display: 'inline-block' }}>
            <h2 className="contact-title">
              <span className="mask-inner">LET'S <em className="accent">CREATE</em><br />SOMETHING GREAT</span>
            </h2>
          </div>

          <p className="contact-sub reveal">
            如果你需要一个懂内容、懂爆款、懂账号运营的编导伙伴，
            <br />
            把好故事讲成有转化、有温度的内容——欢迎聊聊。
          </p>

          <div className="contact-links reveal">
            <a className="contact-link" href="tel:18921650201">
              <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>
              18921650201
            </a>
            <a className="contact-link" href={account.profileUrl} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 3a5 5 0 0 1 5 5v3h.5A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11H7V8a5 5 0 0 1 5-5zm0 4a1 1 0 0 0-1 1v3h2V8a1 1 0 0 0-1-1z"/></svg>
              严料坊身材书 · 抖音账号
            </a>
          </div>

          <div className="reveal" style={{ display: 'inline-block' }}>
            <a className="contact-cta" href="tel:18921650201"><span>开始合作</span></a>
          </div>

          <p className="contact-foot">© 2026 杨洋 · 短视频编导作品集&nbsp;&nbsp;|&nbsp;&nbsp;<span>严料坊身材书</span></p>
        </div>
      </div>
    </section>
  )
}
