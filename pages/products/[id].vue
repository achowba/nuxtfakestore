<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="author" :content="'achowba'" />
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});

const { id } = useRoute().params;
const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const PRODUCT_DETAIL_URL = `${PRODUCTS_URL}/${id}`;

const { data: product } = await useFetch(PRODUCT_DETAIL_URL, {
  key: id,
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: `Product with id '${id}' doesn't exist`,
    fatal: true,
  });
}
</script>

<style scoped></style>
