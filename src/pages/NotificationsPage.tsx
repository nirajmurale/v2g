import {
  Video,
  ClipboardList,
  CreditCard,
  Bell,
  CheckCircle2,
  AlertCircle,
  Info,
  Calendar,
} from 'lucide-react';
import { NOTIFICATIONS, type AppNotification } from '@/data/mockData';

const TYPE_CONFIG: Record<
  AppNotification['type'],
  { icon: typeof Video; color: string; bg: string }
> = {
  class: { icon: Video, color: 'text-rose-600', bg: 'bg-rose-500/10' },
  assignment: { icon: ClipboardList, color: 'text-amber-600', bg: 'bg-amber-500/10' },
  payment: { icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
  general: { icon: Info, color: 'text-sky-600', bg: 'bg-sky-500/10' },
};

export default function NotificationsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
        <p className="text-slate-600 mt-2">
          Stay updated with announcements, class reminders, and payment alerts.
        </p>
      </div>

      <div className="grid gap-3">
        {NOTIFICATIONS.map((notif) => {
          const config = TYPE_CONFIG[notif.type];
          const Icon = config.icon;
          return (
            <div
              key={notif.id}
              className={`p-4 rounded-2xl border transition-colors ${
                notif.read
                  ? 'bg-white border-slate-200'
                  : 'bg-white border-indigo-600/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{notif.title}</h3>
                    {!notif.read && (
                      <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{notif.message}</p>
                  <p className="text-xs text-slate-500 mt-2">{notif.time}</p>
                </div>
                {!notif.read && (
                  <button className="shrink-0 p-1.5 text-slate-500 hover:text-slate-900 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
        <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600">
          You have 2 unread notifications. Mark them as read to keep your dashboard clean.
        </p>
      </div>
    </div>
  );
}
