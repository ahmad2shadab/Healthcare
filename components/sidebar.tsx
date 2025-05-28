import {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  BarChart3,
  MessageCircle,
  Phone,
  Settings,
} from 'lucide-react';

const generalItems = [
  { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
  { icon: Clock, label: 'History', isActive: false },
  { icon: Calendar, label: 'Calendar', isActive: false },
  { icon: ClipboardList, label: 'Appointments', isActive: false },
  { icon: BarChart3, label: 'Statistics', isActive: false },
];

const toolsItems = [
  { icon: MessageCircle, label: 'Chat', isActive: false },
  { icon: Phone, label: 'Support', isActive: false },
];

export function Sidebar() {
  return (
    <div className="w-full lg:w-64 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Healthcare Branding */}
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="text-xl sm:text-2xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span style={{ color: '#272666' }}>care.</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">
          General
        </h2>
        <nav className="space-y-1 sm:space-y-2">
          {generalItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.isActive
                  ? 'text-white rounded-lg'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              style={item.isActive ? { color: '#272666', fontWeight: 700 } : {}}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </nav>

        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 sm:mb-6 mt-8">
          Tools
        </h2>
        <nav className="space-y-1 sm:space-y-2">
          {toolsItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 sm:p-6">
        <div className="flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
          <Settings className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <span className="truncate">Setting</span>
        </div>
      </div>
    </div>
  );
}
