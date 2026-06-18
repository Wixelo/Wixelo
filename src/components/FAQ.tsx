import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer: "Tout dépend du projet. Un site vitrine simple est livré en 2 semaines, un site professionnel en 4 semaines, et un projet avancé (e-commerce, application) en 6 semaines. Nous vous donnons une date de livraison précise dès le début et nous la respectons."
  },
  {
    question: "Est-ce que je peux modifier mon site moi-même après livraison ?",
    answer: "Oui. Nous intégrons un espace d'administration simple et intuitif qui vous permet de modifier vos textes, images et contenus sans aucune connaissance technique. Une formation est incluse à la livraison."
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    answer: "Nous travaillons en étroite collaboration avec vous à chaque étape du projet pour éviter les mauvaises surprises. Vous validez le design avant le développement, et nous intégrons vos retours jusqu'à ce que le résultat vous convienne."
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer: "Oui. Chaque site que nous créons est optimisé pour le référencement naturel (SEO) dès le départ : structure technique, balises, vitesse de chargement et contenu adapté. Pour des résultats avancés, nous proposons également un accompagnement SEO dédié."
  },
  {
    question: "Est-ce que le site fonctionnera sur mobile ?",
    answer: "Absolument. Tous nos sites sont conçus en priorité pour mobile (approche Mobile-First) et s'adaptent parfaitement à toutes les tailles d'écran : smartphone, tablette et ordinateur."
  },
  {
    question: "Que comprend la maintenance ?",
    answer: "La maintenance inclut les mises à jour de sécurité, les sauvegardes régulières, la surveillance de la disponibilité du site et les corrections en cas de bug. Vous pouvez aussi nous confier les évolutions et ajouts de contenu."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section id="faq" className="py-14 lg:py-20 bg-slate-50 dark:bg-slate-900" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-badge">FAQ</p>
          <h2 id="faq-heading" className="section-title mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tout ce que vous voulez savoir avant de vous lancer.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-blue-300 dark:border-blue-600/70 bg-white dark:bg-slate-800 shadow-lg shadow-blue-500/8'
                  : 'border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5'
              }`}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <span className={`shrink-0 text-xs font-bold tabular-nums w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'bg-slate-100 dark:bg-slate-700/80 text-slate-400 dark:text-slate-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {faq.question}
                  </span>

                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-blue-600 text-white rotate-180'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600'
                  }`}>
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      : <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    >
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Vous avez une autre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm active:scale-95 shadow-lg shadow-blue-500/25 shimmer-btn glow-btn group"
          >
            Contactez-nous
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
