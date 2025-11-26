import { Link } from '@tanstack/react-router'
import { 
  User, 
  Church, 
  Briefcase,
  Home
} from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white border-r border-slate-800 flex flex-col shrink-0 sticky top-0">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Productivity
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-6">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/work" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors [&.active]:bg-slate-800 [&.active]:text-white"
                activeOptions={{ exact: false }}
              >
                <Briefcase size={18} />
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/personal" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors [&.active]:bg-slate-800 [&.active]:text-white"
                disabled
              >
                <User size={18} />
                <span>Personal</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/church" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors [&.active]:bg-slate-800 [&.active]:text-white"
                disabled
              >
                <Church size={18} />
                <span>Church</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t border-slate-800">
        <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors [&.active]:bg-slate-800 [&.active]:text-white">
          <Home size={18} />
          <span>Home</span>
        </Link>
      </div>
    </div>
  )
}
