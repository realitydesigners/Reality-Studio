"use client"

import { ReviewScreen } from "@/components/onboarding/ReviewScreen"
import { useOnboardingStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ReviewPage() {
  const router = useRouter()
  const { personalInfo, selectedDomains, domainDetails } = useOnboardingStore()

  useEffect(() => {
    if (!personalInfo || selectedDomains.length === 0) {
      router.push("/onboarding")
    }
  }, [personalInfo, selectedDomains, router])

  if (!personalInfo || selectedDomains.length === 0) {
    return null
  }

  const domains = selectedDomains.map(domainId => ({
    id: domainId,
    name: domainId.charAt(0).toUpperCase() + domainId.slice(1),
    ...domainDetails[domainId]
  }))

  return <ReviewScreen personalInfo={personalInfo} domains={domains} />
} 