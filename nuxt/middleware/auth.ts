export default defineNuxtRouteMiddleware((to, from) => {
  const currentUser = {};
  if (!currentUser) {
    return navigateTo("/login");
  }
});
