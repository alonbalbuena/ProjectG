<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
</script>

<template>
  <div>
    <div class="flex flex-column gap-2">
      <label for="username">Username</label>
      <InputText id="username" v-model="value" aria-describedby="username-help" />
      <small id="username-help">Enter your username to reset your password.</small>
    </div>
    <Button label="Login" link />
    <Button label="Sign In" />
  </div>
</template>
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
