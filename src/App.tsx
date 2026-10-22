import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
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
        return <HomePage onNavigate={handleNavigate} />;
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
        return <HomePage onNavigate={handleNavigate} />;
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

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5 text-white" />
              </span>
              <span className="font-display font-semibold text-slate-900">
                v2gai<span className="text-indigo-600">academy</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; 2026 v2gaiacademy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
