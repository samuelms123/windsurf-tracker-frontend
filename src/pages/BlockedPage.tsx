import { ShieldAlert } from 'lucide-react'

export default function BlockedPage() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-950 text-slate-100 pb-40">
            <ShieldAlert className="mb-4 h-12 w-12 stroke-[2.5]" />
            <h1 className="mb-2 text-2xl font-semibold">Access Denied</h1>
            <p className="text-center text-slate-400">
                This page requires dedicated VPN to access.
            </p>
            <p className="text-center text-slate-400">
                Please connect to the VPN and try again.
            </p>
        </div>
    )
}