import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import LiveClassesPage from '@/pages/LiveClassesPage';
import RecordingsPage from '@/pages/RecordingsPage';
import AssignmentsPage from '@/pages/AssignmentsPage';
import AffiliatePage from '@/pages/AffiliatePage';
import NotificationsPage from '@/pages/NotificationsPage';
import type { PageId } from '@/data/mockData';

const PAGE_TITLE: Record<PageId, string> = {
  home: 'v2gaiacademy',
  'live-classes': 'Live Classes — v2gaiacademy',
  recordings: 'Recordings — v2gaiacademy',
  assignments: 'Assignments — v2gaiacademy',
  affiliate: 'Affiliate Hub — v2gaiacademy',
  notifications: 'Notifications — v2gaiacademy',
};

function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'live-classes':
        return <LiveClassesPage />;
      case 'recordings':
        return <RecordingsPage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'affiliate':
        return <AffiliatePage />;
      case 'notifications':
        return <NotificationsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main
        key={activePage}
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 animate-fade-in"
      >
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
