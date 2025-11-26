import { FileCode } from 'lucide-react'

export function XmlTools() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <FileCode className="text-orange-400" />
        <h2 className="text-lg font-semibold">XML Tools</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <p className="text-slate-400 text-sm">Formatter, Checker, and Comparer</p>
        <div className="mt-4 grid gap-2">
          <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm transition-colors text-left">
            Format XML
          </button>
        </div>
      </div>
    </div>
  )
}
