import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, BookOpen, Award, Code2 } from 'lucide-react'

const stats = [
  { value: '8+', label: 'Years Experience', sublabel: 'Since 2017' },
  { value: '4', label: 'Companies', sublabel: 'incl. IFS & Virtusa' },
  { value: 'Lead', label: 'Current Level', sublabel: 'Since 2023' },
  { value: 'MSc', label: 'Education', sublabel: 'Univ. of Westminster' },
]

const highlights = [
  { icon: MapPin, text: 'Based in Colombo, Western Province, Sri Lanka' },
  {
    icon: GraduationCap,
    text: 'MSc Advanced Software Engineering · University of Westminster (2021–2022)',
  },
  {
    icon: GraduationCap,
    text: 'BSc Information Technology · Sri Lanka Institute of Information Technology (2014–2017)',
  },
  {
    icon: BookOpen,
    text: 'Published: Wi-Fi Password Two-Factor Authentication for Home Users (W2FA)',
  },
  { icon: Award, text: 'Claude Code: Software Engineering with Generative AI Agents' },
  { icon: Award, text: 'Certified: Google AI Essentials' },
  { icon: Code2, text: 'Currently exploring Agentic AI Workflows & LLM integration' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Who I am</span>
          <h2 className="section-heading mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I&apos;m a{' '}
              <span className="text-cyan-400 font-medium">
                Lead Software Engineer
              </span>{' '}
              with a strong track record of delivering scalable, high quality
              software in fast paced environments. My expertise spans full stack
              development with{' '}
              <span className="text-slate-200">C#, JavaScript, TypeScript, and the .NET ecosystem</span>,
              through to cloud native architectures on{' '}
              <span className="text-slate-200">AWS and Microsoft Azure</span>.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I thrive at the intersection of technical depth and team
              leadership driving architectural decisions, mentoring engineers,
              and aligning engineering execution with business goals. I believe
              great software isn&apos;t just technically sound; it creates
              meaningful impact.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Always curious, always evolving. Currently exploring the frontier
              of agentic AI workflows and their role in enterprise software.
            </p>

            {/* Highlights list */}
            <div className="space-y-3 pt-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-cyan-400/[0.08] text-cyan-400">
                    <Icon size={14} />
                  </div>
                  <span className="text-slate-400 text-sm leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, sublabel }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                  className="p-5 rounded-2xl glass hover:border-cyan-400/20 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-gradient mb-1.5">
                    {value}
                  </div>
                  <div className="text-slate-300 text-sm font-medium">
                    {label}
                  </div>
                  <div className="text-slate-600 text-xs mt-1">{sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="p-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] to-indigo-500/[0.06]"
            >
              <div className="text-xs text-cyan-400 font-semibold mb-2 tracking-wide uppercase">
                Core Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'C#',
                  '.NET',
                  'TypeScript',
                  'JavaScript',
                  'SQL',
                  'React',
                  'Angular',
                  'Node.js',
                  'Next.js',
                  'Docker',
                  'AWS',
                  'Azure',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.06] border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
