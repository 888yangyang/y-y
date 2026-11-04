export default function Navbar() {
  const links = [
    { label: '关于', href: '#about' },
    { label: '作品', href: '#works' },
    { label: '优势', href: '#strengths' },
    { label: '联系', href: '#contact' },
  ]
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top">杨洋<em>.</em></a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact"><span>合作邀约</span></a>
      </div>
    </header>
  )
}
