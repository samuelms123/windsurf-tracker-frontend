import { useEffect, useState } from 'react';
import { RefreshCw, Check } from 'lucide-react';

interface StravaSyncButtonProps {
  isLoading: boolean;
  isSuccess: boolean;
  onClick: () => void;
}

export default function StravaSyncButton({ isLoading, isSuccess, onClick }: StravaSyncButtonProps) {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowCheck(true);
      const timer = setTimeout(() => setShowCheck(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <button
      type="button"
      disabled={isLoading || showCheck}
      onClick={onClick}
      className={`flex items-center justify-center rounded-full p-2.5 transition-all duration-300 border backdrop-blur-sm active:scale-95 min-w-[40px] min-h-[40px] ${
        isLoading
          ? 'border-slate-700 bg-slate-800/30 text-slate-400 cursor-not-allowed'
          : showCheck
          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
          : 'border-orange-500/20 bg-orange-500/5 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/40'
      }`}
      aria-label="Sync with Strava"
    >
      {isLoading && <RefreshCw className="h-4 w-4 animate-spin stroke-[2.5]" />}
      {!isLoading && showCheck && <Check className="h-4 w-4 stroke-[2.5] animate-[fadeIn_0.2s_ease-out]" />}
      {!isLoading && !showCheck && <RefreshCw className="h-4 w-4 stroke-[2.2]" />}
    </button>
  );
}