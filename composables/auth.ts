import { createAuthClient } from "better-auth/vue"
export const useAuthClient = () => createAuthClient({})

export const useUserSession = () => useAuthClient().useSession(useFetch)