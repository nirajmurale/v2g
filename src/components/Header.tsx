import { useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, PAYMENT_URL, type NavItem, type PageId } from '@/data/mockData';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const itemClass = (isActive: boolean, mobile: boolean) =>
    `${mobile ? 'flex items-center gap-3 px-3 py-2.5' : 'px-3 py-2'} rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-700 bg-indigo-50'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;

  const renderItem = (item: NavItem, mobile: boolean) => {
    const content = (
      <>
        {mobile && <item.icon className="w-4 h-4" />}
        {item.label}
      </>
    );
    // External link (Payments) — takes the visitor to the payment site
    if (item.href) {
      return (
        <a key={item.id} href={item.href} className={itemClass(false, mobile)}>
          {content}
        </a>
      );
    }
    const id = item.id as PageId;
    return (
      <button key={item.id} onClick={() => handleNav(id)} className={itemClass(activePage === id, mobile)}>
        {content}
      </button>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 shrink-0">
            <span className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-bold text-lg text-slate-900 tracking-tight hidden sm:block">
              v2gai<span className="text-indigo-600">academy</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => renderItem(item, false))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={PAYMENT_URL}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => renderItem(item, true))}
            <a
              href={PAYMENT_URL}
              className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
