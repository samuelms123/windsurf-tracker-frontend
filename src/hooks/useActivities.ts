import { useQuery } from '@tanstack/react-query';
import { getActivities } from '../api/strava';
import { formatDate, formatDuration } from '../utils/helpers';

export interface FormattedActivity {
  id: string;
  date: string;
  place_main: string;
  place_secondary?: string;
  duration: string;
  distance: string;
  averageSpeed: string;
  maxSpeed: string;
  maxSpeed5s: string;
  maxSpeed10s: string;
  fastest100: string;
  fastest500: string;
  fastest1000: string;
  speedZones: {
    idle: string;
    low: string;
    planingEntry: string;
    planing: string;
    blasting: string;
  };

}


export function useActivities() {
  return useQuery({
    queryKey: ['activities'],
    queryFn: getActivities,
    select: (rawActivities): FormattedActivity[] => {
      return rawActivities.map((activity) => ({
        id: activity.id,
        date: formatDate(activity.date),
        place_main: [activity.start_location.city, activity.start_location.country].filter(Boolean).join(', ') || 'Unknown Location',
        place_secondary: [activity.start_location.suburb, activity.start_location.street].filter(Boolean).join(', ') || 'Unknown Location',

        duration: formatDuration(activity.elapsed_time),
        distance: activity.total_distance > 0 ? `${(activity.total_distance / 1000).toFixed(1)} km` : '0 km',
        averageSpeed: `${activity.average_speed.toFixed(1)} kn`,
        maxSpeed: `${activity.max_speed.toFixed(1)} kn`,
        maxSpeed5s: `${activity.max_speed_avg_5_s.toFixed(1)} kn`,
        maxSpeed10s: `${activity.max_speed_avg_10_s.toFixed(1)} kn`,
        fastest100: activity.fastest_100 > 0 ? `${activity.fastest_100.toFixed(1)} s` : '--',
        fastest500: activity.fastest_500 > 0 ? `${activity.fastest_500.toFixed(1)} s` : '--',
        fastest1000: activity.fastest_1000 > 0 ? `${activity.fastest_1000.toFixed(1)} s` : '--',
        speedZones: {
          idle: formatDuration(activity.speed_zones.idle),
          low: formatDuration(activity.speed_zones.low),
          planingEntry: formatDuration(activity.speed_zones.planing_entry),
          planing: formatDuration(activity.speed_zones.planing),
          blasting: formatDuration(activity.speed_zones.blasting),
        }
      }
      ));
    }
  });
}