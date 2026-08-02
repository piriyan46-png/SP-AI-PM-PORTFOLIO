import {
  Accessibility, BookOpen, Bot, Boxes, BrainCircuit, Braces, ChartNoAxesColumnIncreasing,
  CircleDot, Cloud, Code2, Compass, Database, FileSearch, FileText, Gauge, Gem,
  GitBranch, Handshake, IterationCw, Kanban, KeyRound, Library, ListChecks, Map,
  MessageSquareCode, MessageSquareText, Network, Newspaper, Orbit, Paintbrush,
  Repeat2, Route, Search, Server, ShieldCheck, Sparkles, Target, Users, Workflow, Zap,
} from 'lucide-react'

const exactIcons = {
  'product lifecycle': Repeat2,
  'product strategy': Target,
  'product discovery': Compass,
  roadmapping: Route,
  'feature prioritization': ListChecks,
  prds: FileText,
  'ai prds': FileText,
  'user stories': BookOpen,
  agile: IterationCw,
  jira: Kanban,
  'customer interviews': MessageSquareText,
  'user research': Search,
  'journey mapping': Map,
  personas: Users,
  'competitive analysis': ChartNoAxesColumnIncreasing,
  'market research': Search,
  'stakeholder management': Handshake,
  'generative ai': Sparkles,
  'agentic ai': Bot,
  'prompt engineering': MessageSquareCode,
  rag: FileSearch,
  'llm integration': BrainCircuit,
  'multi-agent systems': Network,
  'llm evaluation': Gauge,
  langchain: Network,
  langgraph: GitBranch,
  llamaindex: Library,
  dify: Workflow,
  gemini: Gem,
  'gemini 2.5 flash': Gem,
  groq: Zap,
  'groq api': Zap,
  chromadb: Database,
  qdrant: Database,
  supabase: Cloud,
  python: Code2,
  javascript: Code2,
  'react.js': Code2,
  react: Code2,
  flask: Server,
  fastapi: Server,
  django: Server,
  sql: Database,
  mysql: Database,
  sqlalchemy: Database,
  'rest apis': Braces,
  git: GitBranch,
  figma: Paintbrush,
  'sap mm/ewm': Boxes,
  'sourcing and procurement': Boxes,
  jwt: KeyRound,
  authentication: ShieldCheck,
  newsapi: Newspaper,
  rss: Newspaper,
  pypdf: FileText,
  'semantic search': Search,
  'semantic retrieval': Search,
  'vector embeddings': Orbit,
  vite: Zap,
  css: Paintbrush,
  'framer motion': Sparkles,
  accessibility: Accessibility,
  'responsive design': Braces,
  'no-code development': Workflow,
  'product fundamentals': Target,
  llms: BrainCircuit,
  'ai automation': Workflow,
}

function getIcon(label) {
  const normalized = label.toLowerCase().trim()
  if (exactIcons[normalized]) return exactIcons[normalized]
  if (normalized.includes('llm')) return BrainCircuit
  if (normalized.includes('agent')) return Bot
  if (normalized.includes('database') || normalized.includes('sql')) return Database
  if (normalized.includes('api')) return Braces
  if (normalized.includes('search') || normalized.includes('research')) return Search
  if (normalized.includes('product')) return Target
  if (normalized.includes('design')) return Paintbrush
  if (normalized.includes('code') || normalized.includes('development')) return Code2
  return CircleDot
}

export default function IconChip({ label, className = '' }) {
  const Icon = getIcon(label)
  return <span className={`icon-chip ${className}`.trim()}><Icon aria-hidden="true"/>{label}</span>
}
