import { useQuery } from '@tanstack/react-query';
import { fetchVpnStatus } from '../api/vpn';

export function useVpnStatus() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['vpnStatus'],
    queryFn: fetchVpnStatus,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  return {
    isVpn: !isError && !!data,
    isLoading,
  };
}