"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useOnboardingStore } from "@/lib/store"

interface PersonalInfo {
  name: string
  age: string
  location: string
  timezone: string
  language: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export function PersonalInfoForm() {
  const router = useRouter()
  const setPersonalInfo = useOnboardingStore((state) => state.setPersonalInfo)
  const [formData, setFormData] = useState<PersonalInfo>({
    name: "",
    age: "",
    location: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: "en"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPersonalInfo(formData)
    router.push("/onboarding/domains")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-md w-full"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
        >
          Tell us about yourself
        </motion.h1>
        
        <motion.form 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
              Full Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="age" className="block text-sm font-medium text-neutral-300 mb-2">
              Age
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="13"
              max="120"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="location" className="block text-sm font-medium text-neutral-300 mb-2">
              Location (Optional)
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="timezone" className="block text-sm font-medium text-neutral-300 mb-2">
              Time Zone
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="language" className="block text-sm font-medium text-neutral-300 mb-2">
              Preferred Language
            </label>
            <motion.select
              whileFocus={{ scale: 1.01 }}
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </motion.select>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all duration-200"
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
} 