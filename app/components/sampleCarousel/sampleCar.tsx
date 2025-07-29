"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  highlights?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Potential Account Value Model",
    category: "Machine Learning & Analytics",
    description:
      'Designed a model for estimating Potential Account Value. We aggregated several categorical, numerical, boolean and other derived features and tested them against the Top and Bottom 25% of historical deals. With some additional null handling, sample size controls, etc. we get Feature Importance scores that are used to find the "distance" of historical Accounts from the Target. This gives us our Nearest Neighbors, from which we find the Mean and P90 and set the PACV of the Account at P90 of their Nearest Neighbors. In testing our real opportunities beat the expected Mean 44-51% of the time, and beat P90 9-15% of the time.',
    highlights: [
      "Add more Opportunity-specific features for likelihood to close modeling",
      "Cross with product usage data for upsell identification",
      "Sales enablement and coaching insights",
    ],
  },
  {
    id: 2,
    title: "Customer Churn Prediction System",
    category: "Predictive Analytics",
    description:
      "Built an end-to-end churn prediction system using ensemble methods combining XGBoost, Random Forest, and Neural Networks. The model processes real-time customer behavior data, transaction patterns, and engagement metrics to identify at-risk customers 30-60 days before churn. Implemented automated alerting system that triggers personalized retention campaigns, resulting in 23% reduction in churn rate and $2.3M annual revenue retention.",
    highlights: [
      "Real-time scoring pipeline with 99.9% uptime",
      "A/B tested retention strategies with 31% success rate",
      "Integrated with CRM for automated campaign triggers",
    ],
  },
  {
    id: 3,
    title: "Dynamic Pricing Optimization Engine",
    category: "Revenue Optimization",
    description:
      "Developed a sophisticated pricing engine that dynamically adjusts product prices based on demand patterns, competitor analysis, inventory levels, and customer segments. Used reinforcement learning algorithms to continuously optimize pricing strategies across 10,000+ SKUs. The system processes market data in real-time and implements price changes within 15 minutes, leading to 18% increase in gross margin while maintaining competitive positioning.",
    highlights: [
      "Multi-armed bandit approach for price testing",
      "Competitor price monitoring and response automation",
      "Customer elasticity modeling by segment",
    ],
  },
  {
    id: 4,
    title: "Supply Chain Risk Assessment Platform",
    category: "Risk Management",
    description:
      "Created a comprehensive risk assessment platform that monitors global supply chain vulnerabilities using external data sources, news sentiment analysis, and predictive modeling. The system evaluates supplier financial health, geopolitical risks, weather patterns, and transportation disruptions to provide early warning signals. Implemented Monte Carlo simulations to quantify potential impact scenarios, enabling proactive risk mitigation strategies that reduced supply disruptions by 35%.",
    highlights: [
      "Integration with 50+ external data sources",
      "Real-time risk scoring with automated alerts",
      "Scenario planning and impact quantification tools",
    ],
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedHighlights, setExpandedHighlights] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleHighlights = (projectId: number) => {
    setExpandedHighlights(expandedHighlights === projectId ? null : projectId)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">Explore my portfolio of data science and analytics projects</p>
      </div>

      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-2">
              <div className="h-full min-h-[500px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Project {project.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{project.title}</h3>
                </div>
                <div className="px-6 pb-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>

                  {project.highlights && (
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleHighlights(project.id)}
                        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <span>Key Extensions & Applications:</span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedHighlights === project.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedHighlights === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-2 pt-1">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg rounded-md flex items-center justify-center transition-colors duration-200"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg rounded-md flex items-center justify-center transition-colors duration-200"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-4">
        <div
          className="bg-blue-500 h-1 rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
