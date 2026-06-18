import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Essentiel',
    price: 700,
    description: 'Idéal pour lancer votre présence en ligne rapidement avec un site professionnel clé en main.',
    badge: null,
    featured: false,
    cta: 'Lancer mon site',
    features: [
      'Site vitrine jusqu\'à 5 pages',
      'Design responsive mobile-first',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Hébergement 1 an inclus',
      'Livraison en 2 semaines',
    ],
  },
  {
    name: 'Professionnel',
    price: 1400,
    description: 'La solution complète pour les entreprises qui veulent performer et se démarquer de la concurrence.',
    badge: 'Le plus populaire',
    featured: true,
    cta: 'Booster mon activité',
    features: [
      'Site jusqu\'à 15 pages',
      'Design sur-mesure premium',
      'Animations & micro-interactions',
      'SEO avancé + Google Analytics',
      'Intégration CRM / outils métiers',
      'Support 3 mois inclus',
      'Livraison en 4 semaines',
    ],
  },
  {
    name: 'Avancé',
    price: 2200,
    description: 'Pour les projets ambitieux nécessitant des fonctionnalités avancées et un accompagnement complet.',
    badge: null,
    featured: false,
    cta: 'Discuter de mon projet',
    features: [
      'Site ou app web sur-mesure',
      'E-commerce ou espace membre',
      'Performances & Core Web Vitals',
      'SEO technique complet',
      'Tableau de bord analytics',
      'Support 6 mois inclus',
      'Livraison en 6 semaines',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 lg:py-20 bg-white dark:bg-slate-800/30" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-badge">Tarifs</p>
          <h2 id="pricing-heading" className="section-title mb-4">
            Des tarifs clairs,<br className="hidden sm:block" />
            <span className="gradient-text"> sans mauvaises surprises</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Chaque projet est unique. Ces tarifs sont indicatifs — contactez-nous pour un devis personnalisé gratuit.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
            };
            return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              onMouseMove={!plan.featured ? handleSpotlight : undefined}
              className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                plan.featured
                  ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-500/30 scale-[1.03] featured-pulse'
                  : 'spotlight-card bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-2'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-blue-600 text-xs font-bold shadow-lg shadow-blue-500/20 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${plan.featured ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'}`}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-3">
                <span className={`text-5xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.price.toLocaleString('fr-FR')}
                </span>
                <span className={`text-xl font-semibold mb-1 ${plan.featured ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>€</span>
              </div>

              <p className={`text-sm leading-relaxed mb-7 ${plan.featured ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.featured ? 'bg-white/15' : 'bg-blue-50 dark:bg-blue-900/30'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} aria-hidden="true" />
                    </div>
                    <span className={`text-sm ${plan.featured ? 'text-blue-50' : 'text-slate-600 dark:text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm active:scale-[0.97] group shimmer-btn ${
                  plan.featured
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-900/20 transition-all duration-200'
                    : 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 glow-btn'
                }`}
              >
                <Zap className="w-4 h-4" aria-hidden="true" />
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </a>
            </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 dark:text-slate-500 mt-10"
        >
          Tous les prix sont HT · TVA 20% applicable · Devis personnalisé gratuit sous 24h
        </motion.p>
      </div>
    </section>
  );
}
