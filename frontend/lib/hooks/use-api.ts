import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

// Example API hooks - customize based on your needs

// Example: Fetch user data
export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/user")
      if (!response.ok) throw new Error("Failed to fetch user")
      return response.json()
    },
  })
}

// Example: Create checkout session
export function useCreateCheckout() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/checkout", {
        method: "POST",
      })
      if (!response.ok) throw new Error("Failed to create checkout")
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
    },
  })
}

