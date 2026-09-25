/**
 * Single source of truth for all profile content on the site.
 * Keep this in sync with public/Resume_Serhat.pdf.
 */

export const site = {
  url: 'https://www.serhataslan.com',
  name: 'Serhat Aslan',
  role: 'Data Engineer',
  headline: 'Data Engineer — Azure, Data Warehousing & Power BI',
  description:
    'Serhat Aslan is a Warsaw-based Data Engineer with 3+ years of experience building Azure data warehouses, ETL pipelines and Power BI reporting for enterprise teams.',
  location: 'Warsaw, Poland',
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

export const highlights = [
  { value: '3+', label: 'Years in data engineering & BI' },
  { value: '25+', label: 'Applications integrated into the DWH' },
  { value: '50+', label: 'Power BI dashboards & reports' },
  { value: '100+', label: 'SQL queries optimized' },
]

export type Experience = {
  role: string
  company: string
  location?: string
  period: string
  points: string[]
  tech?: string[]
}

export const experience: Experience[] = [
  {
    role: 'Test Data Management Specialist',
    company: 'BMO',
    period: '2025 – Present',
    points: [
      'Create and manage test data sets that support software testing across enterprise systems.',
      'Apply data masking and anonymization in line with GDPR and KVKK.',
      'Use SQL for data extraction, validation and troubleshooting.',
      'Work with QA and development teams to keep test environments reliable.',
    ],
    tech: ['SQL', 'Test Data Management', 'Data Masking', 'GDPR'],
  },
  {
    role: 'Business Analyst',
    company: 'Köksan',
    period: 'Aug 2024 – Oct 2024',
    points: ['Analyzed and optimized internal reporting systems and business data structures.'],
    tech: ['Power BI', 'SQL', 'Data Modeling'],
  },
  {
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
    degree: "Master's in Data Science",
    school: 'Polish-Japanese Academy of Information Technology (PJATK)',
    location: 'Warsaw',
    period: '2024 – Present',
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
  description: string
  tech: string[]
  company?: string
  github?: string
  highlight?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Modern Data Warehouse on Azure',
    company: 'TEMSA',
    description:
      'Cloud data warehouse with CI/CD that unifies SAP, Salesforce, Dynamics, Karmak and SQL Server data. Replaced legacy data services with Azure Data Factory and streamlined data flow across platforms.',
    tech: ['Azure Data Factory', 'SQL Server', 'Data Warehousing', 'CI/CD'],
    highlight: '25+ source applications',
    featured: true,
  },
  {
    title: 'DRAM-T: Risk-Aware Multimodal Transformer',
    description:
      "MSc thesis. A Transformer that fuses market prices, macroeconomic series and FinBERT news sentiment to forecast returns, volatility and cross-asset correlation for portfolio VaR. Evaluated over 88 runs with leakage-safe walk-forward validation and rigorous significance testing; 100+ unit tests.",
    tech: ['PyTorch', 'Transformers', 'FinBERT', 'Time Series', 'Statistics'],
    github: 'https://github.com/wizard17-star/dramt',
    highlight: 'MSc thesis',
    featured: true,
  },
  {
    title: 'CDC Data Platform with Delta Lake',
    description:
      'End-to-end change data capture: PostgreSQL changes are captured by Debezium, streamed through Kafka and processed by Spark into a Bronze → Silver → Gold medallion lakehouse on Delta Lake and MinIO, with a star schema in the Gold layer. Runs fully in Docker.',
    tech: ['Kafka', 'Debezium', 'Spark', 'Delta Lake', 'Docker'],
    github: 'https://github.com/wizard17-star/data-platform',
    highlight: 'Streaming',
    featured: true,
  },
  {
    title: 'Fabric-Based BI Architecture',
    company: 'TEMSA',
    description:
      'End-to-end BI on Microsoft Fabric combining lakehouse, dataflows and semantic models to serve reporting for Europe, America and Türkiye.',
    tech: ['Microsoft Fabric', 'Lakehouse', 'Dataflows', 'Power BI'],
    highlight: 'Multi-region reporting',
  },
  {
    title: 'RAG Evaluation App',
    description:
      'Compares retrieval-augmented generation techniques (hybrid retrieval, reranking, metadata filtering, chain-of-thought prompting) using Gemini, FAISS and Sentence Transformers, scored on faithfulness, relevance and context precision.',
    tech: ['Python', 'Gemini', 'FAISS', 'Streamlit'],
    github: 'https://github.com/wizard17-star/TEG-Project',
  },
  {
    title: 'Consumer Complaints Classification',
    description:
      'Text classification on the CFPB consumer complaints dataset (277K records, stratified to 10K). Compared four models on TF-IDF features; Logistic Regression with SMOTE reached F1 0.747.',
    tech: ['scikit-learn', 'NLP', 'TF-IDF', 'SMOTE'],
    github: 'https://github.com/wizard17-star/Consumer-Complaints-Classification',
  },
  {
    title: 'AI Travel Assistant',
    description:
      'LLM-powered trip planner that combines GPT-4 with attraction, weather and hotel APIs to generate city itineraries, served by a FastAPI backend and a Streamlit UI.',
    tech: ['FastAPI', 'OpenAI', 'Streamlit', 'REST APIs'],
    github: 'https://github.com/wizard17-star/ai-travel-assistant',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This site: a statically rendered Next.js App Router site with ISR-powered Medium feed, dark mode, SEO metadata and structured data.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/wizard17-star/portfolio-nextjs',
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
