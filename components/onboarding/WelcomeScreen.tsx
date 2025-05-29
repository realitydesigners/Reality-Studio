"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function WelcomeScreen() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Welcome to Reality Studio
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8">
          Design your ideal life with our interactive 3D blueprint builder.
          Let's start by mapping out your vision across different life domains.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/onboarding/personal-info")}
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
        >
          Begin Your Journey
        </motion.button>
      </motion.div>
    </div>
  )
} 