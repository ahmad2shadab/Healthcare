interface SimpleAppointmentCardProps {
  title: string
  time: string
  color: string
}

export function SimpleAppointmentCard({ title, time, color }: SimpleAppointmentCardProps) {
  return (
    <div
      className="p-2.5 sm:p-3 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer transform hover:scale-[1.02]"
      style={{ backgroundColor: "#DEE0FC" }}
    >
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <div className="text-xs sm:text-sm font-medium truncate" style={{ color: "#272666" }}>
            {title}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{time}</div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {title === "Ophthalmologist" && <span className="text-sm">👁️</span>}
          {title === "Cardiologist" && <span className="text-sm">❤️</span>}
          {title === "Health checkup complete" && <span className="text-sm">💉</span>}
          {title === "Neurologist" && (
            <img src="/icons/neurologist.png" alt={title} className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
          )}
        </div>
      </div>
    </div>
  )
}
