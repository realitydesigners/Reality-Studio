"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const steps = [
  { path: "/onboarding", label: "Welcome" },
  { path: "/onboarding/personal-info", label: "Personal Info" },
  { path: "/onboarding/domains", label: "Life Domains" },
  { path: "/onboarding/domain-details", label: "Domain Details" },
  { path: "/onboarding/review", label: "Review" }
]

export function OnboardingProgress() {
  const pathname = usePathname()
  const currentStepIndex = steps.findIndex(step => step.path === pathname)

  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.path} className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  scale: currentStepIndex === index ? 1.1 : 1,
                  backgroundColor: currentStepIndex >= index ? "white" : "rgb(64 64 64)"
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStepIndex >= index ? "text-black" : "text-neutral-400"
                }`}
              >
                {index + 1}
              </motion.div>
              <span className={`ml-2 text-sm ${
                currentStepIndex >= index ? "text-white" : "text-neutral-400"
              }`}>
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  currentStepIndex > index ? "bg-white" : "bg-neutral-700"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 