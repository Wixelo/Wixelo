import { motion } from 'framer-motion';

// Heroes are designed at DESIGN_W × DESIGN_H, then CSS-scaled to CARD_W × CARD_H
const DESIGN_W = 1080;
const DESIGN_H = 680;
const CARD_W   = 380;
const SCALE    = CARD_W / DESIGN_W;            // ≈ 0.352
const CARD_H   = Math.round(DESIGN_H * SCALE); // ≈ 239 px

// Root style shared by every hero — sets the design canvas + scaling
const rootStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: `${DESIGN_W}px`,
  height: `${DESIGN_H}px`,
  transform: `scale(${SCALE})`,
  transformOrigin: 'top left',
  fontFamily: 'Inter, system-ui, sans-serif',
  overflow: 'hidden',
  userSelect: 'none',
};

/* ─────────────────────────────────────────────────────────────
   HERO 1 · Restaurant — dark full-bleed, left text, star badge
───────────────────────────────────────────────────────────── */
function RestaurantHero() {
  return (
    <div style={rootStyle}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=900&fit=crop&q=90)", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,6,0,0.60)' }} />

      {/* NAV */}
      <nav style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '28px', padding: '18px 48px', background: 'rgba(0,0,0,0.20)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ color: '#fff', fontSize: '19px', fontWeight: '800', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>Le Bouchon Lyonnais</span>
        <div style={{ display: 'flex', gap: '24px', marginLeft: 'auto' }}>
          {['Menu', 'Réservation', 'Le Chef', 'Contact'].map(l => (
            <span key={l} style={{ color: 'rgba(255,255,255,0.72)', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap' }}>{l}</span>
          ))}
        </div>
        <button style={{ padding: '10px 22px', background: '#F59E0B', color: '#fff', fontWeight: '700', fontSize: '14px', borderRadius: '8px', border: 'none', cursor: 'default', flexShrink: 0 }}>
          Réserver
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ position: 'relative', padding: '36px 64px 0' }}>
        {/* Star badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.38)', borderRadius: '99px', padding: '7px 16px' }}>
          <span style={{ color: '#FBBF24', fontSize: '15px', letterSpacing: '1px' }}>★★★★★</span>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: '600' }}>4.9/5 · 238 avis Google</span>
        </div>

        <h1 style={{ color: '#fff', fontSize: '52px', fontWeight: '800', lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: '18px', maxWidth: '560px' }}>
          Une cuisine de cœur,<br />des saveurs d'exception
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '17px', lineHeight: 1.6, marginBottom: '36px', maxWidth: '460px' }}>
          Plats du terroir lyonnais dans un cadre chaleureux<br />au cœur du Vieux-Lyon.
        </p>
        <div style={{ display: 'flex', gap: '14px' }}>
          <button style={{ padding: '15px 30px', background: '#F59E0B', color: '#fff', fontWeight: '700', fontSize: '16px', borderRadius: '10px', border: 'none', cursor: 'default', boxShadow: '0 8px 20px rgba(245,158,11,0.40)' }}>
            Réserver une table
          </button>
          <button style={{ padding: '15px 30px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: '600', fontSize: '16px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.28)', cursor: 'default' }}>
            Voir le menu
          </button>
        </div>
      </div>

      {/* Floating card */}
      <div style={{ position: 'absolute', top: '130px', right: '56px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.20)', borderRadius: '14px', padding: '16px 20px', minWidth: '190px' }}>
        <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '7px' }}>Spécialité du jour</p>
        <p style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>Quenelles de brochet</p>
        <p style={{ color: '#FBBF24', fontSize: '14px', fontWeight: '600' }}>29 € · Midi & soir</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO 2 · Artisan — gradient left→right, image visible right
───────────────────────────────────────────────────────────── */
function ArtisanHero() {
  return (
    <div style={rootStyle}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=900&fit=crop&q=90)", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      {/* Dark on left, transparent on right */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,30,0.97) 0%, rgba(8,15,30,0.92) 40%, rgba(8,15,30,0.52) 62%, rgba(8,15,30,0.04) 100%)' }} />

      {/* NAV */}
      <nav style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '28px', padding: '18px 48px', background: 'rgba(8,15,30,0.35)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ color: '#fff', fontSize: '19px', fontWeight: '800', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>Dupont Rénovation</span>
        <div style={{ display: 'flex', gap: '24px', marginLeft: 'auto' }}>
          {['Services', 'Réalisations', 'À propos', 'Contact'].map(l => (
            <span key={l} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap' }}>{l}</span>
          ))}
        </div>
        <button style={{ padding: '10px 22px', background: '#F97316', color: '#fff', fontWeight: '700', fontSize: '14px', borderRadius: '8px', border: 'none', cursor: 'default', flexShrink: 0 }}>
          Devis gratuit
        </button>
      </nav>

      {/* CONTENT — constrained to left half */}
      <div style={{ position: 'relative', padding: '32px 64px 0', maxWidth: '560px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.32)', borderRadius: '8px', padding: '7px 14px' }}>
          <span style={{ color: '#FB923C', fontSize: '12px' }}>✦</span>
          <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: '12px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Artisan RGE · 15 ans d'expérience</span>
        </div>

        <h1 style={{ color: '#fff', fontSize: '52px', fontWeight: '800', lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: '18px' }}>
          Votre rénovation<br />entre de bonnes<br />mains
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '16px', lineHeight: 1.6, marginBottom: '34px' }}>
          Maçonnerie, isolation, carrelage.<br />Devis gratuit sous 48h, travaux garantis 10 ans.
        </p>
        <div style={{ display: 'flex', gap: '14px' }}>
          <button style={{ padding: '15px 28px', background: '#F97316', color: '#fff', fontWeight: '700', fontSize: '16px', borderRadius: '10px', border: 'none', cursor: 'default', boxShadow: '0 8px 20px rgba(249,115,22,0.40)' }}>
            Obtenir un devis
          </button>
          <button style={{ padding: '15px 28px', background: 'transparent', color: 'rgba(255,255,255,0.80)', fontWeight: '600', fontSize: '16px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.24)', cursor: 'default' }}>
            Nos réalisations
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO 3 · Médecin — light/white bg, dark text, image right
───────────────────────────────────────────────────────────── */
function MedecinHero() {
  return (
    <div style={{ ...rootStyle, background: '#EFF6FF', display: 'flex', flexDirection: 'column' }}>
      {/* Right-side image */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '44%', height: '100%', backgroundImage: "url(https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&h=900&fit=crop&q=90)", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      {/* Fade left edge of image */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '58%', height: '100%', background: 'linear-gradient(to right, #EFF6FF 0%, rgba(239,246,255,0.65) 38%, rgba(239,246,255,0) 100%)' }} />

      {/* NAV */}
      <nav style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '28px', padding: '18px 48px', background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(37,99,235,0.10)', flexShrink: 0 }}>
        <span style={{ color: '#1E3A8A', fontSize: '19px', fontWeight: '800', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>Cabinet Dr. Martin</span>
        <div style={{ display: 'flex', gap: '24px', marginLeft: 'auto' }}>
          {['Spécialités', 'Consultations', 'Le Cabinet', 'RDV'].map(l => (
            <span key={l} style={{ color: '#475569', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap' }}>{l}</span>
          ))}
        </div>
        <button style={{ padding: '10px 22px', background: '#2563EB', color: '#fff', fontWeight: '700', fontSize: '14px', borderRadius: '8px', border: 'none', cursor: 'default', flexShrink: 0 }}>
          Prendre RDV
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ position: 'relative', padding: '40px 64px 0', maxWidth: '580px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '99px', padding: '7px 16px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'block', flexShrink: 0 }} />
          <span style={{ color: '#15803D', fontSize: '13px', fontWeight: '700' }}>Disponible aujourd'hui · Paris 15e</span>
        </div>

        <h1 style={{ color: '#0F172A', fontSize: '52px', fontWeight: '800', lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: '18px' }}>
          Votre santé mérite<br />les meilleurs soins
        </h1>
        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.65, marginBottom: '36px' }}>
          Consultations sur rendez-vous, suivi personnalisé<br />et écoute bienveillante depuis 2008.
        </p>
        <div style={{ display: 'flex', gap: '14px' }}>
          <button style={{ padding: '15px 30px', background: '#2563EB', color: '#fff', fontWeight: '700', fontSize: '16px', borderRadius: '10px', border: 'none', cursor: 'default', boxShadow: '0 8px 20px rgba(37,99,235,0.28)' }}>
            Prendre rendez-vous
          </button>
          <button style={{ padding: '15px 30px', background: '#fff', color: '#334155', fontWeight: '600', fontSize: '16px', borderRadius: '10px', border: '1.5px solid #CBD5E1', cursor: 'default' }}>
            Notre cabinet
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO 4 · Producteur — centered text, product tag pills
───────────────────────────────────────────────────────────── */
function ProducteurHero() {
  const tags = ["Huile d'olive", 'Olives marinées', 'Tapenades', 'Épicerie fine'];
  return (
    <div style={{ ...rootStyle, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&h=900&fit=crop&q=90)", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,26,12,0.65)' }} />

      {/* NAV */}
      <nav style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '28px', padding: '18px 48px', background: 'rgba(0,0,0,0.18)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
        <span style={{ color: '#fff', fontSize: '19px', fontWeight: '800', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>Domaine des Oliviers</span>
        <div style={{ display: 'flex', gap: '24px', marginLeft: 'auto' }}>
          {['Notre histoire', 'Produits', 'Boutique', 'Contact'].map(l => (
            <span key={l} style={{ color: 'rgba(255,255,255,0.70)', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap' }}>{l}</span>
          ))}
        </div>
        <button style={{ padding: '10px 22px', background: '#059669', color: '#fff', fontWeight: '700', fontSize: '14px', borderRadius: '8px', border: 'none', cursor: 'default', flexShrink: 0 }}>
          Commander
        </button>
      </nav>

      {/* CENTERED CONTENT */}
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', justifyContent: 'center' }}>
          <div style={{ width: '36px', height: '1.5px', background: '#10B981' }} />
          <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Producteur depuis 1987 · Provence</span>
          <div style={{ width: '36px', height: '1.5px', background: '#10B981' }} />
        </div>

        <h1 style={{ color: '#fff', fontSize: '54px', fontWeight: '800', lineHeight: 1.06, letterSpacing: '-1.5px', marginBottom: '18px' }}>
          De la terre à votre<br />table, avec passion
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '17px', lineHeight: 1.6, marginBottom: '28px', maxWidth: '520px' }}>
          Huiles d'olive, olives et condiments cultivés dans le respect<br />de la nature et des saisons.
        </p>

        {/* Product tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          {tags.map(t => (
            <span key={t} style={{ padding: '8px 18px', background: 'rgba(16,185,129,0.18)', border: '1px solid rgba(16,185,129,0.38)', borderRadius: '99px', color: '#6EE7B7', fontSize: '14px', fontWeight: '600' }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <button style={{ padding: '15px 30px', background: '#059669', color: '#fff', fontWeight: '700', fontSize: '16px', borderRadius: '10px', border: 'none', cursor: 'default', boxShadow: '0 8px 20px rgba(5,150,105,0.42)' }}>
            Commander en ligne
          </button>
          <button style={{ padding: '15px 30px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: '600', fontSize: '16px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.28)', cursor: 'default' }}>
            Visiter le domaine
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Card data ───────────────────────────────────────── */
const showcases = [
  { label: 'Restaurant',       url: 'lebouchon-lyon.fr',       dot: '#F59E0B', Hero: RestaurantHero },
  { label: 'Artisan Bâtiment', url: 'dupont-renovation.fr',    dot: '#64748B', Hero: ArtisanHero    },
  { label: 'Médecin',          url: 'cabinet-dr-martin.fr',    dot: '#3B82F6', Hero: MedecinHero    },
  { label: 'Producteur',       url: 'domaine-des-oliviers.fr', dot: '#10B981', Hero: ProducteurHero },
];

const doubled = [...showcases, ...showcases];

/* ─── Section ─────────────────────────────────────────── */
export default function Showcase() {
  return (
    <section className="py-14 lg:py-20 bg-white dark:bg-slate-800/30 overflow-hidden" aria-label="Exemples de réalisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-badge">Exemples</p>
          <h2 className="section-title mb-4">
            Des sites pour chaque<br className="hidden sm:block" />
            <span className="gradient-text"> secteur d'activité</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Chaque site est conçu sur-mesure pour votre métier, votre clientèle et vos objectifs.
          </p>
        </motion.div>
      </div>

      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div className="showcase-track">
          {doubled.map((item, i) => (
            <div key={i} className="shrink-0 group" style={{ width: `${CARD_W}px` }}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-slate-900/15">

                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/50">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-700 rounded-md px-2 py-1 flex items-center gap-1.5 min-w-0">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.dot }} />
                    <span className="text-[10px] text-slate-500 dark:text-slate-300 font-mono truncate">{item.url}</span>
                  </div>
                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium shrink-0 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* Hero mockup canvas */}
                <div className="relative overflow-hidden" style={{ height: `${CARD_H}px` }}>
                  <item.Hero />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
