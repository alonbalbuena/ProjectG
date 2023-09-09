<template>
  <div class="multiplayer-lobby">
    <Card>
      <h1 class="p-mb-4">Multiplayer Lobby</h1>
      <Listbox v-model="selectedUser" :options="users" option-label="username">
        <template #option="option">
          {{ option.username }}
        </template>
      </Listbox>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Listbox from "primevue/listbox";

const users = [
  { id: 1, username: "User 1" },
  { id: 2, username: "User 2" },
  { id: 3, username: "User 3" },
];
const selectedUser = null;
</script>

<style scoped>
.multiplayer-lobby {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
