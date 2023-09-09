<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: "kminchelle",
  password: "0lelplR",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>

<template>
  <div>
    <div class="form__user">
      <label for="username">Username</label>
      <InputText
        id="username"
        v-model="user.username"
        aria-describedby="username-help"
      />
      <small id="username-help">Enter your username</small>
      <label for="password">Password</label>
      <InputText
        id="password"
        v-model="user.password"
        aria-describedby="password-help"
      />
      <small id="password-help">Enter your password</small>
    </div>
    <Button label="Login"
link @click="login" />
    <NuxtLink :to="'/sign'">
      <Button label="Sign In" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.form__user {
  display: flex;
  flex-direction: column;
}
</style>
