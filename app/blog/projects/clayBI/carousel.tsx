"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Dot } from "lucide-react"
import type React from "react"

const images: { src: string; alt: string; description: React.ReactNode }[] = [
  {
    src: "/projects/clayBI/home2.png",
    alt: "Webapp Homepage",
    description: (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Business Intelligence with Clay
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The webapp Homepage
        </p>
      </div>
    ),
  },
  {
    src: "/projects/clayBI/1.baseTable.png",
    alt: "Clay Base Table",
    description: (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Getting Started
        </h3>
        <p className="text-gray-600 leading-relaxed">
          First-thing's first, I created a table with all the fields I wanted to visualize: information about current size and growth, product plans and offerings, pricing, integrations, etc.
        </p>
        <p className="text-gray-600 leading-relaxed">
          For most of the information, I was able to use out-of-box Clay enrichments. I made slight edits to a few columns, like increasing the "Known Customers' output from 3 to 5, and splitting object-oriented results (like Job positing and product features) into usable splits.
        </p>
      </div>
    ),
  },
  {
    src: "/projects/clayBI/splittingField.png",
    alt: "Splitting a field into component columns in Clay",
    description: (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Smart Field Splitting
        </h3>
        <p className="text-gray-600 leading-relaxed">
          You can click into complex responses and select the parts you want to split out into useful columns, making your data more organized and actionable.
        </p>
      </div>
    ),
  },
  {
    src: "/projects/clayBI/keyFeatures.png",
    alt: "Key Features Parsing",
    description: (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Parsing Inconsistent Formats
        </h3>
        <p className="text-gray-600 leading-relaxed">
          One of the hardest parts of the project was handling the inconsistent formats, like with Product Pricing and Features. With the help of Cursor I was able to create a regex that covered all variations of bulleting formats in the sample data for Key Features.
        </p>
      </div>
    ),
  },
  {
    src: "/projects/clayBI/keyFeatures.png",
    alt: "Contact Sales",
    description: (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Contact Sales Integration
        </h3>
        <p className="text-gray-600 leading-relaxed">
          I also added a field that returns either the company's Contact Sales page, or a Contact Sales email so you can click and start your POC request. 
          </p>
          <p className="text-gray-600 leading-relaxed">
          I WANTED to pull a field that returned a random Enterprise Sales Rep's LinkedIn from the company, but the first pass didn't work and I left it alone.
        </p>
      </div>
    ),
  },
]

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToPreviousSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide()
      }
    }, 600000) // 600 seconds

    return () => clearInterval(interval)
  }, [isAnimating])

  const currentImage = images[currentSlide]

  return (
    <div className="min-h-fit">
      
        {/* Main Carousel Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-black">
          {/* Description Section */}
          <div className="px-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              {currentImage.description}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group border-t border-black mt-10">
            <div className="aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={currentImage.src || "/api/placeholder/800/500"}
                alt={currentImage.alt}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
                } group-hover:scale-105`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPreviousSlide}
              disabled={isAnimating}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:translate-x-0 -translate-x-2 opacity-70 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={goToNextSlide}
              disabled={isAnimating}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:translate-x-0 translate-x-2 opacity-70 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentSlide + 1} / {images.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center space-x-2 p-6 bg-gradient-to-r from-gray-50 to-white">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

    </div>
  )
}