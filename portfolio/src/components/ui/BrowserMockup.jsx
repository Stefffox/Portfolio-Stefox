export function BrowserMockup({ src, alt, placeholder, url = 'app' }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-3 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        </div>
        <div className="flex-1 bg-slate-700/50 rounded text-xs text-slate-500 font-mono px-3 py-1 truncate">
          {url}
        </div>
      </div>
      <div className="overflow-hidden max-h-[48vh]">
        {src ? (
          <img src={src} alt={alt} className="w-full" />
        ) : (
          <div className="aspect-video bg-white/4 flex items-center justify-center">
            <span className="text-slate-600 text-xs font-mono">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
}
