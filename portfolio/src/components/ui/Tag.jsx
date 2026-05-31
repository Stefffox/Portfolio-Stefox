const VARIANTS = {
  default: 'bg-slate-800/50 text-slate-400 border-slate-700/30',
  purple:  'bg-purple-900/40 text-purple-300 border-purple-700/30',
  amber:   'bg-amber-900/20 text-amber-300 border-amber-700/20',
  dimmed:  'bg-slate-800/30 text-slate-500 border-slate-700/20',
};

export function Tag({ label, variant = 'default' }) {
  return (
    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${VARIANTS[variant]}`}>
      {label}
    </span>
  );
}
