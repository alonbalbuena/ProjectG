<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
</script>

<template>
  <div>
    <div class="form__user">
      <label for="username">Username</label>
      <InputText id="username" v-model="value" aria-describedby="username-help" />
      <small id="username-help">Enter your username</small>
    </div>
    <NuxtLink :to="'/'">
      <Button label="Login" link />
    </NuxtLink>
    <Button label="Sign In" />
  </div>
</template>
<style scoped>
.form__user{
  display:flex;
  flex-direction: column;
}
</style>
