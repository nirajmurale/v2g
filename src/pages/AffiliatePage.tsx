import { useState } from 'react';
import {
  Users,
  Copy,
  Check,
  TrendingUp,
  Wallet,
  UserPlus,
  Link2,
  Share2,
} from 'lucide-react';
import {
  AFFILIATE_STATS,
  REFERRAL_STUDENTS,
} from '@/data/mockData';

const REFERRAL_LINK = 'https://v2gaiacademy.com/ref/student2026';

const STATUS_STYLES: Record<string, string> = {
  active: 'bg-emerald-500/10 text-emerald-600',
  pending: 'bg-amber-500/10 text-amber-600',
  completed: 'bg-indigo-500/10 text-indigo-600',
};

export default function AffiliatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `Join v2gaiacademy and start learning! Use my referral link: ${REFERRAL_LINK}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'v2gaiacademy', text: shareText, url: REFERRAL_LINK });
    } else {
      handleCopy();
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Affiliate Hub</h1>
        <p className="text-slate-600 mt-2">
          Share your referral link and earn rewards for every student who joins.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: UserPlus, label: 'Total Referrals', value: String(AFFILIATE_STATS.totalReferrals), color: 'text-indigo-600' },
          { icon: Users, label: 'Active Referrals', value: String(AFFILIATE_STATS.activeReferrals), color: 'text-emerald-600' },
          { icon: Wallet, label: 'Total Earnings', value: AFFILIATE_STATS.totalEarnings, color: 'text-amber-600' },
          { icon: TrendingUp, label: 'Pending Payout', value: AFFILIATE_STATS.pendingPayout, color: 'text-sky-600' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-2xl bg-white border border-slate-200"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-600 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Referral Link Generator */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Link2 className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-slate-900">Your Referral Link</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 font-mono break-all">
            {REFERRAL_LINK}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Link
                </>
              )}
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors whitespace-nowrap"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Referred Students Table */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Referred Students</h2>
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Student
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Joined
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right px-5 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {REFERRAL_STUDENTS.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 text-sm font-medium shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">{student.joinedDate}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium capitalize ${STATUS_STYLES[student.status]}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-900 font-medium text-right">
                    {student.earnings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
