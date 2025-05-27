import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarView() {
  const weekDays = [
    { day: "Mon", date: "25" },
    { day: "Tues", date: "26" },
    { day: "Wed", date: "27" },
    { day: "Thurs", date: "28" },
    { day: "Fri", date: "29" },
    { day: "Sat", date: "30" },
    { day: "Sun", date: "31" },
  ]

  const timeSlots = [
    ["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"],
    ["11:00", "09:00", "—", "11:00", "14:00", "14:00", "10:00"],
    ["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"],
  ]

  return (
    <Card className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4 sm:p-5">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">October 2021</h3>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-7 sm:w-7 hover:bg-gray-100 transition-colors">
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-7 sm:w-7 hover:bg-gray-100 transition-colors">
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Week Days and Dates */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-500 mb-1">{item.day}</div>
              <div className="text-lg font-semibold text-gray-900">{item.date}</div>
            </div>
          ))}
        </div>

        {/* Time Slots Grid */}
        <div className="space-y-2 mb-4">
          {timeSlots.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-7 gap-1">
              {row.map((time, colIndex) => {
                const isHighlighted =
                  (time === "09:00" && colIndex === 1) || // Tuesday 09:00
                  (time === "12:00" && colIndex === 5) || // Saturday 12:00
                  (time === "09:00" && colIndex === 6) // Sunday 09:00

                const isLightHighlighted =
                  (time === "11:00" && colIndex === 3) || // Thursday 11:00
                  (time === "12:00" && colIndex === 0) // Monday 12:00 (if needed)

                return (
                  <div
                    key={colIndex}
                    className={`text-center py-1 px-2 rounded text-xs transition-colors ${
                      time === "—"
                        ? "text-gray-300"
                        : isHighlighted
                          ? "text-white font-medium"
                          : isLightHighlighted
                            ? "font-medium"
                            : "text-gray-500"
                    }`}
                    style={
                      isHighlighted
                        ? { backgroundColor: "#272666" }
                        : isLightHighlighted
                          ? { backgroundColor: "#DFE4FC", color: "#272666" }
                          : {}
                    }
                  >
                    {time}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Appointment Cards */}
        <div className="space-y-2 sm:space-y-3">
          <div
            className="text-white p-2.5 sm:p-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            style={{ backgroundColor: "#272666" }}
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-sm truncate">Dentist</div>
                <div className="text-xs opacity-90">09:00-11:00</div>
                <div className="text-xs opacity-90 truncate">Dr Cameron Williamson</div>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2">
                <img src="/icons/clean.png" alt="Dentist" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div
            className="text-purple-700 p-2.5 sm:p-3 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: "#DEE0FC" }}
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-sm truncate" style={{ color: "#272666" }}>
                  Physiotherapy Appointment
                </div>
                <div className="text-xs text-gray-500">11:00-12:00</div>
                <div className="text-xs truncate text-gray-500">Dr Kevin Djones</div>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2">
                <span className="text-lg">💪</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
