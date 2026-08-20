export const profile = {
  name: 'Sanmuga Piriyan', email: 'piriyan46@gmail.com', phone: '+91 63821 69984', phoneUrl: 'tel:+916382169984', location: 'Bengaluru, India',
  github: 'https://github.com/piriyan46-png', linkedin: 'https://www.linkedin.com/in/sanmuga-piriyan/',
  emailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=piriyan46%40gmail.com&su=Portfolio%20Opportunity',
  resume: '/Sanmuga-Piriyan-Resume.docx',
}

export const expertise = [
  { icon: 'Target', title: 'Product Strategy', text: 'Aligning AI possibilities with real user needs and business outcomes.' },
  { icon: 'BrainCircuit', title: 'AI Product Leadership', text: 'Leading cross-functional teams to ship responsible AI products.' },
  { icon: 'ChartNoAxesColumnIncreasing', title: 'Data to Insight', text: 'Transforming messy data into meaningful insights that drive decisions.' },
  { icon: 'Box', title: 'End-to-End Building', text: 'From problem framing to MVP and iteration—shipping products that scale.' },
]

export const projects = [
  { no:'01', name:'Lumiere Hotel Reservation', short:'Lumiere', category:'Full-Stack Web Application', description:'A complete hotel-reservation platform for discovering hotels, checking room availability, booking rooms and managing reservations.', highlight:'End-to-end booking and reservation-management workflow.', tech:['React.js','Python','Django','SQL','REST APIs','Authentication'], accent:'violet', icon:'Hotel' },
  { no:'02', name:'GutMind Insights', category:'Generative AI Wellness Platform', description:'AI-powered wellness insights across meals, mood, sleep, hydration, stress and activity—translated into contextual recommendations.', highlight:'Transforms daily lifestyle data into personalized AI guidance.', tech:['FastAPI','Gemini 2.5 Flash','Python','Prompt Engineering'], disclaimer:'Wellness guidance only—not medical diagnosis.', accent:'mint', icon:'Brain' },
  { no:'03', name:'RAG Intelligence Chatbot', short:'RAG Intelligence', category:'Document Intelligence', description:'Upload PDF or text files and receive grounded answers generated from semantically retrieved document content.', highlight:'Context-grounded answers from uploaded documents.', tech:['Python','Flask','Groq API','ChromaDB','Semantic Search','RAG'], accent:'blue', icon:'FileSearch' },
  { no:'04', name:'NewsAI', category:'AI News Intelligence', description:'Personalized live news aggregation, semantic retrieval and conversational Q&A with secure authentication, bookmarks and history.', highlight:'Combines live information retrieval with conversational AI.', tech:['Flask','LangChain','Llama 3.3','ChromaDB','JWT','NewsAPI'], accent:'orange', icon:'Newspaper' },
  { no:'05', name:'College Handbook AI Assistant', short:'Handbook AI', category:'Academic RAG Assistant', description:'A source-aware assistant that answers using only retrieved institutional handbook content to reduce hallucinations.', highlight:'Reliable institutional answers grounded in handbook sources.', tech:['Python','LlamaIndex','ChromaDB','PyPDF','Semantic Search','RAG'], accent:'cyan', icon:'GraduationCap' },
  { no:'06', name:'PDF AI Chatbot with Qdrant', short:'PDF + Qdrant', category:'Vector Search and RAG', description:'An end-to-end pipeline that chunks documents, creates embeddings, retrieves relevant passages and generates contextual answers.', highlight:'Custom end-to-end retrieval pipeline using Qdrant.', tech:['Python','Flask','Qdrant','PyPDF','Vector Embeddings','RAG'], accent:'rose', icon:'MessagesSquare' },
  { no:'07', name:'Personal Portfolio', category:'Frontend Engineering', description:'A responsive React portfolio communicating AI product experience through accessible interactions, motion and theme-aware design.', highlight:'Performance-focused personal brand and project showcase.', tech:['React.js','Vite','JavaScript','CSS','Framer Motion','Accessibility'], accent:'lime', icon:'PanelsTopLeft' },
]

export const experience = [
  { role:'Founder & Product Manager', company:'SSP Travel & Study Abroad Consultancy', place:'Tamil Nadu, India', date:'Jan 2024 — Present', bullets:['Founded and scaled an education-consulting venture.','Mentored 50+ students and established partnerships with 80+ business schools across France.','Standardized application, documentation and interview workflows, achieving an 85% Schengen visa success rate.'] },
  { role:'Agentic AI Engineer', company:'Yogic AI', place:'Bengaluru, India', date:'Sep 2025 — Present', bullets:['Partner with clients to identify business challenges and shape suitable AI product solutions.','Build intelligent assistants, enterprise chatbots, automation and RAG applications using Dify, LLMs and vector databases.','Optimize prompts, retrieval strategies and experience from concept through delivery.'] },
  { role:'Functional IT Consultant', company:'Noor Vision', place:'Germany', date:'Jul 2023 — Dec 2023', bullets:['Gathered requirements and prepared functional specification documents.','Configured and optimized SAP EWM warehouse processes.','Supported testing, UAT, defect resolution, production support and end-user training.'] },
  { role:'Associate Consultant', company:'Zerveu', place:'France', date:'Jan 2022 — Jul 2023', bullets:['Supported two SAP EWM implementations and resolved 40+ tickets with 95% SLA compliance.','Improved issue-resolution efficiency by 15%.','Validated 25+ enhancements and helped reduce post-release issues by 10%.'] },
]

export const skillGroups = [
  ['Product Management',['Product Lifecycle','Product Strategy','Product Discovery','Roadmapping','Feature Prioritization','PRDs','User Stories','Agile','Jira']],
  ['Discovery & Research',['Customer Interviews','User Research','Journey Mapping','Personas','Competitive Analysis','Market Research','Stakeholder Management']],
  ['AI & LLM',['Generative AI','Agentic AI','Prompt Engineering','RAG','LLM Integration','Multi-Agent Systems','LLM Evaluation']],
  ['Frameworks & Technology',['LangChain','LangGraph','LlamaIndex','Dify','Gemini','Groq','ChromaDB','Qdrant','Supabase']],
  ['Development',['Python','JavaScript','React.js','Flask','FastAPI','Django','SQL','REST APIs','Git','Figma','SAP MM/EWM']],
]
