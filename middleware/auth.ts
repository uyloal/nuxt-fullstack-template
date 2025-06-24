export default defineNuxtRouteMiddleware(async () => {
	const { data: loggedIn } = await useUserSession()
	if (!loggedIn.value) {
		return navigateTo('/auth/login')
	}
})
