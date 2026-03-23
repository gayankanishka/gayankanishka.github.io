import { Github, Linkedin, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/gayankanishka', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/gayanwijetunga', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/gayan_wijetunga', icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-gradient text-lg font-bold">Gayan K</span>
            <p className="text-slate-600 text-xs mt-1.5">
              Lead Software Engineer · Colombo, Sri Lanka
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            <span>Built with</span>
            <Heart size={12} className="text-red-400 fill-red-400" />
            <span>using Vite &amp; Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl text-slate-600 hover:text-cyan-400 hover:bg-cyan-400/[0.06] transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-slate-700 text-xs">
          © {new Date().getFullYear()} Gayan Kanishka Wijetunga. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
