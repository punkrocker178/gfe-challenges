<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import AppBtn from '@/components/ui/AppBtn.vue';
import type { Product } from '@/models/Product.model';
import { ref } from 'vue';

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
    isPopularChoice: true,
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

const selectedBillingCycle = ref<'monthly' | 'annually'>('monthly');

function selectCycle(cycle: 'monthly' | 'annually') {
  selectedBillingCycle.value = cycle;
}
</script>

<template>
  <div class="mx-auto text-center mt-16 md:mt-20">
    <div class="text-indigo-700 font-semibold mb-2">Pricing tiers</div>
    <h1 class="text-3xl md:text-5xl font-semibold mt-0 mb-4">Fit for all your needs</h1>
    <p class="text-lg md:text-xl text-neutral-600">Pick the plan that suits you today and step up as your demands grow -
      our
      flexible options have your journey
      mapped out.</p>
  </div>
  <div class="flex flex-row justify-center mt-10">
    <app-btn theme="secondary" :classes="'mr-8 ' + (selectedBillingCycle === 'monthly' ? 'shadow-sm' : '!border-0')"
      @click="selectCycle('monthly')">Monthly</app-btn>
    <app-btn theme="secondary" :classes="selectedBillingCycle === 'annually' ? 'shadow-sm' : '!border-0'"
      @click="selectCycle('annually')">Annually</app-btn>
  </div>
  <div class="flex flex-col lg:flex-row gap-8 mt-8 p-3 md:p-8 justify-center">
    <template v-for="product of products" :key="product.planName">
      <product-card :product="product" :selected-billing-cycle="selectedBillingCycle"></product-card>
    </template>
  </div>
</template>
<style scoped></style>
