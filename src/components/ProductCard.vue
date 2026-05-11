<script setup lang="ts">
import { VCard, VCardTitle, VCardText, VIcon } from 'vuetify/components';
import type { Product } from '@/models/Product.model';
const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <v-card
    class="product p-4 md:p-8 min-w-75 max-w-85 flex-1 rounded-lg shadow-none border border-gray-300 text-neutral-600">
    <v-card-title class="p-0 font-semibold text-2xl text-neutral-900 mb-2">{{ props.product.planName }}</v-card-title>
    <v-card-text class="p-0">{{ props.product.description }}</v-card-text>
    <div class="product__price-container my-8">
      <span class="font-semibold text-5xl text-neutral-900">${{ props.product.monthlyPrice }}</span>
      <span>/month</span>
      <p class="mb-0">Billed monthly</p>
    </div>
    <div class="product__features">
      <ul>
        <li v-for="point of props.product.sellingPoints" :key="point">
          <v-icon color="primary" class="mr-2">mdi-check</v-icon>
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </v-card>
</template>
<style scoped>
.product__features ul {
  list-style: none;
  padding: 0;
}
</style>