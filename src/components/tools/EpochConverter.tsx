import { Clock } from 'lucide-react'

export function EpochConverter() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-yellow-400" />
        <h2 className="text-lg font-semibold">Epoch Converter</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <p className="text-slate-400 text-sm">Convert timestamps</p>
        <div className="mt-4 space-y-2">
          <input 
            type="text" 
            placeholder="Enter timestamp" 
            className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm"
          />
          <button className="w-full px-3 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-sm transition-colors">
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}
