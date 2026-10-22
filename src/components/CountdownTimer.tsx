import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  targetTime: string;
}

function parseTarget(dateStr: string, timeStr: string): number {
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const [, monthName, yearStr] = dateStr.match(/(\w+)\s+(\d+),\s+(\d+)/) || [];
  const day = parseInt(dateStr.match(/\d+/)?.[0] || '1');
  const month = monthMap[monthName] ?? 0;
  const year = parseInt(yearStr || '2026');
  const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  let hours = timeMatch ? parseInt(timeMatch[1]) : 10;
  const minutes = timeMatch ? parseInt(timeMatch[2]) : 0;
  const ampm = timeMatch?.[3]?.toUpperCase();
  if (ampm === 'PM' && hours !== 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  return new Date(year, month, day, hours, minutes).getTime();
}

export default function CountdownTimer({ targetDate, targetTime }: CountdownTimerProps) {
  const target = parseTarget(targetDate, targetTime);
  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const clamped = Math.max(0, timeLeft);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((clamped % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((clamped % (1000 * 60)) / 1000);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="flex gap-3">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-slate-100 border border-slate-300"
        >
          <span className="text-2xl font-bold text-slate-900 tabular-nums">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-600 uppercase tracking-wider">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
