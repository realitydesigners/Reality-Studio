"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface ReviewProps {
  personalInfo: {
    name: string
    age: string
    location: string
    timezone: string
    language: string
  }
  domains: {
    id: string
    name: string
    currentStatus: string
    goals: string[]
    timeline: string
    priorities: string[]
  }[]
}

export function ReviewScreen({ personalInfo, domains }: ReviewProps) {
  const router = useRouter()

  const handleComplete = () => {
    // TODO: Save all data to backend
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Review Your Life Blueprint
          </h1>

          <div className="space-y-8">
            {/* Personal Information */}
            <section className="bg-neutral-900 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-400">Name</p>
                  <p className="font-medium">{personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Age</p>
                  <p className="font-medium">{personalInfo.age}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="font-medium">{personalInfo.location || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Time Zone</p>
                  <p className="font-medium">{personalInfo.timezone}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Language</p>
                  <p className="font-medium">{personalInfo.language}</p>
                </div>
              </div>
            </section>

            {/* Life Domains */}
            {domains.map((domain) => (
              <section key={domain.id} className="bg-neutral-900 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">{domain.name}</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-neutral-400">Current Status</p>
                    <p className="font-medium">{domain.currentStatus}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Goals</p>
                    <ul className="list-disc list-inside space-y-1">
                      {domain.goals.map((goal, index) => (
                        <li key={index} className="font-medium">{goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Timeline</p>
                    <p className="font-medium">{domain.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Priorities</p>
                    <ul className="list-disc list-inside space-y-1">
                      {domain.priorities.map((priority, index) => (
                        <li key={index} className="font-medium">{priority}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.back()}
                className="px-8 py-3 bg-neutral-800 text-white rounded-full font-medium hover:bg-neutral-700 transition-colors"
              >
                Edit Information
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleComplete}
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
              >
                Complete Setup
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 