<template>
  <div class="card text-center">
    <img :src="product.image" :alt="product.title" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-gray-800 m-4 truncate">AED{{ product.price.toFixed(2) }}</p>

    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
.thumb {
  margin: 0 auto;
  max-height: 120px;
  max-width: 70%;
}
</style>
