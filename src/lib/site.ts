/**
 * Single source of truth for all profile content on the site.
 * Keep this in sync with public/Resume_Serhat.pdf.
 */

export const site = {
  url: 'https://www.serhataslan.com',
  name: 'Serhat Aslan',
  role: 'Data Engineer',
  headline: 'Data Engineer in Warsaw',
  description:
    'Serhat Aslan is a Data Engineer in Warsaw, Poland with 5 years of experience in data pipelines, data warehousing and Power BI reporting. M.Sc. in Data Science, Microsoft certified. Currently at BMO supporting QA and UAT teams.',
  location: 'Warsaw, Poland',
  timeZone: 'Europe/Warsaw',
  email: 'serhataslan0009@gmail.com',
  resume: '/Resume_Serhat.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/serhat-aslan/',
    github: 'https://github.com/wizard17-star',
    medium: 'https://medium.com/@serhat-aslan',
  },
  mediumUsername: 'serhat-aslan',
  languages: ['Turkish (native)', 'English (C1)', 'Greek (C1)', 'Polish (A2)'],
}

/** Technologies shown under the intro */
export const stack = [
  'SQL',
  'Python',
  'Azure Data Factory',
  'Microsoft Fabric',
  'Power BI',
  'SQL Server',
  'PostgreSQL',
  'Spark',
  'Kafka',
  'Docker',
  'DAX',
  'PyTorch',
]

export type Experience = {
  summary: string
  role: string
  company: string
  location?: string
  period: string
  points: string[]
  tech?: string[]
}

export const experience: Experience[] = [
  {
    summary: 'Test data and end-to-end test support for QA and UAT teams.',
    role: 'Test Data Management Specialist',
    company: 'BMO',
    period: '2025 – Present',
    points: [
      'Work closely with QA and UAT teams and prepare the test data they need to create their test cases.',
      'Give end-to-end test support, from setting up test data to checking results during test runs.',
      'Build and manage test data sets for many connected banking systems.',
      'Mask and anonymize sensitive data so test environments are safe to use.',
      'Use SQL to find, extract and validate data, and to solve data issues quickly.',
    ],
    tech: ['SQL', 'Test Data Management', 'End-to-end testing', 'UAT', 'Data Masking'],
  },
  {
    summary: 'Reporting systems and business data structures.',
    role: 'Business Analyst',
    company: 'Köksan',
    period: 'Aug 2024 – Oct 2024',
    points: ['Analyzed and optimized internal reporting systems and business data structures.'],
    tech: ['Power BI', 'SQL', 'Data Modeling'],
  },
  {
    summary: 'Built the Azure data warehouse for 25+ applications and led their cloud migration.',
    role: 'Data Engineer',
    company: 'TEMSA',
    location: 'Istanbul, Türkiye',
    period: '2022 – 2024',
    points: [
      'Designed the data warehouse architecture and ETL processes for 25+ applications on Azure.',
      'Replaced legacy data services with Azure Data Factory, integrating SAP, SQL Server, Salesforce, Dynamics and Karmak.',
      'Led cloud migration projects for 25+ applications, improving scalability and efficiency.',
      'Built 50+ Power BI dashboards and optimized 100+ SQL queries.',
      'Introduced data governance, master data management, data catalog and data masking.',
    ],
    tech: ['Azure Data Factory', 'SQL Server', 'T-SQL', 'Power BI', 'DAX', 'SSAS'],
  },
  {
    summary: 'Requirements and delivery tracking for 10+ R&D projects.',
    role: 'R&D Project Leader',
    company: 'TEMSA',
    location: 'Istanbul, Türkiye',
    period: '2022',
    points: [
      'Collected client requirements and tracked delivery for 10+ projects.',
      'Organized 50+ project documents into a maintainable knowledge base.',
    ],
  },
  {
    summary: 'Neural network models and stakeholder reporting.',
    role: 'Data Analyst Intern',
    company: 'Badem Information Systems',
    period: 'Sep 2021 – Dec 2021',
    points: [
      'Built 5+ neural network models and presented findings to 10+ stakeholders.',
    ],
    tech: ['Python', 'Machine Learning'],
  },
]

export const education = [
  {
    degree: 'M.Sc. in Data Science',
    school: 'Polish-Japanese Academy of Information Technology (PJATK)',
    location: 'Warsaw',
    period: '2024 – 2026',
  },
  {
    degree: 'B.Sc. in Mechanical Engineering',
    school: 'Çukurova University',
    location: 'Adana',
    period: '',
  },
]

export type Project = {
  title: string
  /** Short context shown next to the title, e.g. "M.Sc. thesis" */
  tag: string
  /** When the project was built, newest first */
  date: string
  /** How data moves through the system, left to right */
  flow: string[]
  description: string
  tech: string[]
  github?: string
}

/** Newest first. Dates come from the GitHub repositories and the CV. */
export const projects: Project[] = [
  {
    title: 'DRAM-T',
    tag: 'M.Sc. thesis',
    date: 'Sep 2026',
    flow: ['Prices · Macro · News', 'FinBERT + MIDAS', 'Multimodal Transformer', 'Return · Volatility · Correlation', 'Portfolio VaR'],
    description:
      'Risk-aware multimodal Transformer that fuses market prices, macroeconomic series and FinBERT news sentiment to forecast returns, volatility and cross-asset correlation for portfolio VaR. 88 runs under leakage-safe walk-forward validation, rigorous significance testing, 100+ unit tests.',
    tech: ['PyTorch', 'Transformers', 'FinBERT', 'Time series'],
    github: 'https://github.com/wizard17-star/dramt',
  },
  {
    title: 'Consumer Complaints Classification',
    tag: 'NLP',
    date: 'Jan 2026',
    flow: ['277K complaints', 'TF-IDF', 'SMOTE', 'Logistic Regression', 'F1 0.747'],
    description:
      'Text classification on 277K CFPB consumer complaints (stratified to 10K). Four models compared on TF-IDF features; Logistic Regression with SMOTE reached F1 0.747.',
    tech: ['scikit-learn', 'NLP', 'TF-IDF', 'SMOTE'],
    github: 'https://github.com/wizard17-star/Consumer-Complaints-Classification',
  },
  {
    title: 'CDC Data Platform',
    tag: 'streaming',
    date: 'Jan 2026',
    flow: ['PostgreSQL', 'Debezium', 'Kafka', 'Spark', 'Delta Lake · Bronze → Silver → Gold'],
    description:
      'End-to-end change data capture: every Postgres insert, update and delete is captured by Debezium, streamed through Kafka and processed by Spark into a medallion lakehouse on Delta Lake and MinIO, with a star schema in Gold. Fully Dockerized.',
    tech: ['Kafka', 'Debezium', 'Spark', 'Delta Lake', 'Docker'],
    github: 'https://github.com/wizard17-star/data-platform',
  },
  {
    title: 'AI Travel Assistant',
    tag: 'LLM app',
    date: 'Jun 2025',
    flow: ['Streamlit UI', 'FastAPI', 'GPT-4 + travel APIs', 'Itinerary'],
    description:
      'LLM trip planner combining GPT-4 with attraction, weather and hotel APIs to generate city itineraries, served by a FastAPI backend and a Streamlit UI.',
    tech: ['FastAPI', 'OpenAI', 'Streamlit'],
    github: 'https://github.com/wizard17-star/ai-travel-assistant',
  },
  {
    title: 'RAG Evaluation App',
    tag: 'LLM',
    date: 'Apr 2025',
    flow: ['Documents', 'Sentence Transformers', 'FAISS', 'Gemini', 'Faithfulness · Relevance'],
    description:
      'Compares retrieval-augmented generation techniques (hybrid retrieval, reranking, metadata filtering, chain-of-thought) with Gemini, FAISS and Sentence Transformers.',
    tech: ['Python', 'Gemini', 'FAISS', 'Streamlit'],
    github: 'https://github.com/wizard17-star/TEG-Project',
  },
  {
    title: 'Modern Data Warehouse on Azure',
    tag: 'TEMSA',
    date: '2023 – 2024',
    flow: ['SAP · Salesforce · Dynamics · Karmak', 'Azure Data Factory', 'SQL Server DWH', 'Power BI'],
    description:
      'CI/CD-driven cloud warehouse unifying 25+ source applications. Replaced legacy data services with Azure Data Factory and streamlined data flow across platforms.',
    tech: ['Azure Data Factory', 'SQL Server', 'Data Warehousing', 'CI/CD'],
  },
]

export type Certification = {
  name: string
  /** Short label printed on the badge */
  short: string
  /** Credential type shown under the badge */
  kind: string
  issuer: string
  issued: string
  credentialId?: string
  url?: string
  /** Official badge image published by the issuer */
  badge?: string
}

const learn = (path: string) => `https://learn.microsoft.com/api/credentials/share/en-us/${path}`

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    short: 'Fabric Data Engineer',
    kind: 'Associate',
    issuer: 'Microsoft',
    issued: 'Jun 2025',
    credentialId: 'D72B36A01DD84512',
    badge: '/badges/microsoft-certified-associate.svg',
    url: learn('SerhatAslan-6535/D72B36A01DD84512'),
  },
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    short: 'Azure AI Engineer',
    kind: 'Associate',
    issuer: 'Microsoft',
    issued: 'Jun 2025',
    credentialId: '468AA8CB49CAF8C7',
    badge: '/badges/microsoft-certified-associate.svg',
    url: learn('SerhatAslan-8258/468AA8CB49CAF8C7'),
  },
  {
    name: 'Implement a data warehouse in Microsoft Fabric',
    short: 'Fabric Data Warehouse',
    kind: 'Applied Skills',
    issuer: 'Microsoft',
    issued: 'May 2024',
    credentialId: '6487E34CD910364B',
    badge: '/badges/microsoft-applied-skills.svg',
    url: learn('SerhatAslan-7152/6487E34CD910364B'),
  },
  {
    name: 'ITIL® Foundation',
    short: 'ITIL®',
    kind: 'Foundation',
    issuer: 'Kalayci.com',
    issued: 'Dec 2023',
  },
]

export const skills = [
  {
    group: 'Data Engineering',
    items: ['Azure Data Factory', 'ETL / ELT', 'Data Warehousing', 'Data Modeling', 'T-SQL', 'Python', 'Spark', 'Kafka', 'Debezium (CDC)', 'Delta Lake'],
  },
  {
    group: 'BI & Analytics',
    items: ['Power BI', 'DAX', 'SSAS', 'Microsoft Fabric', 'KPI Design'],
  },
  {
    group: 'Cloud & Platforms',
    items: ['Azure', 'SQL Server', 'PostgreSQL', 'Docker', 'SAP (source)', 'Salesforce (source)'],
  },
  {
    group: 'Governance & Quality',
    items: ['Data Governance', 'Master Data Management', 'Data Catalog', 'Data Masking', 'Test Data Management', 'GDPR / KVKK'],
  },
  {
    group: 'ML & AI',
    items: ['PyTorch', 'Transformers', 'scikit-learn', 'NLP', 'RAG', 'FastAPI'],
  },
]
