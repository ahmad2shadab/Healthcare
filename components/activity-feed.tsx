import { Card, CardContent } from "@/components/ui/card"

export function ActivityFeed() {
  const activityData = [
    { day: "Mon", height: "h-6 sm:h-8", color: "bg-cyan-400" },
    { day: "Tue", height: "h-12 sm:h-16", color: "bg-blue-500" },
    { day: "Wed", height: "h-8 sm:h-12", color: "bg-cyan-300" },
    { day: "Thu", height: "h-16 sm:h-20", color: "bg-blue-600" },
    { day: "Fri", height: "h-4 sm:h-6", color: "bg-cyan-200" },
    { day: "Sat", height: "h-10 sm:h-14", color: "bg-purple-500" },
    { day: "Sun", height: "h-6 sm:h-10", color: "bg-cyan-400" },
  ]

  return (
    <Card className="bg-white shadow-sm border border-gray-100">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Activity</h3>
          <span className="text-sm text-gray-500">3 appointment on this week</span>
        </div>

        <div className="flex items-end justify-between gap-2 sm:gap-3 h-20 sm:h-24 px-1 sm:px-2">
          {activityData.map((item) => (
            <div key={item.day} className="flex flex-col items-center gap-1 sm:gap-2">
              <div
                className={`w-2.5 sm:w-3 ${item.height} ${item.color} rounded-t-sm transition-all duration-300 shadow-sm`}
              ></div>
              <span className="text-xs text-gray-500 font-medium">{item.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
