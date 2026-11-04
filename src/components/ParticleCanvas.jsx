import { useEffect, useRef } from 'react'

// 首屏背景粒子：Canvas 实现，60-80 个，DPR 限制 max 2x，页面隐藏时暂停
export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let raf = 0
    let running = true
    let w = 0
    let h = 0

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    const init = () => {
      const count = Math.floor(60 + Math.random() * 21) // 60-80
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.08 - Math.random() * 0.28,
        a: 0.12 + Math.random() * 0.5,
        gold: Math.random() > 0.35,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold ? `rgba(201,162,75,${p.a})` : `rgba(154,44,58,${p.a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(step)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        if (raf) cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        raf = requestAnimationFrame(step)
      }
    }

    resize()
    if (reduced) {
      step()
      cancelAnimationFrame(raf)
      raf = 0
    } else {
      raf = requestAnimationFrame(step)
    }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', resize)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}
