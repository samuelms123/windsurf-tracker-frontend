import { useQuery } from '@tanstack/react-query';
import { getActivities } from '../api/strava';


export function useActivities() {
    return useQuery({
        queryKey: ['activities'],
        queryFn: getActivities
    });
}