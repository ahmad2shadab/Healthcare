import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AnatomySection() {
  return (
    <Card className="bg-white shadow-sm border border-gray-100">
      <CardContent className="p-4 sm:p-6">
        <div className="relative h-64 sm:h-80 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          {/* Human Anatomy Image */}
          <div className="relative">
            <img
              src="/anatomy-figure.png"
              alt="Human Anatomy"
              className="h-56 sm:h-72 w-auto object-contain drop-shadow-lg"
            />

            {/* Healthy Heart indicator - responsive positioning */}
            <div className="absolute top-12 sm:top-16 left-4 sm:left-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                ❤️ Healthy Heart
              </Button>
            </div>
          </div>

          {/* Healthy Log Button - responsive positioning */}
          <Button className="absolute top-16 sm:top-20 right-2 sm:right-4 bg-cyan-400 hover:bg-cyan-500 text-white text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-md">
            Healthy Log
          </Button>

          {/* Zoom Control - responsive sizing */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-200">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-400 rounded-full relative">
              <div className="absolute -right-0.5 sm:-right-1 -bottom-0.5 sm:-bottom-1 w-1.5 sm:w-2 h-0.5 bg-gray-400 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
