// store/auth.ts

import { defineStore } from "pinia";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending } = await useFetch(
        "https://dummyjson.com/auth/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
          },
        },
      );
      this.loading = pending.value;

      if (data.value) {
        const token = useCookie("token");
        token.value = (data?.value as { token: string })?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    async createUser({ username, password }: UserPayloadInterface) {
      return await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
          /* other user data */
        }),
      });
    },
  },
});
