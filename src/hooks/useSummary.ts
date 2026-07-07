import { useQuery } from '@tanstack/react-query';
import { getSummary } from '../api/strava';
import { type SummaryStat } from '../components/StatsGrid';
import { type SummaryResponse } from '../types/api';
import { formatDuration, msToKnots } from '../utils/helpers';


export function useSummary() {
    return useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        select: (data: SummaryResponse): SummaryStat[] => {
      return [
        { label: 'Session Count', value: data.total_session_count.toString() },
        { label: 'Time Spent', value: formatDuration(data.time_spent) },
        { label: 'Time Planed', value: formatDuration(data.time_spent_planing) },
        { 
          label: 'Distance Travelled', 
          value: data.total_distance > 0 ? `${(data.total_distance / 1000).toFixed(1)} km` : '0 km' 
        },
        { label: 'Top Speed', value: data.top_speed > 0 ? `${msToKnots(data.top_speed).toFixed(1)} kn` : '--' },
        { label: 'Fastest 100m', value: data.fastest_100 > 0 ? `${data.fastest_100.toFixed(1)} s` : '--' },
        { label: 'Fastest 500m', value: data.fastest_500 > 0 ? `${data.fastest_500.toFixed(1)} s` : '--' },
        { label: 'Fastest 1000m', value: data.fastest_1000 > 0 ? `${data.fastest_1000.toFixed(1)} s` : '--' },
      ];
    },
  });
}