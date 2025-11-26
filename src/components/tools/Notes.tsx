import { StickyNote } from 'lucide-react'

export function Notes() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <StickyNote className="text-yellow-200" />
        <h2 className="text-lg font-semibold">Notes</h2>
      </div>
      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4">
        <textarea 
          className="w-full h-full bg-transparent resize-none focus:outline-none text-sm"
          placeholder="Type your notes here..."
        />
      </div>
    </div>
  )
}
