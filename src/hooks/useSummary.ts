import { useQuery } from '@tanstack/react-query';
import { getSummary } from '../api/strava';
import { type HomeStat } from '../components/StatsGrid';

export type Summary = {
  total_distance: number;
  time_spent: number;
  time_spent_planing: number;
  total_session_count: number;
  top_speed: number;
  fastest_100: number;
  fastest_500: number;
  fastest_1000: number;
};

// TODO: Move to utils
const formatDuration = (seconds: number): string => {
  if (!seconds) return '0h 0m';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};


export function useSummary() {
    return useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        select: (data: Summary): HomeStat[] => {
      return [
        { label: 'Session Count', value: data.total_session_count.toString() },
        { label: 'Time Spent', value: formatDuration(data.time_spent) },
        { label: 'Time Planed', value: formatDuration(data.time_spent_planing) },
        { 
          label: 'Distance Travelled', 
          value: data.total_distance > 0 ? `${(data.total_distance / 1000).toFixed(1)} km` : '0 km' 
        },
        { label: 'Top Speed', value: data.top_speed > 0 ? `${data.top_speed.toFixed(1)} kn` : '--' },
        { label: 'Fastest 100m', value: data.fastest_100 > 0 ? `${data.fastest_100.toFixed(1)} s` : '--' },
        { label: 'Fastest 500m', value: data.fastest_500 > 0 ? `${data.fastest_500.toFixed(1)} s` : '--' },
        { label: 'Fastest 1000m', value: data.fastest_1000 > 0 ? `${data.fastest_1000.toFixed(1)} s` : '--' },
      ];
    },
  });
}