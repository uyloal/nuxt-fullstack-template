export default defineNuxtRouteMiddleware(async (to, from) => {
	const { data: loggedIn } = await useUserSession()
	if (!loggedIn.value) {
		return navigateTo('/auth/login')
	}
})
