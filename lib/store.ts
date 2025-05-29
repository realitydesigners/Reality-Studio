import { create } from "zustand"

interface PersonalInfo {
  name: string
  age: string
  location: string
  timezone: string
  language: string
}

interface DomainGoal {
  domainId: string
  currentStatus: string
  goals: string[]
  timeline: string
  priorities: string[]
}

interface OnboardingStore {
  personalInfo: PersonalInfo | null
  selectedDomains: string[]
  domainDetails: Record<string, DomainGoal>
  setPersonalInfo: (info: PersonalInfo) => void
  setSelectedDomains: (domains: string[]) => void
  setDomainDetails: (domainId: string, details: DomainGoal) => void
  reset: () => void
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  personalInfo: null,
  selectedDomains: [],
  domainDetails: {},
  setPersonalInfo: (info) => set({ personalInfo: info }),
  setSelectedDomains: (domains) => set({ selectedDomains: domains }),
  setDomainDetails: (domainId, details) =>
    set((state) => ({
      domainDetails: {
        ...state.domainDetails,
        [domainId]: details,
      },
    })),
  reset: () =>
    set({
      personalInfo: null,
      selectedDomains: [],
      domainDetails: {},
    }),
})) 