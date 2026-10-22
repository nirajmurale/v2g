import { GraduationCap, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, type PageId } from '@/data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  // Course links point to sections on the home page; go home first if needed.
  const goToSection = (id: string) => {
    onNavigate('home');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  const linkClass = 'text-sm text-slate-600 hover:text-indigo-700 transition-colors text-left';

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </span>
              <span className="font-display font-bold text-lg text-slate-900">
                v2gai<span className="text-indigo-600">academy</span>
              </span>
            </button>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-xs">
              Live coaching in AI tools and everyday computer skills like Excel, Word and PowerPoint.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-slate-900">Courses</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => goToSection('ai-course')} className={linkClass}>AI tools course</button></li>
              <li><button onClick={() => goToSection('computer-course')} className={linkClass}>Basic computer classes</button></li>
              <li><button onClick={() => goToSection('computer-course')} className={linkClass}>Excel, Word and PowerPoint</button></li>
              <li><button onClick={() => onNavigate('payment')} className={linkClass}>Payment</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900">Contact us</h3>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Questions about classes or enrollment? Message us on WhatsApp.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 hover:border-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              +91 {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} v2gaiacademy. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
