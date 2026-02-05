import { Heart } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Animated Logo */}
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-teal-200 animate-ping opacity-75" />

        {/* Inner container */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center shadow-xl">
          <Heart className="w-10 h-10 text-teal-400 animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-blue-800 mb-2 font-[family-name:var(--font-heading)]">
          Loading...
        </h2>
        <p className="text-gray-500 text-sm">
          Brightway Home Care
        </p>
      </div>

      {/* Loading bar - using Tailwind animation */}
      <div className="mt-6 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}
