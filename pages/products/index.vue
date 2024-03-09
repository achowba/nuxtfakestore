<template>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
  name: 'Products'
});

useHead({
  title: 'Nuxt Fake Store',
});

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

const { data: products } = useFetch(PRODUCTS_URL);
</script>

<style scoped></style>
