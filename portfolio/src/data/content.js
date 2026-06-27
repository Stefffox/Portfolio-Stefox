export const LEAF_CHARS = ['🍂', '🍁'];

export const SECTIONS = [
  { id: 'hero',    label: 'Accueil' },
  { id: 'iceberg', label: "L'iceberg" },
  { id: 'naos',    label: 'Naos' },
  { id: 'hsp',     label: 'HSP Booking' },
  { id: 'about',   label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

export const NAOS_STACK = [
  'Python', 'Claude API', 'ElevenLabs TTS', 'faster-whisper',
  'ChromaDB', 'PyQt6', 'OpenGL GLSL', 'Spotify API',
];

export const HSP_STACK = [
  'React 19', 'TypeScript', 'Supabase', 'React Query',
  'Zustand', 'Tailwind CSS', 'Stripe', 'Vercel',
];

export const HSP_FEATURES = [
  'Widget public multi-tenant par salon',
  'Isolation RLS PostgreSQL stricte',
  'Stripe · acomptes · multi-devise CHF/EUR',
  'Notifications email auto (J-1 / H-2)',
  'Calendrier admin (mois / semaine / jour)',
  'Analytics · export CSV · PWA',
  'Performances ÷4 (1 378 -> 280 req/h)',
];

export const LANGUAGES = ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP', 'HTML/CSS'];
export const TOOLS     = ['VS Code', 'Godot', 'Supabase', 'Vercel', 'Git'];

export const IMAGE_IMPORTS = [
  ['naos',   () => import('../assets/naos.png')],
  ['hsp',    () => import('../assets/hsp.png')],
  ['furso',  () => import('../assets/furso.png')],
  ['stefox', () => import('../assets/stefox-hero.jpg')],
];
