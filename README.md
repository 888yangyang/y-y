# 杨洋 · 短视频编导作品集（严料坊身材书）

深酒红 × 黑轻奢风格的个人作品集网站，React + Vite 实现，PC 端适配，版心约 1700px。

## 快速开始

```bash
# 首次先安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 **http://localhost:5173** 预览。

## 目录结构

```
严料坊身材书作品集/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/works.js          # 精选作品数据（8 条爆款视频）
    ├── hooks/useAnimations.js # 滚动触发 / 视差 / 导航
    ├── styles/global.css      # 全部样式与动画
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx           # 首屏（照片背景 + 大标题 + 粒子）
    │   ├── About.jsx          # 个人经历（完整 2:3 竖版照片）
    │   ├── Projects.jsx       # 精选作品大卡片
    │   ├── Strengths.jsx      # 个人优势
    │   ├── Contact.jsx        # 底部整屏收尾
    │   └── ParticleCanvas.jsx # Canvas 粒子
└── public/photo.jpg           # 首屏 / 个人照片
```

## 自定义指南

- **更换照片**：替换 `public/photo.jpg`（建议 2:3 竖版）。
- **调整作品**：编辑 `src/data/works.js`，每条的 `title / likesText / publishDate / videoUrl / desc` 均可改。
- **联系方式**：手机号、抖音链接在 `src/components/Contact.jsx` 与 `src/data/works.js` 中。

## 技术要点

- 动画仅使用 `transform + opacity + clip-path`，缓动统一 power2 / power3 / Expo.out。
- 首屏开场 2.5–3s 序列、滚动 70–75% 触发、once:true。
- 移动端（<768px）自动降级，关闭视差与 3D。
- Canvas 粒子 60–80 个，DPR ≤ 2x，页面隐藏时暂停（Page Visibility）。
