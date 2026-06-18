import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, CheckSquare, Rocket } from 'lucide-react';

const cards = [
  {
    id: 1,
    icon: Search,
    title: 'Découverte & Stratégie',
    description: 'Nous analysons votre marché, vos concurrents et vos objectifs pour définir une stratégie digitale sur-mesure. Ateliers de co-création inclus.',
    colSpan: 'md:col-span-2',
    accent: false,
    highlight: true,
    badge: 'Étape 01',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Design System',
    description: 'Création d\'une identité visuelle cohérente avec composants réutilisables, tokens de design et prototypes interactifs validés.',
    colSpan: 'md:col-span-1',
    accent: false,
    highlight: false,
    badge: 'Étape 02',
  },
  {
    id: 3,
    icon: Code2,
    title: 'Développement',
    description: 'Code propre, modulaire et performant. Stack moderne, revue de code systématique et architecture scalable.',
    colSpan: 'md:col-span-1',
    accent: false,
    highlight: false,
    badge: 'Étape 03',
  },
  {
    id: 4,
    icon: CheckSquare,
    title: 'Tests & Qualité',
    description: 'Tests cross-browser, audit d\'accessibilité, performance Lighthouse et validation UX avant chaque livraison.',
    colSpan: 'md:col-span-1',
    accent: false,
    highlight: false,
    badge: 'Étape 04',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Lancement & Déploiement',
    description: 'Mise en production fluide, monitoring en temps réel, DNS et CDN configurés pour une disponibilité 99.9%.',
    colSpan: 'md:col-span-2',
    accent: true,
    highlight: false,
    badge: 'Étape 05',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-14 lg:py-20 bg-white dark:bg-slate-800/30" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-badge">Notre méthode</p>
          <h2 id="process-heading" className="section-title mb-4">
            Un process éprouvé,<br className="hidden sm:block" />
            <span className="gradient-text"> des résultats garantis</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            De l'idée au lancement, chaque étape est maîtrisée pour vous livrer un produit irréprochable dans les délais convenus.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
            };
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                onMouseMove={!card.accent ? handleSpotlight : undefined}
                className={`
                  ${card.colSpan}
                  group relative rounded-2xl p-6 lg:p-7 border
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                  ${card.accent
                    ? 'bg-blue-600 dark:bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20 featured-pulse'
                    : card.highlight
                    ? 'spotlight-card bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-600/60 hover:shadow-blue-500/10'
                    : 'spotlight-card bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600/60 hover:shadow-blue-500/10'
                  }
                `}
              >
                {/* Background glow for highlight card */}
                {card.highlight && (
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/8 blur-2xl pointer-events-none" aria-hidden="true" />
                )}

                {/* Badge */}
                <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-4 px-2 py-0.5 rounded-md ${
                  card.accent
                    ? 'text-blue-200 bg-white/10'
                    : 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                }`}>
                  {card.badge}
                </span>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  card.accent
                    ? 'bg-white/15 group-hover:bg-white/25'
                    : 'bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20'
                }`}>
                  <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${card.accent ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} aria-hidden="true" />
                </div>

                <h3 className={`text-lg font-bold mb-2 ${card.accent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${card.accent ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  {card.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
