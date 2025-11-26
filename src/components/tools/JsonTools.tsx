import { FileJson } from 'lucide-react'

export function JsonTools() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <FileJson className="text-cyan-400" />
        <h2 className="text-lg font-semibold">JSON Tools</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <p className="text-slate-400 text-sm">Formatter, Checker, and Comparer</p>
        {/* Tool content will go here */}
        <div className="mt-4 grid gap-2">
          <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm transition-colors text-left">
            Format JSON
          </button>
          <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm transition-colors text-left">
            Validate JSON
          </button>
          <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm transition-colors text-left">
            Compare JSON
          </button>
        </div>
      </div>
    </div>
  )
}
