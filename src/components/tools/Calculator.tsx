import { Calculator as CalculatorIcon } from 'lucide-react'

export function Calculator() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <CalculatorIcon className="text-purple-400" />
        <h2 className="text-lg font-semibold">Calculator</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <p className="text-slate-400 text-sm">Standard Calculator</p>
        {/* Calculator UI placeholder */}
        <div className="mt-4 h-32 bg-slate-800/50 rounded flex items-center justify-center text-slate-600">
          Calculator UI
        </div>
      </div>
    </div>
  )
}
