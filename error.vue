<template>
  <div class="mt-7 max-w-sm mx-auto text-center card px-10">
    <img v-if="is404" src="./assets/img/404-error.png" alt="404" class="my-10">
    <img v-else src="./assets/img/dizzy-robot.png" alt="404" class="my-10">

    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handleClearError">View Other Products</button>
  </div>
</template>

<script setup>
const { error } = defineProps(['error']);
const is404 = error.statusCode === 404;

const handleClearError = () => clearError({
  redirect: '/products',
});
</script>

<style scoped></style>
