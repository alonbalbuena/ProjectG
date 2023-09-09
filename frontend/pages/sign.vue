<script setup lang="ts">
import InputText from "primevue/inputtext";
import { useAuthStore } from "~/store/auth";
const user = ref({ username: "", password: "" });
const sign = async () => {
  const response = await useAuthStore().createUser(user.value); // call authenticateUser and pass the user object
  if (response.ok) {
    useRouter().push("/login");
  }
};
</script>

<template>
  <span class="p-float-label">
    <InputText
id="username" v-model="user.username"
/>
    <label for="username">Username</label>
  </span>
  <span class="p-float-label">
    <InputText
id="password" v-model="user.password"
/>
    <label for="password">password</label>
  </span>
  <Button label="Sign In"
@click="sign" />
</template>

<style scoped></style>
