import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500 dark:text-gray-400 gap-2 md:gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} <span className="text-gray-700 dark:text-white">Serhat Aslan</span></p>
          <p className="hidden md:inline">Data Engineer & Researcher</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wizard17-star"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/serhat-aslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </a>
          <Link
            href="/contact"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}