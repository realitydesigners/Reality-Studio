"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useOnboardingStore } from "@/lib/store"

interface Domain {
  id: string
  name: string
  description: string
  icon: string
  selected: boolean
}

const initialDomains: Domain[] = [
  {
    id: "career",
    name: "Career",
    description: "Professional growth, work-life balance, and career achievements",
    icon: "💼",
    selected: false
  },
  {
    id: "relationships",
    name: "Relationships",
    description: "Family, friends, and social connections",
    icon: "❤️",
    selected: false
  },
  {
    id: "finance",
    name: "Finance",
    description: "Financial goals, investments, and wealth building",
    icon: "💰",
    selected: false
  },
  {
    id: "health",
    name: "Health",
    description: "Physical fitness, mental wellness, and lifestyle",
    icon: "🏃",
    selected: false
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    description: "Learning, skills, and personal development",
    icon: "🌱",
    selected: false
  }
]

export function LifeDomains() {
  const router = useRouter()
  const setSelectedDomains = useOnboardingStore((state) => state.setSelectedDomains)
  const [domains, setDomains] = useState<Domain[]>(initialDomains)
  const [selectedCount, setSelectedCount] = useState(0)

  const toggleDomain = (id: string) => {
    setDomains(prev => {
      const newDomains = prev.map(domain => {
        if (domain.id === id) {
          const newSelected = !domain.selected
          setSelectedCount(prev => newSelected ? prev + 1 : prev - 1)
          return { ...domain, selected: newSelected }
        }
        return domain
      })
      return newDomains
    })
  }

  const handleContinue = () => {
    const selectedDomains = domains.filter(d => d.selected).map(d => d.id)
    setSelectedDomains(selectedDomains)
    router.push("/onboarding/domain-details")
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Select Life Domains
          </h1>
          <p className="text-neutral-400 text-center mb-8">
            Choose the areas of your life you want to focus on and design
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {domains.map((domain) => (
              <motion.div
                key={domain.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleDomain(domain.id)}
                className={`p-6 rounded-xl cursor-pointer transition-colors ${
                  domain.selected
                    ? "bg-white text-black"
                    : "bg-neutral-900 hover:bg-neutral-800"
                }`}
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{domain.name}</h3>
                <p className="text-sm opacity-80">{domain.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-neutral-400 mb-4">
              {selectedCount} domain{selectedCount !== 1 ? "s" : ""} selected
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinue}
              disabled={selectedCount === 0}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                selectedCount > 0
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
              }`}
            >
              Continue
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 