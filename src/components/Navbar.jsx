import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = ['Home','About','Experience','Projects','Skills','Contact']

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = links.map(x => document.getElementById(x.toLowerCase())).filter(Boolean)
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin:'-35% 0px -60%' })
    sections.forEach(s => observer.observe(s)); return () => observer.disconnect()
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const close = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', close); return () => { removeEventListener('keydown', close); document.body.style.overflow='' }
  }, [open])
  return <header className="nav-shell">
    <a className="logo" href="#home" aria-label="Sanmuga Piriyan home">SP<span>.</span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      {links.map(link => <a key={link} className={active===link.toLowerCase()?'active':''} href={`#${link.toLowerCase()}`} onClick={()=>setOpen(false)}>{link}</a>)}
    </nav>
    <div className="nav-actions">
      <button className="icon-button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}>{theme==='dark'?<Sun/>:<Moon/>}</button>
      <button className="icon-button menu-button" aria-label="Toggle navigation menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>
}
