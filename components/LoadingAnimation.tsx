export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-pink-300" />
        <span className="absolute inset-0 flex items-center justify-center text-xl">💗</span>
      </div>
      <p className="text-slate-100/90">Analyse émotionnelle en cours...</p>
    </div>
  );
}
