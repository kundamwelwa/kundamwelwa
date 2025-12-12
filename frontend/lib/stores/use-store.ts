import { create } from "zustand"

interface AppState {
  // Add your global state here
  // Example:
  // user: User | null
  // setUser: (user: User | null) => void
}

export const useStore = create<AppState>((set) => ({
  // Initialize your state here
}))

