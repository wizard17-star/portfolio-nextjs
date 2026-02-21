export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        About Me
      </h1>

      {/* Highlight Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow mb-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
          Data Engineer · Researcher · Problem Solver
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I design data systems that scale. With experience across Azure, Power BI, and SQL,
          I turn complex problems into elegant, actionable insights.
        </p>
      </div>

      {/* What I Do */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16 text-center">
        <SkillCard title="Data Engineering" emoji="🧱" description="Data pipelines, ETL, DWH design, SQL optimization" />
        <SkillCard title="Business Intelligence" emoji="📊" description="50+ Power BI dashboards, actionable KPIs" />
        <SkillCard title="Cloud Architecture" emoji="☁️" description="25+ app migrations with Azure & DevOps tools" />
      </div>

      {/* Experience */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h2>
      <div className="space-y-6 mb-16">
        <ExperienceItem
          role="Test Data Management Specialist"
          company="BMO"
          date="Feb 2025 – Present"
          description="Contributing to secure and automated test data pipelines for enterprise systems."
        />
        <ExperienceItem
          role="Business Analyst"
          company="Köksan"
          date="Aug 2024 – Oct 2024"
          description="Analyzed and optimized internal reporting systems and business data structures."
        />
        <ExperienceItem
          role="Data Engineer"
          company="TEMSA"
          date="Jan 2023 – Jun 2024"
          description="Led cloud migration, data warehousing, and BI reporting across international operations."
        />
      </div>

      {/* Education */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-left">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">M.S. in Data Science</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Polish-Japanese Academy of Information Technology, 2024–</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Specialized in software, databases, and business process engineering.</p>
      </div>
    </section>
  )
}

function SkillCard({ title, emoji, description }: { title: string; emoji: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-4xl mb-2">{emoji}</div>
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function ExperienceItem({
  role,
  company,
  date,
  description,
}: {
  role: string
  company: string
  date: string
  description: string
}) {
  return (
    <div className="border-l-4 border-blue-600 pl-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{role} @ {company}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
