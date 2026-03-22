import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, ChevronRight } from 'lucide-react'
import { experiences } from '@/data/experience'

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.012] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Career path</span>
          <h2 className="section-heading mt-2">Experience</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            8+ years of progressive growth across field service management,
            e-commerce, and enterprise software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-indigo-400/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.13 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-5 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#080c14]" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl glass hover:border-cyan-400/20 hover:bg-white/[0.05] transition-all duration-300 group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                        <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                          <Briefcase size={12} />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full flex-shrink-0 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400"
                      >
                        <ChevronRight
                          size={14}
                          className="text-cyan-400 flex-shrink-0 mt-0.5"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-lg bg-cyan-400/[0.07] text-cyan-400/90 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
