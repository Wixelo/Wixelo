import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code2, Zap, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { serviceTabs } from '../data';

const tabIcons = [Palette, Code2, Zap, TrendingUp];

const tabVisuals = [
  // Design tab visual
  <div className="space-y-3">
    <div className="flex gap-2">
      {['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#0EA5E9'].map(color => (
        <div key={color} className="w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: color }} />
      ))}
    </div>
    <div className="space-y-2">
      {['Heading XL — Bold', 'Paragraph — Regular', 'Caption — Medium'].map((t, i) => (
        <div key={t} className="flex items-center gap-3">
          <div className={`h-${i === 0 ? 6 : i === 1 ? 4 : 3} w-${i === 0 ? 6 : i === 1 ? 4 : 3} rounded bg-blue-100 dark:bg-blue-900/30 shrink-0`} />
          <span className={`text-${i === 0 ? 'base font-bold' : i === 1 ? 'sm' : 'xs font-medium'} text-slate-700 dark:text-slate-300`}>{t}</span>
        </div>
      ))}
    </div>
    <div className="pt-2 flex gap-2">
      <div className="flex-1 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
        <span className="text-xs text-white font-semibold">Bouton primaire</span>
      </div>
      <div className="flex-1 h-10 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center">
        <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Secondaire</span>
      </div>
    </div>
  </div>,

  // Dev tab visual
  <div className="font-mono text-sm bg-slate-900 dark:bg-slate-950 rounded-xl p-4 space-y-1.5">
    <p><span className="text-blue-500">const</span> <span className="text-blue-300">site</span> <span className="text-white">=</span> <span className="text-blue-500">await</span> <span className="text-yellow-300">wixelo</span><span className="text-white">.</span><span className="text-blue-300">build</span><span className="text-white">{'({'}</span></p>
    <p className="pl-4"><span className="text-green-300">framework</span><span className="text-white">:</span> <span className="text-amber-300">'next.js'</span><span className="text-white">,</span></p>
    <p className="pl-4"><span className="text-green-300">perf</span><span className="text-white">:</span> <span className="text-amber-300">'100/100'</span><span className="text-white">,</span></p>
    <p className="pl-4"><span className="text-green-300">design</span><span className="text-white">:</span> <span className="text-amber-300">'premium'</span><span className="text-white">,</span></p>
    <p className="pl-4"><span className="text-green-300">deadline</span><span className="text-white">:</span> <span className="text-amber-300">'6 semaines'</span></p>
    <p><span className="text-white">{'});'}</span></p>
    <p className="pt-1"><span className="text-slate-500">// ✅ Build réussi en 0.8s</span></p>
  </div>,

  // Performance tab visual
  <div className="space-y-3">
    {[
      { label: 'Performance', score: 99, color: 'bg-emerald-500' },
      { label: 'Accessibilité', score: 98, color: 'bg-emerald-500' },
      { label: 'Bonnes pratiques', score: 100, color: 'bg-emerald-500' },
      { label: 'SEO', score: 100, color: 'bg-emerald-500' },
    ].map(item => (
      <div key={item.label} className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{item.score}/100</span>
        </div>
        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.score}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className={`h-full ${item.color} rounded-full`}
          />
        </div>
      </div>
    ))}
  </div>,

  // SEO tab visual
  <div className="space-y-2.5">
    {[
      { label: 'Trafic organique', value: '+280%', trend: 'up' },
      { label: 'Position moyenne', value: '#2.4', trend: 'up' },
      { label: 'Taux de clic', value: '8.7%', trend: 'up' },
      { label: 'Pages indexées', value: '100%', trend: 'neutral' },
    ].map(item => (
      <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
        <span className={`text-sm font-bold ${item.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`}>
          {item.trend === 'up' ? '↑ ' : ''}{item.value}
        </span>
      </div>
    ))}
  </div>,
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-14 lg:py-20 bg-slate-50 dark:bg-slate-900" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-badge">Nos expertises</p>
          <h2 id="services-heading" className="section-title mb-4">
            Tout ce dont vous avez besoin,<br className="hidden sm:block" />
            <span className="gradient-text"> en un seul endroit</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            De la maquette au déploiement, nous gérons l'intégralité de votre projet digital avec une expertise de haut niveau.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Expertises">
          {serviceTabs.map((tab, i) => {
            const Icon = tabIcons[i];
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(i)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            role="tabpanel"
            id={`panel-${serviceTabs[activeTab].id}`}
            aria-labelledby={`tab-${serviceTabs[activeTab].id}`}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                {serviceTabs[activeTab].badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                {serviceTabs[activeTab].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {serviceTabs[activeTab].description}
              </p>
              <ul className="space-y-4">
                {serviceTabs[activeTab].features.map((feat) => (
                  <li key={feat.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{feat.title}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 group"
              >
                Discuter de mon projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
              </a>
            </div>

            {/* Visual */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-lg shadow-slate-900/5">
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                Aperçu — {serviceTabs[activeTab].label}
              </p>
              {tabVisuals[activeTab]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
