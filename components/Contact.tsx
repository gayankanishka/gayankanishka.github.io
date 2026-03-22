import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  MapPin,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gayanwijetunga',
    href: 'https://www.linkedin.com/in/gayanwijetunga',
    display: '/in/gayanwijetunga',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/gayankanishka',
    href: 'https://github.com/gayankanishka',
    display: 'gayankanishka',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: null,
    display: 'Colombo, Sri Lanka · Open to remote',
  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('loading')

    try {
      const formData = new FormData(formRef.current)
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        throw new Error(data.message)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputBase =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all duration-200 text-sm'

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-400/20" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Let&apos;s connect</span>
          <h2 className="section-heading mt-2">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say
            hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, href, display }) => {
              const inner = (
                <div className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-400/30 transition-all group cursor-pointer">
                  <div className="p-2.5 rounded-xl bg-cyan-400/[0.08] text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/[0.15] transition-colors flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-600 mb-0.5">{label}</div>
                    <div className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors truncate">
                      {display}
                    </div>
                  </div>
                </div>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              )
            })}

            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-indigo-500/[0.06] border border-cyan-500/15">
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently based in{' '}
                <span className="text-cyan-400">Colombo, Sri Lanka</span>.
                Open to remote opportunities worldwide and in person roles
                in Sri Lanka.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Honeypot — bots fill this, humans don't */}
              <input type="checkbox" name="botcheck" className="hidden" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className={inputBase}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your email"
                  required
                  className={inputBase}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className={inputBase}
              />

              <textarea
                name="message"
                placeholder="Your message..."
                required
                rows={6}
                className={`${inputBase} resize-none`}
              />

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-sm"
                >
                  <CheckCircle size={18} className="flex-shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-red-400 text-sm"
                >
                  <AlertCircle size={18} className="flex-shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold flex items-center justify-center gap-2.5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
