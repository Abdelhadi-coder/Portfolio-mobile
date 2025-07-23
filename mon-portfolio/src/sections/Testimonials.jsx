'use client'
import { useEffect, useRef, useState } from 'react'
import testimonials from '../data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setIndex(prev => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(intervalRef.current)
    }
  }, [isMobile])

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-white py-10 px-2 sm:px-8">
      <div className="max-w-4xl mx-auto relative pb-10">
        {/* Desktop Arrows */}
        <div className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-blue-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-blue-500" />
          </button>
        </div>
        <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-blue-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 hover:text-blue-500" />
          </button>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-6 flex justify-center"
              >
                <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-2xl">
                  <p className="text-gray-800 text-lg sm:text-xl font-medium mb-4 leading-relaxed">
                    “{t.message}”
                  </p>
                  <p className="text-blue-600 font-semibold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
                <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                }`}
                ></button>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}
