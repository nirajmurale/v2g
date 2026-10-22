import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PaymentPage from '@/pages/PaymentPage';
import AboutPage from '@/pages/AboutPage';
import type { PageId } from '@/data/mockData';

// Pages live at #about and #payment so links can point straight to them.
const pageFromHash = (): PageId => {
  const h = window.location.hash;
  if (h === '#payment') return 'payment';
  if (h === '#about') return 'about';
  return 'home';
};

const TITLES: Record<PageId, string> = {
  home: 'v2gaiacademy',
  about: 'About Shilpa Pallavi — v2gaiacademy',
  payment: 'Payment — v2gaiacademy',
};

function App() {
  const [activePage, setActivePage] = useState<PageId>(pageFromHash);

  useEffect(() => {
    const onHash = () => {
      const next = pageFromHash();
      setActivePage((prev) => {
        if (prev !== next) window.scrollTo({ top: 0 });
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.title = TITLES[activePage];
  }, [activePage]);

  const handleNavigate = (page: PageId) => {
    if (page !== 'home') {
      window.location.hash = page;
    } else {
      history.pushState(null, '', window.location.pathname);
      setActivePage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main key={activePage} className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 animate-fade-in">
        {activePage === 'payment' ? <PaymentPage /> : activePage === 'about' ? <AboutPage /> : <HomePage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
