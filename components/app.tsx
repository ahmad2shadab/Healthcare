import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { DashboardMainContent } from "./dashboard-main-content"
import { SidebarProvider } from "@/components/ui/sidebar"

export function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <DashboardMainContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
