import { Bell, Plus, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-gray-100 transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Healthcare branding for mobile */}
        <div className="lg:hidden text-xl sm:text-2xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span style={{ color: "#272666" }}>care.</span>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:block relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#393873" }} />
        </Button>

        {/* Profile - moved before + button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden hover:ring-2 hover:ring-cyan-400 transition-all duration-200"
        >
          <img src="/icons/profile.png" alt="User Profile" className="w-full h-full object-cover" />
        </Button>

        {/* Plus button - moved after profile */}
        <Button
          size="icon"
          className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full h-8 w-8 sm:h-9 sm:w-9 transition-all duration-200 hover:scale-105"
        >
          <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </header>
  )
}
