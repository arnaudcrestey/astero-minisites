interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="mb-6">
      <div className="mb-2 flex justify-between text-sm text-slate-100/90">
        <span>Progression</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/20">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-rose-400 to-violet-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
