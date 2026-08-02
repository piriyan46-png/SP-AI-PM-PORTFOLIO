import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'
import { profile, projects } from '../data/content'
import IconChip from './IconChip'

const projectImages = {
  'Lumiere Hotel Reservation': '/projects/lumiere.png',
  'GutMind Insights': '/projects/gutmind.png',
  'RAG Intelligence Chatbot': '/projects/rag-intelligence.png',
  NewsAI: '/projects/newsai.png',
  'College Handbook AI Assistant': '/projects/handbook-ai.png',
  'PDF AI Chatbot with Qdrant': '/projects/qdrant-chatbot.png',
  'Personal Portfolio': '/projects/portfolio.png',
}

export default function Projects() {
  return <section id="projects" className="section-pad projects-section">
    <div className="section-heading"><div><span className="kicker">SELECTED WORK</span><h2>Projects built to <em>solve.</em></h2></div><p>From product strategy through working software—each project explores a real problem, a considered system and a practical outcome.</p></div>
    <div className="project-grid">
      {projects.map((project,index)=><Motion.a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-card ${index===0?'featured':''}`}
        key={project.name}
        initial={{opacity:0,y:26,scale:.985}}
        whileInView={{opacity:1,y:0,scale:1}}
        whileHover={{y:-7,scale:1.008}}
        whileTap={{scale:.985}}
        viewport={{once:true,amount:.12}}
        transition={{duration:.42,delay:(index%3)*.07,ease:[.22,1,.36,1]}}
        aria-label={`View ${project.name} on GitHub`}
      >
        <div className={`project-image-wrap ${project.accent}`}>
          <img src={projectImages[project.name]} alt={`${project.name} product interface concept`} loading={index===0?'eager':'lazy'} />
          <span>{project.category}</span>
        </div>
        <div className="project-content">
          <div className="project-meta"><span>{project.category}</span></div>
          <h3>{project.name}</h3><p>{project.description}</p>
          <div className="highlight"><Zap/> {project.highlight}</div>
          {project.disclaimer && <small className="disclaimer">{project.disclaimer}</small>}
          <div className="chips project-tech-chips">{project.tech.map(tech=><IconChip label={tech} key={tech}/>)}</div>
          <div className="card-action">View on GitHub <ArrowUpRight/></div>
        </div>
      </Motion.a>)}
    </div>
  </section>
}
