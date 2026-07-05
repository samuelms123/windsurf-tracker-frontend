
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export function NavigationBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 flex justify-around items-center px-6 pt-3 pb-5 select-none z-50">
      
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center w-20 transition-all duration-200 active:scale-95 ${
          isActive('/') 
            ? 'text-sky-400 font-medium' 
            : 'text-slate-500 hover:text-slate-400'
        }`}
      >
        <Home className={`h-5 w-5 mb-1 stroke-[2.2] transition-transform ${isActive('/') ? 'scale-105' : ''}`} />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Home</span>
      </Link>

      <Link 
        to="/activities" 
        className={`flex flex-col items-center justify-center w-25 transition-all duration-200 active:scale-95 ${
          isActive('/activities') 
            ? 'text-sky-400 font-medium' 
            : 'text-slate-500 hover:text-slate-400'
        }`}
      >
        <Compass className={`h-5 w-5 mb-1 stroke-[2.2] transition-transform ${isActive('/activities') ? 'scale-105' : ''}`} />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Activities</span>
      </Link>

    </nav>
  );
}

export default NavigationBar