import { createFileRoute } from '@tanstack/react-router'
import { JsonTools } from '../../components/tools/JsonTools'
import { CsvTools } from '../../components/tools/CsvTools'
import { XmlTools } from '../../components/tools/XmlTools'
import { Calculator } from '../../components/tools/Calculator'
import { EpochConverter } from '../../components/tools/EpochConverter'
import { Discounts } from '../../components/tools/Discounts'
import { UtakLinks } from '../../components/tools/UtakLinks'
import { Notes } from '../../components/tools/Notes'

export const Route = createFileRoute('/work/')({
  component: WorkIndex,
})

function WorkIndex() {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Work Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        {/* Row 1: Formatters */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <JsonTools />
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <CsvTools />
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <XmlTools />
        </div>

        {/* Row 2: Utilities */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <Calculator />
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <EpochConverter />
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <Discounts />
        </div>

        {/* Row 3: Links & Notes */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <UtakLinks />
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors lg:col-span-2">
          <Notes />
        </div>
      </div>
    </div>
  )
}
