import { Percent } from 'lucide-react'

export function Discounts() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Percent className="text-pink-400" />
        <h2 className="text-lg font-semibold">Discounts/VAT</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <p className="text-slate-400 text-sm">Breakdown calculator</p>
        <div className="mt-4 space-y-2">
          <input 
            type="number" 
            placeholder="Price" 
            className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm"
          />
          <input 
            type="number" 
            placeholder="Quantity" 
            className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
