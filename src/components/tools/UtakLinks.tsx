import { Link as LinkIcon } from 'lucide-react'

export function UtakLinks() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <LinkIcon className="text-blue-400" />
        <h2 className="text-lg font-semibold">Utak Links</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <div className="grid grid-cols-2 gap-2">
          <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-center text-sm transition-colors">ADB</a>
          <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-center text-sm transition-colors">Finance</a>
          <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-center text-sm transition-colors">Admin</a>
          <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-center text-sm transition-colors">MAC</a>
        </div>
      </div>
    </div>
  )
}
