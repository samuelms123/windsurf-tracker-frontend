import { Navigate, Outlet } from 'react-router-dom';
import { useVpnStatus } from '../hooks/useVpnStatus'; 
import Loader from './Loader';

export default function VpnGuard() {
  const { isVpn, isLoading } = useVpnStatus();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-950">
        <Loader />
      </div>
    );
  }
  return isVpn ? <Outlet /> : <Navigate to="/blocked" replace />;
}