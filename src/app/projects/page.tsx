'use client'

import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Cloud Migration & Data Warehouse',
      description: 'Migrated 25+ enterprise applications to Azure. Built scalable data warehouse solutions for SAP, Salesforce, Dynamics.',
      link: '#cloud',
    },
    {
      title: 'Forecasting Dashboard (Power BI)',
      description: 'Developed AI-supported dashboard for demand forecasting using SQL + DAX + Power BI.',
      link: '#forecast',
    },
    {
      title: 'Data Governance & MDM System',
      description: 'Implemented centralized metadata + masking + ownership structures across global data architecture.',
      link: '#governance',
    },
  ]

  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Here's a selection of data engineering projects I've worked on — from cloud migrations to building modern BI systems and data governance infrastructures.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 p-6 text-left">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <Link href={project.link} className="text-blue-600 hover:underline dark:text-blue-400 text-sm">
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
