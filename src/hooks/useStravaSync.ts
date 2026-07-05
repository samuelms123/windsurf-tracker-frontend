import { useMutation, useQueryClient } from '@tanstack/react-query';

function useStravaSync() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const apiKey = import.meta.env.VITE_HOME_LAB_API_KEY;

            const res = await fetch('http://127.0.0.1:8000/api/v1/strava/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': apiKey
                }
            });

            if (!res.ok) {
                throw new Error('Sync endpoint failed');
            }

            return res.json();
        },
        onSuccess: () => {
            // Automatically refresh any statistics queries running in the app
            queryClient.invalidateQueries({ queryKey: ['windsurf-stats'] });
        },
    });
}

export { useStravaSync };