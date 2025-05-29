"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useOnboardingStore } from "@/lib/store"

interface DomainGoal {
  domainId: string
  currentStatus: string
  goals: string[]
  timeline: string
  priorities: string[]
}

const domainQuestions = {
  career: {
    currentStatus: "What's your current career situation?",
    goals: "What are your career goals?",
    timeline: "What's your target timeline?",
    priorities: "What are your top career priorities?"
  },
  relationships: {
    currentStatus: "How would you describe your current relationships?",
    goals: "What are your relationship goals?",
    timeline: "What's your target timeline?",
    priorities: "What are your top relationship priorities?"
  },
  finance: {
    currentStatus: "What's your current financial situation?",
    goals: "What are your financial goals?",
    timeline: "What's your target timeline?",
    priorities: "What are your top financial priorities?"
  },
  health: {
    currentStatus: "How would you describe your current health?",
    goals: "What are your health and wellness goals?",
    timeline: "What's your target timeline?",
    priorities: "What are your top health priorities?"
  },
  "personal-growth": {
    currentStatus: "How would you describe your current personal growth?",
    goals: "What are your personal development goals?",
    timeline: "What's your target timeline?",
    priorities: "What are your top personal growth priorities?"
  }
}

export function DomainDetailsForm() {
  const router = useRouter()
  const selectedDomains = useOnboardingStore((state) => state.selectedDomains)
  const setDomainDetails = useOnboardingStore((state) => state.setDomainDetails)
  const [currentDomain, setCurrentDomain] = useState<string>("")
  const [domainData, setDomainData] = useState<Record<string, DomainGoal>>({})

  useEffect(() => {
    if (selectedDomains.length > 0) {
      setCurrentDomain(selectedDomains[0])
    } else {
      router.push("/onboarding/domains")
    }
  }, [selectedDomains, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDomainDetails(currentDomain, domainData[currentDomain])
    const nextDomain = getNextDomain()
    if (nextDomain) {
      setCurrentDomain(nextDomain)
    } else {
      router.push("/onboarding/review")
    }
  }

  const getNextDomain = () => {
    const currentIndex = selectedDomains.indexOf(currentDomain)
    return selectedDomains[currentIndex + 1]
  }

  const handleChange = (field: keyof DomainGoal, value: string | string[]) => {
    setDomainData(prev => ({
      ...prev,
      [currentDomain]: {
        ...prev[currentDomain],
        [field]: value
      }
    }))
  }

  const questions = domainQuestions[currentDomain as keyof typeof domainQuestions]

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            {currentDomain.charAt(0).toUpperCase() + currentDomain.slice(1)} Details
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                {questions.currentStatus}
              </label>
              <textarea
                value={domainData[currentDomain]?.currentStatus || ""}
                onChange={(e) => handleChange("currentStatus", e.target.value)}
                required
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white min-h-[100px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                {questions.goals}
              </label>
              <textarea
                value={domainData[currentDomain]?.goals?.join("\n") || ""}
                onChange={(e) => handleChange("goals", e.target.value.split("\n"))}
                required
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white min-h-[100px]"
                placeholder="Enter each goal on a new line"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                {questions.timeline}
              </label>
              <input
                type="text"
                value={domainData[currentDomain]?.timeline || ""}
                onChange={(e) => handleChange("timeline", e.target.value)}
                required
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="e.g., 6 months, 1 year, 5 years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                {questions.priorities}
              </label>
              <textarea
                value={domainData[currentDomain]?.priorities?.join("\n") || ""}
                onChange={(e) => handleChange("priorities", e.target.value.split("\n"))}
                required
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white min-h-[100px]"
                placeholder="Enter each priority on a new line"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              {getNextDomain() ? "Next Domain" : "Review & Complete"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 