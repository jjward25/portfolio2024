"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  highlights?: string[]
  image: string
  type: "Project" | "Idea"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Potential Account Value (PACV) Model",
    category: "Machine Learning & Analytics",
    description:
      `Designed a model for estimating Potential Account Value for Clay. We aggregated several categorical, numerical, and other derived features and tested them against the Top and Bottom 25% of historical deals. 
      \n With some additional null handling, sample size controls, etc. we get Feature Importance scores that are used to find the "distance" of historical Accounts from the Target. 
      \n This gives us our Nearest Neighbors, and we set the PACV of the Account at the 90th percentile of their Nearest Neighbors. In testing our real opportunities beat the expected Mean 44-51% of the time, and beat P90 9-15% of the time.`,
    highlights: [
      "Add more Opportunity-specific features (competitor mentions, champion level, use case, etc.) for likelihood to close modeling",
      "Cross with product usage data to find potential upsells among existing customers",
      `Sales enablement and coaching insights:
      \n - If a rep consistently closes but never beats the P90 potential, consider coaching on identifying and winning over champions, finding pain, and making upsells.
      \n - If they do beat P90 consistently, consider promoting to handle larger accounts`,
    ],
    image: "",
    type: "Project"
  },
  {
    id: 2,
    title: "Customer Core Vitals",
    category: "Machine Learning & Analytics",
    description:
      `Managed the Fivetran connection between Salesforce and Snowflake to create Account and Portfolio-level usage data for Vercel's field teams. 
      \n Modeled metrics and used our BI tool to create views for account management. We then used the modeled metrics for more sophisticated alerts (on pace for overage, bandwidth dropped) that were in turn used for related motions (upsells, support, churn prevention, etc.).`,
    highlights: [
      "Account Health Scoring: based on a mix of usage, firmographics, CS sentiment, support tickets and other related features",
      "Created a model for predicting when a customer launched a site into production with 80% success rate (reputational and monetary risk for customer if site is misconfigured with high traffic)",
    ],
    image: "",
    type: "Project"
  },
  {
    id: 3,
    title: "General RevOps Experiences",
    category: "Revenue Operations",
    description:
      `Migrated Vercel's team of 15 CSMs to Salesforce and decommissioned Planhat in 30 days
      \n Admin at times for Salesforce, Hubspot, Gong, Fivetran, and other tools
      \n Re-designed Vercel's Renewals process
      \n Helped a small team at Dashfuel migrate all accounts and activity from Hubspot to Salesforce`,
    highlights: [
      "Multi-armed bandit approach for price testing",
      "Competitor price monitoring and response automation",
      "Customer elasticity modeling by segment",
    ],
    image: "",
    type: "Project"
  },
  {
    id: 4,
    title: "Customer Tiering",
    category: "Risk Management",
    description:
      "Created a comprehensive risk assessment platform that monitors global supply chain vulnerabilities using external data sources, news sentiment analysis, and predictive modeling. The system evaluates supplier financial health, geopolitical risks, weather patterns, and transportation disruptions to provide early warning signals. Implemented Monte Carlo simulations to quantify potential impact scenarios, enabling proactive risk mitigation strategies that reduced supply disruptions by 35%.",
    highlights: [
      "Integration with 50+ external data sources",
      "Real-time risk scoring with automated alerts",
      "Scenario planning and impact quantification tools",
    ],
    image: "",
    type: "Project"
  },
  {
    id: 4,
    title: "Designing Stage Gates",
    category: "Revenue Operations",
    description:
      `Most growing companies look to have clear, distinct, repeatable sales stages for tracking deals. Ideally these stages have clear entry and exit triggers.  This would reduce admin work for your sales teams while also giving us specific things to consider if deals fail or stall in certain stages.
      \n Below is a sample funnel I designed for a company that had a relatively quick Qualify to Close rate; most importantly this allows us to assign Deal source to the correct team based on the Account's stage progression:`,
    highlights: [
      "In the funnel above, Opps that go from: Opps that go from: (1) Qualified to Demo = AE-sourced, and (2) Warming/Meeting Booked to Demo = BDR/Growth-sourced",
      "And when AEs are prospecting, they should pull their active leads straight into Qualified, then DQ or Demo.  In this case, (1) Discovery to Qualified = AE-nurtured, and (2) Warming to Qualified = Growth-nurtured, handed-off",
      
    ],
    image: "/projects/gtmFunnel.png",
    type: "Idea"
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedHighlights, setExpandedHighlights] = useState<number | null>(null)
  const [containerHeight, setContainerHeight] = useState<number>(300)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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
    }, 1600000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Add height calculation effect
  useEffect(() => {
    const updateHeight = () => {
      const currentCard = cardRefs.current[currentIndex]
      if (currentCard) {
        const height = currentCard.offsetHeight
        setContainerHeight(height)
      }
    }
    
    // Small delay to allow content to render
    setTimeout(updateHeight, 100)
  }, [currentIndex, expandedHighlights])

  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-4 py-8 bg-cyan-950 rounded-xl mt-12">
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-xl transition-all duration-700 ease-in-out"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{ height: `${containerHeight}px` }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0 px-1 md:px-2">
                <div 
                  ref={(el) => cardRefs.current[index] = el}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 md:p-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{project.title}</h3>
                  </div>
                  <div className="px-3 md:px-6 pb-6 space-y-6">
                    <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-2 bg-gray-100 border border-gray-300 py-2 px-3 rounded-md">
                      {project.description.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex}>{line.trim()}</div>
                      ))}
                    </div>

                    {/* Show image only if it exists */}
                    {project.image && (
                      <div className="mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    )}

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
                                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                  {highlight.split('\n').map((line, lineIndex) => (
                                    <div key={lineIndex}>{line.trim()}</div>
                                  ))}
                                </div>
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
        </div>

        {/* Navigation Buttons - moved outside overflow container */}
        <button
          className="hidden md:flex absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg rounded-md items-center justify-center transition-colors duration-200 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg rounded-md items-center justify-center transition-colors duration-200 z-10"
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
