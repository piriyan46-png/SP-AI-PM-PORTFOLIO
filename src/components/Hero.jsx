import { motion as Motion } from 'framer-motion'
import { ArrowRight, Bot, BriefcaseBusiness, Box, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles, Target } from 'lucide-react'
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
        <span><MapPin/> {profile.location}</span><span><Sparkles/> Open to AI Product opportunities</span><a href={profile.emailUrl} target="_blank" rel="noopener noreferrer"><Mail/> {profile.email}</a><a href={profile.phoneUrl} aria-label={`Phone ${profile.phone}`}><Phone/> {profile.phone}</a>
      </div>
    </Motion.div>
    <Motion.figure className="portrait-visual portrait-circle-only" initial={{opacity:0,scale:.92,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.75,delay:.1,ease:[.22,1,.36,1]}}>
      <div className="portrait-orbit portrait-orbit-one" aria-hidden="true"><i></i></div>
      <div className="portrait-orbit portrait-orbit-two" aria-hidden="true"><i></i></div>
      <div className="portrait-image-shell">
        <img src="/images/sanmuga-piriyan-circle.png" alt="Sanmuga Piriyan, AI Product Manager and Product Builder" width="776" height="802" loading="eager" fetchPriority="high" decoding="async"/>
        <span className="portrait-light-sweep" aria-hidden="true"></span>
      </div>
      <div className="portrait-role role-product-manager"><BriefcaseBusiness/><span>Product Manager</span></div>
      <div className="portrait-role role-product-builder"><Box/><span>AI Product Builder</span></div>
      <div className="portrait-role role-product-strategy"><Target/><span>Product Strategy</span></div>
      <div className="portrait-role role-agentic-ai"><Bot/><span>Agentic AI</span></div>
    </Motion.figure>
  </section>
}
