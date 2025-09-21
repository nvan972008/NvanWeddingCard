"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2025-11-30T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-6 md:gap-8">
      {[
        { label: "Ngày", value: timeLeft.days },
        { label: "Giờ", value: timeLeft.hours },
        { label: "Phút", value: timeLeft.minutes },
        { label: "Giây", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-3 border-white/70 flex items-center justify-center backdrop-blur-md bg-white/20 shadow-2xl hover:bg-white/30 transition-all duration-300">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <p className="text-base md:text-lg text-white/90 mt-3 font-medium tracking-wide drop-shadow-md">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
