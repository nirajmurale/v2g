import { GraduationCap } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '@/data/mockData';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-16 flex items-center">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 shrink-0" aria-label="v2gaiacademy home">
            <span className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-bold text-lg text-slate-900 tracking-tight hidden md:block">
              v2gai<span className="text-indigo-600">academy</span>
            </span>
          </button>

          {/* Nav — centred in the bar on every screen size */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-xl bg-slate-100 p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 sm:px-5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
