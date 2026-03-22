import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import pinnedRepos from '@/src/data/pinned-repos.json'

interface Repo {
  id: string
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  languageColor: string | null
}

const repos: Repo[] = pinnedRepos as Repo[]

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Open source</span>
          <h2 className="section-heading mt-2">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of my pinned repositories on GitHub.
          </p>
        </motion.div>

        {repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-6 rounded-2xl glass hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.08] transition-all duration-200">
                    <Code2
                      size={18}
                      className="text-slate-500 group-hover:text-cyan-400 transition-colors"
                    />
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-slate-700 group-hover:text-slate-400 transition-colors mt-1"
                  />
                </div>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {repo.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                  {repo.description || 'No description provided.'}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Star size={13} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GitFork size={13} />
                      {repo.forks_count}
                    </span>
                  </div>
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor ?? '#6b7280' }}
                      />
                      {repo.language}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500">
            <Github size={40} className="mx-auto mb-4 opacity-30" />
            <p>Could not load repositories. Visit my GitHub profile directly.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/gayankanishka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-slate-300 text-sm font-medium hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/[0.05] transition-all duration-200"
          >
            <Github size={18} />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
