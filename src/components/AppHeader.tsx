import { ReactNode } from 'react';

type HeaderProps = {
  title: string;
  action?: ReactNode; // Slot to dynamically inject the button
};

export default function AppHeader({ title, action }: HeaderProps) {
  return (
    <header className="w-full px-6 pt-4 pb-2">
      <div className="max-w-md mx-auto flex items-center justify-between border-b border-slate-800/40 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-white select-none">
          {title}
        </h1>
        
        {action && <div>{action}</div>}
      </div>
    </header>
  );
}