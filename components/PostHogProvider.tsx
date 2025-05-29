"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Create a simple analytics context
const AnalyticsContext = createContext<{
  track: (event: string, properties?: Record<string, any>) => void
}>({
  track: () => {}
})

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Log initialization attempt
    console.log('Analytics initialization attempted')
    setIsInitialized(true)
  }, [])

  const track = (event: string, properties?: Record<string, any>) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties)
    }
    // TODO: Implement actual analytics tracking when PostHog is ready
  }

  return (
    <AnalyticsContext.Provider value={{ track }}>
      <SuspendedAnalyticsPageView />
      {children}
    </AnalyticsContext.Provider>
  )
}

function AnalyticsPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { track } = useContext(AnalyticsContext)

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      const search = searchParams.toString()
      if (search) {
        url += "?" + search
      }
      track("$pageview", { "$current_url": url })
    }
  }, [pathname, searchParams, track])

  return null
}

function SuspendedAnalyticsPageView() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageView />
    </Suspense>
  )
}

// Export a hook for using analytics
export function useAnalytics() {
  return useContext(AnalyticsContext)
}