import { useState } from 'react';
import { Search, Play, Calendar, Clock, Video } from 'lucide-react';
import {
  RECORDINGS,
  RECORDING_CATEGORIES,
  type Recording,
} from '@/data/mockData';
import VideoPlayerModal from '@/components/VideoPlayerModal';

export default function RecordingsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<Recording | null>(null);

  const filtered = RECORDINGS.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || r.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Recordings</h1>
        <p className="text-slate-600 mt-2">
          Browse and watch past class recordings anytime.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search recordings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {RECORDING_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-600">
          <Video className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <p>No recordings found. Try adjusting your search.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((rec) => (
            <button
              key={rec.id}
              onClick={() => setSelected(rec)}
              className="group text-left rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-indigo-600/40 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={rec.thumbnail}
                  alt={rec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
                  {rec.duration}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-indigo-600 font-medium">{rec.category}</span>
                <h3 className="font-semibold text-slate-900 mt-1 line-clamp-2">{rec.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {rec.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {rec.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Video Modal */}
      {selected && (
        <VideoPlayerModal recording={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
