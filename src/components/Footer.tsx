import { Twitter, Linkedin, Github, Instagram, Sun, Moon, ArrowUpRight } from 'lucide-react';

function WixeloLogo({ id }: { id: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect width="34" height="34" rx="9" fill={`url(#${id})`} />
      <path
        d="M6 9.5 L11.5 24.5 L17 15 L22.5 24.5 L28 9.5"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface FooterProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Design & UX', href: '#services' },
      { label: 'Développement Web', href: '#services' },
      { label: 'Performance', href: '#services' },
      { label: 'SEO & Croissance', href: '#services' },
    ]
  },
  {
    title: 'Agence',
    links: [
      { label: 'Notre process', href: '#process' },
      { label: 'Témoignages', href: '#testimonials' },
      { label: 'Blog (bientôt)', href: '#' },
      { label: 'Carrières', href: '#' },
    ]
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'Cookies', href: '#' },
    ]
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function Footer({ isDark, onToggleTheme }: FooterProps) {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA band */}
        <div className="py-14 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-slate-400">Démarrons ensemble — réponse garantie sous 24h.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold active:scale-95 shadow-lg shadow-blue-500/25 whitespace-nowrap shrink-0 shimmer-btn glow-btn group"
          >
            Démarrer un projet
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>
        </div>

        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group" aria-label="Wixelo — Accueil">
              <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                <WixeloLogo id="wg-footer" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Wixe<span className="text-blue-400">lo</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Agence web premium spécialisée B2B. Nous créons des expériences digitales qui convertissent, impressionnent et durent.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2.5" role="list">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Wixelo SAS. Tous droits réservés. · Paris, France
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">Thème</span>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all duration-200"
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? (
                <><Sun className="w-3.5 h-3.5" aria-hidden="true" /> Mode clair</>
              ) : (
                <><Moon className="w-3.5 h-3.5" aria-hidden="true" /> Mode sombre</>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
