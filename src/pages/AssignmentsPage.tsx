import { useState } from 'react';
import {
  ClipboardList,
  Calendar,
  CheckCircle2,
  Clock,
  Upload,
  Award,
  BookOpen,
} from 'lucide-react';
import { ASSIGNMENTS, type Assignment } from '@/data/mockData';

const STATUS_CONFIG: Record<Assignment['status'], { label: string; color: string; icon: typeof Clock }> = {
  pending: { label: 'Pending', color: 'bg-amber-500/10 text-amber-600', icon: Clock },
  submitted: { label: 'Submitted', color: 'bg-sky-500/10 text-sky-600', icon: Upload },
  graded: { label: 'Graded', color: 'bg-emerald-500/10 text-emerald-600', icon: Award },
};

export default function AssignmentsPage() {
  const [filter, setFilter] = useState<'all' | Assignment['status']>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = ASSIGNMENTS.filter((a) => filter === 'all' || a.status === filter);

  const filters = [
    { id: 'all' as const, label: 'All' },
    { id: 'pending' as const, label: 'Pending' },
    { id: 'submitted' as const, label: 'Submitted' },
    { id: 'graded' as const, label: 'Graded' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
        <p className="text-slate-600 mt-2">
          View homework instructions and track your submission status.
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Assignments */}
      <div className="grid gap-4">
        {filtered.map((assignment) => {
          const status = STATUS_CONFIG[assignment.status];
          const StatusIcon = status.icon;
          const isExpanded = expanded === assignment.id;
          return (
            <div
              key={assignment.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setExpanded(isExpanded ? null : assignment.id)}
                className="w-full p-5 text-left flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${status.color}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>
                    {assignment.grade && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-600">
                        Grade: {assignment.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">{assignment.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      {assignment.course}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      Due: {assignment.dueDate}
                    </span>
                  </div>
                </div>
                <ClipboardList className="w-5 h-5 text-slate-400 shrink-0" />
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-200 pt-4 animate-fade-in">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {assignment.description}
                  </p>
                  {assignment.status === 'pending' && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors">
                        <Upload className="w-4 h-4" />
                        Upload Submission
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">
                        <ClipboardList className="w-4 h-4" />
                        Submit Link
                      </button>
                    </div>
                  )}
                  {assignment.status === 'submitted' && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Submitted — awaiting grading
                    </div>
                  )}
                  {assignment.status === 'graded' && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-600 text-sm">
                      <Award className="w-4 h-4" />
                      Graded: {assignment.grade}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
