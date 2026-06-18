import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, MousePointerClick, ShoppingCart, RefreshCw, Wrench, SearchCheck, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: Monitor,
    title: 'Site vitrine',
    description: 'Présentez votre activité avec élégance. Un site professionnel, rapide et optimisé pour convertir vos visiteurs en clients.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    cta: 'Créer mon site vitrine',
  },
  {
    icon: MousePointerClick,
    title: 'Landing page',
    description: 'Une page unique pensée pour l\'action. Idéale pour lancer une offre, capter des leads ou promouvoir un événement.',
    color: 'text-blue-600',
    bg: 'bg-purple-50 dark:bg-blue-900/20',
    cta: 'Lancer ma landing page',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Vendez en ligne avec une boutique performante, sécurisée et pensée pour maximiser vos conversions et votre panier moyen.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    cta: 'Ouvrir ma boutique en ligne',
  },
  {
    icon: RefreshCw,
    title: 'Refonte complète',
    description: 'Votre site actuel ne vous représente plus ? Nous le repensons de A à Z — design, performance et expérience utilisateur.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    cta: 'Refondre mon site',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Mises à jour, sauvegardes, corrections et monitoring continu. Votre site reste rapide, sécurisé et opérationnel en permanence.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    cta: 'Sécuriser mon site',
  },
  {
    icon: SearchCheck,
    title: 'Référencement SEO',
    description: 'Apparaissez en première page de Google. Audit technique, optimisation on-page et stratégie de contenu pour durer dans le temps.',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    cta: 'Booster mon référencement',
  },
];

export default function Offerings() {
  return (
    <section id="testimonials" className="py-14 lg:py-20 bg-slate-50 dark:bg-slate-900" aria-labelledby="offerings-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-badge">Ce que nous construisons</p>
          <h2 id="offerings-heading" className="section-title mb-4">
            Des solutions pour chaque<br className="hidden sm:block" />
            <span className="gradient-text"> besoin digital</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Que vous partiez de zéro ou que vous souhaitiez améliorer l'existant, nous avons la solution adaptée à votre situation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {offerings.map((item, i) => {
            const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
            };
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onMouseMove={handleSpotlight}
              className="spotlight-card group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 hover:border-blue-300 dark:hover:border-blue-600/60 hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <item.icon className={`w-5 h-5 ${item.color} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{item.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
              >
                {item.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
              </a>
            </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Vous ne savez pas par où commencer ?{' '}
            <strong className="text-slate-700 dark:text-slate-300">On vous guide.</strong>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm active:scale-95 shadow-lg shadow-blue-500/25 shimmer-btn glow-btn group"
          >
            Discuter de mon projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
