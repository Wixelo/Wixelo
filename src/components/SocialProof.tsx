import { Globe, Zap, Shield, Smartphone, Search, Palette, Code2, Clock, TrendingUp, Lock } from 'lucide-react';

const facts = [
  { icon: Clock, text: 'Un site se charge en moins de 2s pour retenir vos visiteurs' },
  { icon: Smartphone, text: '70% du trafic web provient d\'un mobile' },
  { icon: Search, text: 'Un bon SEO multiplie votre trafic par 5 en 6 mois' },
  { icon: TrendingUp, text: 'Un design soigné augmente le taux de conversion de 200%' },
  { icon: Globe, text: 'Votre site est votre meilleur commercial — disponible 24h/24' },
  { icon: Zap, text: '53% des visiteurs quittent un site qui met plus de 3s à charger' },
  { icon: Palette, text: 'La cohérence visuelle renforce la confiance et la crédibilité' },
  { icon: Code2, text: 'Un code propre garantit un site évolutif et facile à maintenir' },
  { icon: Shield, text: 'HTTPS et sécurité SSL sont indispensables pour Google en 2025' },
  { icon: Lock, text: 'La conformité RGPD protège vos visiteurs et votre réputation' },
];

const doubled = [...facts, ...facts];

export default function SocialProof() {
  return (
    <section className="py-14 bg-white dark:bg-slate-800/50 border-y border-slate-100 dark:border-slate-700/50" aria-label="Le saviez-vous ?">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Le saviez-vous ?
        </p>
      </div>

      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-8 shrink-0 px-5 py-2.5 rounded-full border border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50"
            >
              <item.icon className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-200 dark:divide-slate-700">
          {[
            { value: '3', label: 'Projets livrés' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: '5/5', label: 'Note moyenne' },
            { value: '6 mois', label: "D'expertise" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:px-8">
              <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
