import { useMutation, useQueryClient } from '@tanstack/react-query';
import { syncStravaData } from '../api/strava';

function useStravaSync() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: syncStravaData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
  });
}

export { useStravaSync };