import { motion as Motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  return <section id="home" className="hero section-pad">
    <Motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
      <div className="eyebrow"><span></span> AI PRODUCT MANAGER <i>•</i> PRODUCT BUILDER</div>
      <h1>I turn complex ideas into <em>practical AI products.</em></h1>
      <p className="hero-lede">Product-focused professional with 4+ years across enterprise technology, supply-chain transformation and entrepreneurship. I build AI agents, RAG systems and automation products that solve measurable business problems.</p>
      <div className="hero-actions">
        <a className="button primary" href="#projects">Explore my projects <ArrowRight/></a>
        <a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub <Github/></a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin/></a>
        <a className="button resume-button" href={profile.resume} download="Sanmuga-Piriyan-Resume.docx">Download résumé <Download/></a>
      </div>
      <div className="availability">
        <span><MapPin/> {profile.location}</span><span><Sparkles/> Open to AI Product opportunities</span><a href={profile.emailUrl} target="_blank" rel="noopener noreferrer"><Mail/> {profile.email}</a>
      </div>
    </Motion.div>
    <Motion.div className="system-visual" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.65,delay:.1}} aria-hidden="true">
      <div className="visual-status"><i></i><span>AI PRODUCT SYSTEM</span></div>
      <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
      <div className="core"><span>SP</span><small>PRODUCT SYSTEM</small></div>
      {['Product Strategy','Gen AI','RAG','Agentic AI','Automation'].map((x,i)=><div className={`node node-${i+1}`} key={x}><i></i>{x}</div>)}
      <div className="visual-caption">Strategy <span>→</span> Intelligence <span>→</span> Delivery</div>
      <div className="grid-dots"></div>
    </Motion.div>
  </section>
}
