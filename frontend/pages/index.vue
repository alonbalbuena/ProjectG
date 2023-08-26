<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <div class="buttons">
    <Button label="Quick Match" />
    <Button label="Join" link />
    <Button label="Create" link />
  </div>
</template>

<style scoped>
.buttons{
  display: flex;
  flex-direction: column;
  padding: 0 20vw;
}
</style>
