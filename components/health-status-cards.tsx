import { Card, CardContent } from "@/components/ui/card"

const healthData = [
  {
    title: "Lungs",
    date: "Tue, 26 Oct 2021",
    progress: 75,
    color: "bg-red-500",
    bgColor: "bg-red-100",
    icon: "/icons/lungs.png",
  },
  {
    title: "Teeth",
    date: "Tue, 26 Oct 2021",
    progress: 50,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-100",
    icon: "/icons/clean.png",
  },
  {
    title: "Bone",
    date: "Tue, 26 Oct 2021",
    progress: 65,
    color: "bg-orange-500",
    bgColor: "bg-orange-100",
    icon: "/icons/bone.png",
  },
]

export function HealthStatusCards() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {healthData.map((item) => (
        <Card
          key={item.title}
          className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 ${item.bgColor} rounded-lg flex items-center justify-center p-1.5 sm:p-2 transition-transform duration-200 hover:scale-105`}
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate" style={{ color: "#272666" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2 truncate">{item.date}</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`${item.color} h-1.5 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Details link positioned below the cards */}
      <div className="text-right mt-3">
        <button
          className="text-xs hover:opacity-80 transition-colors duration-200 cursor-pointer"
          style={{ color: "#272666" }}
        >
          Details →
        </button>
      </div>
    </div>
  )
}
