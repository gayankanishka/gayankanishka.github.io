import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/gayankanishka', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/gayanwijetunga', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/gayan_wijetunga', icon: Instagram, label: 'Instagram' },
]

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, #22d3ee22 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, #818cf833 0%, transparent 70%)' }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 text-white"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient block sm:inline">Gayan K</span>
            </motion.h1>

            {/* Type animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl text-slate-400 mb-7 h-9"
            >
              <TypeAnimation
                sequence={[
                  'Lead Software Engineer',
                  2200,
                  'Full Stack Developer',
                  2000,
                  'Engineering Leader',
                  2000,
                  'Tech Lead',
                  2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-slate-300"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
            >
              8+ years building scalable, production grade systems with{' '}
              <span className="text-slate-200 font-medium">.NET</span>,{' '}
              <span className="text-slate-200 font-medium">React</span>,{' '}
              <span className="text-slate-200 font-medium">Angular</span>, and{' '}
              <span className="text-slate-200 font-medium">cloud native architectures</span>{' '}
              on AWS &amp; Azure. Leading teams, driving architecture, shipping impact.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-10"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] transition-all duration-200"
                >
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollTo('#projects')}
                className="px-8 py-4 rounded-full border border-white/20 text-slate-300 font-medium hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/[0.06] transition-all duration-200"
              >
                View My Work
              </button>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px]">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #818cf8, #22d3ee)',
                  padding: '2px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0b0f1a]" />
              </div>

              {/* Profile image */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Gayan Kanishka Wijetunga"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full -z-10 blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #22d3ee44, #818cf833)' }}
              />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-5 px-3 py-2 rounded-2xl bg-[#0d1220] border border-white/[0.10] shadow-lg text-xs font-medium text-slate-300 whitespace-nowrap"
            >
              🚀 Lead Engineer
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-5 px-3 py-2 rounded-2xl bg-[#0d1220] border border-white/[0.10] shadow-lg text-xs font-medium text-slate-300 whitespace-nowrap"
            >
              ☁️ Cloud Native
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}
