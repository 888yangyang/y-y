import { useEffect } from 'react'

// 滚动触发进场：模块顶部到达视口约 70-75% 时触发，once:true
export function useGlobalReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-img, .mask-title, .stagger')
    if (!targets.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -25% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
}

// 图片 Parallax：容器内 y 方向 ±5% 缓慢位移；移动端 / reduced-motion 自动降级
export function useParallax() {
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (mobile || reduced) return
    let raf = 0
    const update = () => {
      const wraps = document.querySelectorAll('.parallax-wrap')
      const vh = window.innerHeight
      wraps.forEach((w) => {
        const media = w.querySelector('.parallax-media')
        if (!media) return
        const rect = w.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > vh) return
        const center = rect.top + rect.height / 2
        const offset = (center - vh / 2) / vh // -0.5 ~ 0.5
        const shift = offset * 5.5
        media.style.transform = `translate3d(0, ${shift}%, 0) scale(1.12)`
      })
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}

// 导航栏滚动态：过首屏后毛玻璃增强 + 高度缩小
export function useNavScroll() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector('.nav')
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
