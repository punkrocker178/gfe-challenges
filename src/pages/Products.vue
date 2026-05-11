<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import type { Product } from '@/models/Product.model';
import { VCard, VCardTitle, VCardText, VIcon } from 'vuetify/components';

const products: Product[] = [
  {
    planName: 'Basic Plan',
    description: 'Access to a curated selection of abstract images',
    monthlyPrice: 9.99,
    annualPrice: 6.99,
    sellingPoints: [
      'Standard quality images',
      'Limited to personal use',
      'Email support',
    ],
  },
  {
    planName: 'Standard Plan',
    description: 'Next-level Integrations, priced economically',
    monthlyPrice: 19.99,
    annualPrice: 15.99,
    sellingPoints: [
      'Expanded library with more diverse abstract images',
      'High-resolution images available',
      'Suitable for commercial use',
      'Priority email support',
      'Advanced analytics'
    ],
  },
  {
    planName: 'Premium Plan',
    description: 'Experience limitless living for power users',
    monthlyPrice: 29.99,
    annualPrice: 25.99,
    sellingPoints: [
      'Full access to the entire image library, including exclusive content',
      'Highest quality images, including premium collections',
      'Commercial and resale rights',
      'Dedicated customer support line',
      '24/7 support response time',
      'Advanced analytics and insights'
    ],
  },
];
</script>

<template>

  <div class="flex flex-col columns-3 md:flex-row gap-8 p-4 md:p-8 justify-center">
    <template v-for="product of products" :key="product.planName">
      <product-card :product="product"></product-card>
    </template>
  </div>
</template>
<style scoped></style>
