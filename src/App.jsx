import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { About, Contact, Credentials, Experience, Expertise, Footer, Skills } from './components/Sections'

export default function App() {
  const [theme,setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  useEffect(() => { document.documentElement.dataset.theme=theme; localStorage.setItem('theme',theme); document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#080b12':'#f6f5f2' },[theme])
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar theme={theme} setTheme={setTheme}/><main id="main"><Hero/><Expertise/><About/><Experience/><Projects/><Skills/><Credentials/><Contact/></main><Footer/></>
}
