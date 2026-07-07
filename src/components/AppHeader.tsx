import { ReactNode } from 'react';

type HeaderProps = {
  title: string;
  action?: ReactNode;
};

export default function AppHeader({ title, action }: HeaderProps) {
  return (
    <header className="h-20 w-full shrink-0 bg-slate-950 px-6">
      <div className="flex h-full w-full items-center justify-between border-b border-slate-800/40">
        <h1 className="text-3xl font-bold tracking-tight text-white select-none">
          {title}
        </h1>
        
        {action && (
          <div className="flex items-center justify-center">
            {action}
          </div>
        )}
      </div>
    </header>
  );
}