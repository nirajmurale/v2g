import { X, Play, Calendar, Clock, User } from 'lucide-react';
import type { Recording } from '@/data/mockData';

interface VideoPlayerModalProps {
  recording: Recording;
  onClose: () => void;
}

export default function VideoPlayerModal({ recording, onClose }: VideoPlayerModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <div className="relative aspect-video bg-black">
          <video
            src={recording.videoUrl}
            poster={recording.thumbnail}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold text-slate-900">{recording.title}</h3>
            <span className="shrink-0 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 text-xs font-medium">
              {recording.category}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {recording.instructor}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {recording.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {recording.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
