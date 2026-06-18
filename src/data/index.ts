export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ServiceTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: { title: string; desc: string }[];
  badge: string;
}

export interface ProcessCard {
  id: number;
  title: string;
  description: string;
  colSpan: string;
  variant: 'default' | 'accent' | 'gradient';
  badge?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Thomas Bernard",
    role: "CEO",
    company: "TechFlow SAS",
    content: "Wixelo a transformé notre présence digitale en 6 semaines. Notre taux de conversion a explosé de 340%. Un travail d'une qualité exceptionnelle, je recommande sans hésitation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "Nexus Digital",
    content: "L'équipe Wixelo a parfaitement capté l'essence de notre marque. Le site est magnifique et ultra-performant. Temps de chargement réduit de 70%. Résultat bluffant.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Alexandre Dupont",
    role: "Fondateur",
    company: "Prism Labs",
    content: "Professionnalisme exemplaire du début à la fin. Délais respectés, code impeccable et un design qui surpasse toutes nos attentes. Notre site génère 5x plus de leads.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Camille Rousseau",
    role: "CTO",
    company: "Orbit Systems",
    content: "Nous avions besoin d'une refonte complète en urgence. Wixelo a livré un produit premium en 4 semaines. Le code est propre, documenté et parfaitement évolutif.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Julien Mercier",
    role: "Directeur Général",
    company: "Vela Finance",
    content: "Le ROI de notre collaboration avec Wixelo est phénoménal. En 3 mois, notre chiffre d'affaires digital a augmenté de 280%. Partenaire de confiance absolu.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Laura Chen",
    role: "Product Manager",
    company: "Apex Digital",
    content: "Une équipe à l'écoute, créative et hautement technique. Ils ont transformé nos wireframes en une expérience utilisateur fluide et engageante. Nos users adorent.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&q=80"
  }
];

export const clientLogos = [
  { name: "TechFlow", mono: "font-bold tracking-tight" },
  { name: "NEXUS", mono: "font-black tracking-widest text-sm" },
  { name: "Prism", mono: "font-light tracking-widest" },
  { name: "Orbit", mono: "font-semibold" },
  { name: "VELA", mono: "font-black text-sm" },
  { name: "Apex", mono: "font-bold tracking-wide" },
  { name: "Zeta", mono: "font-light tracking-widest" },
  { name: "Lumina", mono: "font-semibold" },
  { name: "CREST", mono: "font-black tracking-widest text-sm" },
  { name: "Nova", mono: "font-bold" },
  { name: "Pulse", mono: "font-semibold tracking-wide" },
  { name: "Strato", mono: "font-light tracking-widest" },
];

export const serviceTabs: ServiceTab[] = [
  {
    id: "design",
    label: "Design & UX",
    title: "Des interfaces qui captivent",
    description: "Nous concevons des expériences utilisateur qui convertissent. Chaque pixel est pensé pour guider vos visiteurs vers l'action.",
    badge: "Design Premium",
    features: [
      { title: "Wireframing & Prototypage", desc: "Validation rapide du concept avant développement" },
      { title: "Design System", desc: "Composants réutilisables et cohérence visuelle totale" },
      { title: "UX Research", desc: "Tests utilisateurs et optimisation continue du parcours" },
      { title: "Animation & Motion", desc: "Micro-interactions et transitions qui donnent vie au produit" },
    ]
  },
  {
    id: "dev",
    label: "Développement",
    title: "Du code propre, évolutif et rapide",
    description: "Stack moderne, architecture solide. Vos projets sont développés avec les meilleures pratiques du marché pour durer dans le temps.",
    badge: "Zéro dette technique",
    features: [
      { title: "React / Next.js", desc: "Applications web modernes et performantes par défaut" },
      { title: "API REST & GraphQL", desc: "Intégrations robustes avec vos outils métiers" },
      { title: "Base de données", desc: "Architecture data scalable et sécurisée" },
      { title: "Tests & CI/CD", desc: "Livraison continue sans régression" },
    ]
  },
  {
    id: "performance",
    label: "Performance",
    title: "99/100 sur tous les benchmarks",
    description: "Un site lent perd des clients. Nous optimisons chaque milliseconde pour offrir une expérience fluide et un référencement optimal.",
    badge: "Core Web Vitals vert",
    features: [
      { title: "Core Web Vitals", desc: "Votre site s'affiche en moins d'une seconde — Google récompense la vitesse en vous plaçant plus haut dans les résultats" },
      { title: "CDN Global", desc: "Vos pages sont hébergées sur des serveurs proches de vos visiteurs, où qu'ils soient dans le monde" },
      { title: "Images optimisées", desc: "Les photos sont compressées automatiquement pour peser moins lourd, sans que la qualité visuelle ne soit affectée" },
      { title: "Caching avancé", desc: "Les éléments déjà vus par le visiteur sont mémorisés par le navigateur, ce qui rend la navigation encore plus rapide" },
    ]
  },
  {
    id: "seo",
    label: "SEO & Croissance",
    title: "Visible. Trouvable. Rentable.",
    description: "Nous intégrons le SEO dès la conception pour que votre site soit aussi bien référencé que beau. Résultats mesurables garantis.",
    badge: "ROI mesurable",
    features: [
      { title: "SEO Technique", desc: "Structure, balises, schema.org et indexabilité parfaite" },
      { title: "Analytics avancé", desc: "Dashboards sur mesure et tracking des conversions" },
      { title: "A/B Testing", desc: "Optimisation data-driven de vos pages clés" },
      { title: "Stratégie contenu", desc: "Architecture éditoriale pensée pour le référencement" },
    ]
  }
];
