import { DashboardOverview } from "./dashboard-overview"
import { AnatomySection } from "./anatomy-section"
import { HealthStatusCards } from "./health-status-cards"
import { CalendarView } from "./calendar-view"
import { UpcomingSchedule } from "./upcoming-schedule"
import { ActivityFeed } from "./activity-feed"
import { ChevronDown } from "lucide-react"

export function DashboardMainContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <DashboardOverview />

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Left Column - Anatomy and Health Status */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* Anatomy and Health Cards - Responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="order-2 lg:order-1">
                <AnatomySection />
              </div>
              <div className="order-1 lg:order-2">
                {/* This Week dropdown above health cards */}
                <div className="mb-4">
                  <div
                    className="flex items-center justify-end gap-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-colors"
                    style={{ color: "#3236AC" }}
                  >
                    <span>This Week</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <HealthStatusCards />
              </div>
            </div>
            <ActivityFeed />
          </div>

          {/* Right Column - Calendar and Schedule */}
          <div className="space-y-4 sm:space-y-6">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  )
}
