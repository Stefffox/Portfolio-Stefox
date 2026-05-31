export function ProjectImg({ src, alt, placeholder }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="rounded-2xl w-full aspect-video object-cover shadow-2xl shadow-black/60 border border-white/8"
      />
    );
  }
  return (
    <div className="rounded-2xl w-full aspect-video bg-white/4 border border-white/8 flex items-center justify-center">
      <span className="text-slate-600 text-xs font-mono">{placeholder}</span>
    </div>
  );
}
