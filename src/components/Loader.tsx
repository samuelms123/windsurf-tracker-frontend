import {LoaderCircle} from 'lucide-react'


export default function Loader() {
  return (
    <div className="flex h-full min-h-[50vh] w-full items-center justify-center bg-slate-950 text-slate-100">
      <LoaderCircle className="h-12 w-12 animate-spin stroke-[2.5]" />
    </div>
  )
}