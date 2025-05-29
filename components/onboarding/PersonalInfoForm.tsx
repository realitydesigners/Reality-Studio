"use client"

import { motion } from "framer-motion"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Tell us about yourself
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-neutral-300 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="13"
              max="120"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-neutral-300 mb-2">
              Location (Optional)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-neutral-300 mb-2">
              Time Zone
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-neutral-300 mb-2">
              Preferred Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            Continue
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
} 