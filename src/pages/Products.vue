<script setup lang="ts">
import { VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/components';
interface Product {
  planName: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  sellingPoints: string[];
}

const products: Product[] = [
  {
    planName: 'Basic Plan',
    description: 'Access to a curated selection of abstract images',
    monthlyPrice: 10,
    annualPrice: 100,
    sellingPoints: [
      'Standard quality images',
      'Limited to personal use',
      'Email support',
    ],
  },
  {
    planName: 'Standard Plan',
    description: 'Next-level Integrations, priced economically',
    monthlyPrice: 30,
    annualPrice: 300,
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
    monthlyPrice: 100,
    annualPrice: 1000,
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
  <div>
    <h1>Welcome to the Products Page</h1>
  </div>

  <div class="flex flex-col md:flex-row gap-8">
    <template v-for="product of products" :key="product.planName">
      <v-card>
        <v-card-title>{{ product.planName }}</v-card-title>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-card-actions>
          <span>Monthly: ${{ product.monthlyPrice }}</span>
          <span>Annual: ${{ product.annualPrice }}</span>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>
