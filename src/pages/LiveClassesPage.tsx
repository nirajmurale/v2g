import { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  ExternalLink,
  CheckCircle2,
  XCircle,
  CalendarClock,
} from 'lucide-react';
import { UPCOMING_CLASSES, ATTENDANCE_HISTORY } from '@/data/mockData';

export default function LiveClassesPage() {
  const [tab, setTab] = useState<'upcoming' | 'history'>('upcoming');

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Live Classes</h1>
        <p className="text-slate-600 mt-2">
          Join upcoming sessions and review your attendance history.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl bg-white border border-slate-200 w-fit">
        <button
          onClick={() => setTab('upcoming')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'upcoming'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Upcoming Schedule
        </button>
        <button
          onClick={() => setTab('history')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'history'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Attendance History
        </button>
      </div>

      {tab === 'upcoming' ? (
        <div className="grid gap-4">
          {UPCOMING_CLASSES.map((cls) => (
            <div
              key={cls.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{cls.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      {cls.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      {cls.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-indigo-600" />
                      {cls.instructor}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => window.open(cls.zoomUrl, '_blank')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors whitespace-nowrap shadow-lg shadow-indigo-500/10"
                >
                  Join Zoom Meeting
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {ATTENDANCE_HISTORY.map((cls) => {
            const attended = cls.status === 'attended';
            return (
              <div
                key={cls.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{cls.title}</h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${
                          attended
                            ? 'bg-emerald-500/10 text-emerald-600'
                            : 'bg-rose-500/10 text-rose-600'
                        }`}
                      >
                        {attended ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5" />
                        )}
                        {attended ? 'Attended' : 'Missed'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <CalendarClock className="w-4 h-4 text-slate-500" />
                        {cls.date} at {cls.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-slate-500" />
                        {cls.instructor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
