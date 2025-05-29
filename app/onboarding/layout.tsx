"use client"

import { PostHogProvider } from "@/components/PostHogProvider"
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress"

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PostHogProvider>
      <OnboardingProgress />
      <main className="pt-20">
        {children}
      </main>
    </PostHogProvider>
  )
} 