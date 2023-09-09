import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  //TODO: implement auth
  console.log(to.name);
  if (
    useAuthStore().authenticated === false &&
    to.name !== "login" &&
    to.name !== "sign"
  ) {
    return navigateTo("/login");
  }
});
