const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchVpnStatus(): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/health/vpn`, {
    signal: AbortSignal.timeout(2500)
  });
  if (!response.ok) throw new Error('Not on VPN');
  return true;
}