import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PaymentPage from '@/pages/PaymentPage';
import type { PageId } from '@/data/mockData';

// The payment page lives at #payment so Enroll links can point straight to it.
const pageFromHash = (): PageId => (window.location.hash === '#payment' ? 'payment' : 'home');

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
    document.title = activePage === 'payment' ? 'Payment — v2gaiacademy' : 'v2gaiacademy';
  }, [activePage]);

  const handleNavigate = (page: PageId) => {
    if (page === 'payment') {
      window.location.hash = 'payment';
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
        {activePage === 'payment' ? <PaymentPage /> : <HomePage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
