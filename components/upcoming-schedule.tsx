import { Card, CardContent } from "@/components/ui/card"
import { SimpleAppointmentCard } from "./simple-appointment-card"

const scheduleData = {
  thursday: [
    {
      title: "Health checkup complete",
      time: "11:00 AM",
      color: "bg-red-500",
    },
    {
      title: "Ophthalmologist",
      time: "14:00 PM",
      color: "bg-orange-500",
    },
  ],
  saturday: [
    {
      title: "Cardiologist",
      time: "12:00 AM",
      color: "bg-red-500",
    },
    {
      title: "Neurologist",
      time: "16:00 PM",
      color: "bg-purple-500",
    },
  ],
}

export function UpcomingSchedule() {
  return (
    <Card className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4 sm:p-5">
        <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: "#272666" }}>
          The Upcoming Schedule
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2 sm:mb-3">On Thursday</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scheduleData.thursday.map((appointment, index) => (
                <SimpleAppointmentCard
                  key={index}
                  title={appointment.title}
                  time={appointment.time}
                  color={appointment.color}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2 sm:mb-3">On Saturday</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scheduleData.saturday.map((appointment, index) => (
                <SimpleAppointmentCard
                  key={index}
                  title={appointment.title}
                  time={appointment.time}
                  color={appointment.color}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
