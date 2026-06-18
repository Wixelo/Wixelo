import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Shield, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

const avatarSrcs = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&q=80",
];

const statCards = [
  { icon: TrendingUp, value: '+340%', label: 'Conversion', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { icon: Zap, value: '99/100', label: 'Performance', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  { icon: Shield, value: '100%', label: 'Sécurité', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
];

const chartBars = [40, 58, 45, 70, 55, 80, 65, 88, 72, 91, 95, 100];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-900 pt-16 lg:pt-20"
      aria-label="Section principale"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-500/6 dark:bg-blue-500/8 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-blue-400/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(to right, #3B82F6 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 text-xs font-medium mb-8 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 animate-pulse" aria-hidden="true" />
              Agence web B2B — Design & Développement premium
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Le{' '}
              <span className="gradient-text-anim">site</span>
              {' '}qui fait<br />
              vraiment la{' '}
              <span className="gradient-text-anim">différence</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              Wixelo conçoit des expériences digitales premium pour les entreprises B2B ambitieuses — sites web ultra-performants, design percutant, résultats mesurables.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 shimmer-btn group text-base"
              >
                Nous découvrir
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" aria-hidden="true" />
              </a>
            </motion.div>


            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex flex-wrap items-center gap-3 mt-6"
            >
              {['Livraison en 6 semaines', 'Support dédié', 'Code source inclus'].map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="animate-float">
              {/* Browser window */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700/50 overflow-hidden">

                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600/50">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 mx-1 bg-white dark:bg-slate-600/70 rounded-md px-3 py-1.5 flex items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-300 font-mono truncate">wixelo.fr</span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5 uppercase tracking-wider font-medium">Vue d'ensemble</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">Analytics — Juillet 2026</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                      +24% ce mois
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="flex items-end gap-1.5 h-28 mb-5 px-1">
                    {chartBars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm relative overflow-hidden"
                        style={{ height: `${h}%` }}
                      >
                        <div className={`absolute inset-0 ${i >= 9 ? 'bg-gradient-to-t from-blue-600 to-blue-400' : 'bg-blue-100 dark:bg-blue-900/30'} rounded-t-sm`} />
                      </div>
                    ))}
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {statCards.map((stat) => (
                      <div key={stat.label} className={`${stat.bg} rounded-xl p-3.5`}>
                        <stat.icon className={`w-4 h-4 ${stat.color} mb-2`} aria-hidden="true" />
                        <p className="text-lg font-bold text-slate-900 dark:text-white leading-none mb-0.5">{stat.value}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card — Status */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 -right-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 border border-slate-200 dark:border-slate-700/50 px-4 py-3 min-w-[160px]"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Site en ligne</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Chargement: <strong className="text-emerald-600 dark:text-emerald-400">0.8s</strong></p>
              </motion.div>

              {/* Floating card — Notification */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 px-4 py-3"
              >
                <p className="text-xs font-semibold text-white">🚀 Nouveau lead entrant</p>
                <p className="text-xs text-blue-200 mt-0.5">TechFlow SAS · il y a 2 min</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
