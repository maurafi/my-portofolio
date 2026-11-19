// [UPDATED] Skills Data List
// Description: Mengelompokkan keahlian teknis dan metodologis Maulana Rafi ke dalam 5 pilar kompetensi:
// 1. Data Analytics (Python, SQL, Excel, Pandas, Preprocessing, EDA, Visualization, Dashboard Dev)
// 2. Machine Learning (Basic ML, Transfer Learning, Computer Vision, Model Experimentation)
// 3. Project & System Management (Planning, Coordination, Requirements Analysis, Process Analysis, System Analysis, Doc Management, M&E)
// 4. Productivity & Design Tools (Word, PowerPoint, Figma, Canva, Streamlit, VS Code)
// 5. Programming Fundamentals (C, C++)
// Menghilangkan persentase skor artifisial sesuai panduan MASTER PROMPT.
// Reason: Mengimplementasikan Section 04 Skills & Technical Expertise secara kredibel dan terstruktur.

import type { Skill } from '@/types/skills';

export const skills: Skill[] = [
  // ==========================================
  // 1. Data Analytics
  // ==========================================
  {
    id: 'skill-python-data',
    name: 'Python',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '🐍',
    featured: true,
    description: 'Data wrangling, statistical analysis, model development & automation scripts.',
  },
  {
    id: 'skill-sql',
    name: 'SQL',
    category: 'Data Analytics',
    level: 'Intermediate',
    icon: '🗄️',
    featured: true,
    description: 'Relational querying, aggregation, filtering & database schema operations.',
  },
  {
    id: 'skill-excel',
    name: 'Microsoft Excel',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '📊',
    featured: true,
    description: 'Advanced lookup, pivot tables, data reconciliation & industrial reporting.',
  },
  {
    id: 'skill-pandas',
    name: 'Pandas',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '🐼',
    featured: true,
    description: 'Dataframe manipulation, data cleaning, time-series reshaping & transformations.',
  },
  {
    id: 'skill-data-preprocessing',
    name: 'Data Preprocessing',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '🧹',
    featured: true,
    description: 'Outlier detection, missing value imputation, scaling & data normalization.',
  },
  {
    id: 'skill-eda',
    name: 'Exploratory Data Analysis',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '🔍',
    featured: true,
    description: 'Hypothesis testing, distribution analysis & statistical insight extraction.',
  },
  {
    id: 'skill-data-viz',
    name: 'Data Visualization',
    category: 'Data Analytics',
    level: 'Advanced',
    icon: '📈',
    featured: true,
    description: 'Matplotlib, Seaborn, charting best practices & visual storytelling.',
  },
  {
    id: 'skill-dashboard-dev',
    name: 'Dashboard Development',
    category: 'Data Analytics',
    level: 'Intermediate',
    icon: '🖥️',
    featured: true,
    description: 'Building interactive analytical web applications using Streamlit.',
  },

  // ==========================================
  // 2. Machine Learning & AI
  // ==========================================
  {
    id: 'skill-basic-ml',
    name: 'Basic Machine Learning',
    category: 'Machine Learning',
    level: 'Intermediate',
    icon: '🤖',
    featured: true,
    description: 'Supervised classification, regression modeling, cross-validation & metrics.',
  },
  {
    id: 'skill-transfer-learning',
    name: 'Transfer Learning',
    category: 'Machine Learning',
    level: 'Intermediate',
    icon: '🧠',
    featured: true,
    description: 'Fine-tuning pretrained deep learning vision backbones for specific domains.',
  },
  {
    id: 'skill-computer-vision',
    name: 'Computer Vision',
    category: 'Machine Learning',
    level: 'Intermediate',
    icon: '👁️',
    featured: true,
    description: 'Image preprocessing, augmentation, feature extraction & landmark mapping.',
  },
  {
    id: 'skill-model-experimentation',
    name: 'Model Experimentation',
    category: 'Machine Learning',
    level: 'Intermediate',
    icon: '🔬',
    featured: true,
    description: 'Hyperparameter trial tuning, performance tracking & error analysis.',
  },

  // ==========================================
  // 3. Project & System Management
  // ==========================================
  {
    id: 'skill-project-planning',
    name: 'Project Planning',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '📅',
    featured: true,
    description: 'Work breakdown structure, milestone roadmap, resource & risk planning.',
  },
  {
    id: 'skill-project-coordination',
    name: 'Project Coordination',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '🤝',
    featured: true,
    description: 'Cross-functional leadership, committee direction & stakeholder alignment.',
  },
  {
    id: 'skill-requirements-analysis',
    name: 'Requirements Analysis',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '📝',
    featured: true,
    description: 'Stakeholder interviews, user stories & functional/non-functional specs.',
  },
  {
    id: 'skill-process-analysis',
    name: 'Process Analysis',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '⚙️',
    featured: true,
    description: 'Workflow mapping, bottleneck identification & Kaizen continuous improvement.',
  },
  {
    id: 'skill-system-analysis',
    name: 'System Analysis',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '🏗️',
    featured: true,
    description: 'Information flow modeling, data architecture & business-IT alignment.',
  },
  {
    id: 'skill-documentation-management',
    name: 'Documentation Management',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '📂',
    featured: true,
    description: 'Technical reporting, SOP authoring & Change Management control records.',
  },
  {
    id: 'skill-monitoring-evaluation',
    name: 'Monitoring & Evaluation',
    category: 'Project & System Management',
    level: 'Advanced',
    icon: '🎯',
    featured: true,
    description: 'KPI tracking, quality inspection, program feedback loops & retrospective.',
  },

  // ==========================================
  // 4. Productivity & Design Tools
  // ==========================================
  {
    id: 'skill-figma',
    name: 'Figma',
    category: 'Productivity & Design Tools',
    level: 'Intermediate',
    icon: '🎨',
    featured: true,
    description: 'Wireframing, UI prototyping, user flow diagrams & design systems.',
  },
  {
    id: 'skill-streamlit',
    name: 'Streamlit',
    category: 'Productivity & Design Tools',
    level: 'Intermediate',
    icon: '⚡',
    featured: true,
    description: 'Rapid prototyping and deployment of Python analytical web interfaces.',
  },
  {
    id: 'skill-canva',
    name: 'Canva',
    category: 'Productivity & Design Tools',
    level: 'Advanced',
    icon: '🖼️',
    featured: false,
    description: 'Pitch deck presentations, visual branding & publication collateral.',
  },
  {
    id: 'skill-vscode',
    name: 'Visual Studio Code',
    category: 'Productivity & Design Tools',
    level: 'Advanced',
    icon: '💻',
    featured: false,
    description: 'Development environment, extension ecosystems, debugging & git workflows.',
  },
  {
    id: 'skill-powerpoint',
    name: 'Microsoft PowerPoint',
    category: 'Productivity & Design Tools',
    level: 'Advanced',
    icon: '📽️',
    featured: false,
    description: 'Executive briefing, competition pitch decks & structured presentations.',
  },
  {
    id: 'skill-word',
    name: 'Microsoft Word',
    category: 'Productivity & Design Tools',
    level: 'Advanced',
    icon: '📄',
    featured: false,
    description: 'Formal academic proposals, technical specifications & organizational reports.',
  },

  // ==========================================
  // 5. Programming Fundamentals
  // ==========================================
  {
    id: 'skill-c',
    name: 'C',
    category: 'Programming Fundamentals',
    level: 'Intermediate',
    icon: '⚙️',
    featured: false,
    description: 'Low-level procedural logic, pointers, memory addressing & algorithms.',
  },
  {
    id: 'skill-cpp',
    name: 'C++',
    category: 'Programming Fundamentals',
    level: 'Intermediate',
    icon: '🧩',
    featured: false,
    description: 'Object-oriented programming, data structures & computational problem solving.',
  },
];
