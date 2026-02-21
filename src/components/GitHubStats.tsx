'use client'

import { motion } from 'framer-motion'
import { Github, Star, GitFork, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  java: number
  error?: string
}

interface Repository {
  name: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
}

const GITHUB_USERNAME = 'wizard17-star'

// Hardcoded top repositories data
const topRepositories: Repository[] = [
  {
    name: 'portfolio-nextjs',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS',
    url: 'https://github.com/wizard17-star/portfolio-nextjs',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
  },
  {
    name: 'TEG-Project',
    description: 'Question Answering System using RAG with Gemini AI',
    url: 'https://github.com/wizard17-star/TEG-Project',
    stars: 0,
    forks: 0,
    language: 'Python',
  },
]

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState<Repository[]>(topRepositories)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )

        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data')
        }

        const userData = await userResponse.json()

        setStats({
          public_repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          java: 0,
        })

        // Fetch pinned repositories
        try {
          const reposResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`,
            {
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            }
          )

          if (reposResponse.ok) {
            const reposData = await reposResponse.json()
            const formattedRepos: Repository[] = reposData.slice(0, 2).map(
              (repo: any) => ({
                name: repo.name,
                description: repo.description || 'No description available',
                url: repo.html_url,
                stars: repo.stargazers_count || 0,
                forks: repo.forks_count || 0,
                language: repo.language || 'Unknown',
              })
            )
            if (formattedRepos.length > 0) {
              setRepos(formattedRepos)
            }
          }
        } catch (error) {
          console.warn('Failed to fetch repos:', error)
        }
      } catch (error) {
        console.error('GitHub API Error:', error)
        setStats({
          public_repos: 0,
          followers: 0,
          following: 0,
          java: 0,
          error: 'Unable to load GitHub stats',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const statCards = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'Repositories',
      value: stats?.public_repos || '—',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: 'Total Stars',
      value: repos.reduce((sum, repo) => sum + repo.stars, 0) || '—',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      label: 'Followers',
      value: stats?.followers || '—',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🐙 GitHub Presence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out my projects and contributions on GitHub
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {statCards.map((card, idx) => (
            <motion.a
              key={idx}
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${card.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90 mb-2">
                    {card.label}
                  </p>
                  <p className="text-4xl font-bold">{card.value}</p>
                </div>
                <div className="opacity-30">{card.icon}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Top Repositories */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            📌 Featured Projects
          </motion.h3>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      {repo.name}
                    </h4>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {repo.language}
                    </span>
                    <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
