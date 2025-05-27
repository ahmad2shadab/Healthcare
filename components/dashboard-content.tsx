"use client"

import { Search, Bell, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardContent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search" className="pl-10 bg-gray-50 border-0 focus:bg-white" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-600 rounded-full"></span>
            </Button>
            <Button size="icon" className="bg-cyan-400 hover:bg-cyan-500 text-white">
              <Plus className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-cyan-400 text-white text-sm">DS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Anatomy and Health Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>This Week</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3D Anatomy Model */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="relative h-80 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-48 mx-auto bg-red-200 rounded-full mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 rounded-full opacity-80"></div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1">
                        Healthy Heart
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute bottom-4 left-4 bg-cyan-400 text-white border-cyan-400 hover:bg-cyan-500"
                    >
                      Healthy Log
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Health Metrics */}
              <div className="space-y-4">
                {/* Lungs */}
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Lungs</h3>
                        <p className="text-xs text-gray-500">Tue, 26 Oct 2021</p>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="bg-red-500 h-1 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Teeth */}
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Teeth</h3>
                        <p className="text-xs text-gray-500">Tue, 26 Oct 2021</p>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="bg-yellow-500 h-1 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bone */}
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Bone</h3>
                        <p className="text-xs text-gray-500">Tue, 26 Oct 2021</p>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="bg-orange-500 h-1 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Activity Chart */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Activity</h3>
                  <span className="text-sm text-gray-500">3 appointment on this week</span>
                </div>
                <div className="h-32 flex items-end justify-between gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-2">
                      <div className="flex flex-col gap-1">
                        <div
                          className={`w-3 rounded-full ${
                            index === 1
                              ? "h-16 bg-cyan-400"
                              : index === 3
                                ? "h-12 bg-blue-500"
                                : index === 5
                                  ? "h-8 bg-purple-500"
                                  : "h-6 bg-gray-300"
                          }`}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calendar and Appointments */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">October 2021</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-xs text-gray-500 text-center py-1">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = i - 4 + 1
                    const isCurrentMonth = date > 0 && date <= 31
                    const isToday = date === 27
                    const hasAppointment = [26, 28, 29, 30].includes(date)

                    return (
                      <div
                        key={i}
                        className={`aspect-square flex items-center justify-center text-sm rounded ${
                          !isCurrentMonth
                            ? "text-gray-300"
                            : isToday
                              ? "bg-gray-900 text-white"
                              : hasAppointment
                                ? "bg-purple-100 text-purple-700"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {isCurrentMonth ? date : ""}
                      </div>
                    )
                  })}
                </div>

                {/* Appointment Cards */}
                <div className="mt-4 space-y-2">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <div className="text-sm font-medium">Dentist</div>
                    <div className="text-xs opacity-90">09:00-11:00</div>
                    <div className="text-xs opacity-90">Dr Cameron Williamson</div>
                  </div>
                  <div className="bg-purple-100 text-purple-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">Physiotherapy Appointment</div>
                    <div className="text-xs">11:00-12:00</div>
                    <div className="text-xs">Dr Kevin Djones</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">The Upcoming Schedule</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">On Thursday</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Health checkup complete</div>
                            <div className="text-xs text-gray-500">11:00 AM</div>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Ophthalmologist</div>
                            <div className="text-xs text-gray-500">14:00 PM</div>
                          </div>
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">On Saturday</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Cardiologist</div>
                            <div className="text-xs text-gray-500">12:00 AM</div>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Neurologist</div>
                            <div className="text-xs text-gray-500">16:00 PM</div>
                          </div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
