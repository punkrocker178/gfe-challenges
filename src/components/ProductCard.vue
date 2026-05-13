<script setup lang="ts">
import { VCard, VCardTitle, VCardText, VIcon } from 'vuetify/components';
import type { Product } from '@/models/Product.model';
import AppBtn from './ui/AppBtn.vue';
import { computed } from 'vue';

const props = defineProps<{
  product: Product;
  selectedBillingCycle: 'monthly' | 'annually';
}>();

const annualyPrice = computed(() => {
  if (props.selectedBillingCycle === 'annually') {
    return Math.ceil(props.product.annualPrice * 12);
  }
  return 0;
});

const popularSectionPositionClasses = '-mx-4 md:-mx-8 -mt-4 md:-mt-8 py-4 px-4 md:px-8 mb-8'
</script>

<template>
  <v-card
    class="product p-4 md:p-8 w-full min-w-75 lg:max-w-85 flex-1 flex flex-col rounded-lg shadow-none border border-gray-300 text-neutral-600"
    :class="[props.product.isPopularChoice ? 'popular-choice' : '']">
    <div v-if="props.product.isPopularChoice" class="popular-text text-indigo-700 font-semibold"
      :class="[popularSectionPositionClasses]">
      Most Popular
    </div>
    <v-card-title class="p-0 font-semibold text-2xl text-neutral-900 mb-2 flex-initial">{{ props.product.planName
    }}</v-card-title>
    <v-card-text class="p-0 flex-initial">{{ props.product.description }}</v-card-text>
    <div class="product__price-container my-8">
      <template v-if="product.isPopularChoice">
        <span class="font-semibold text-5xl text-indigo-700">
          ${{ props.selectedBillingCycle === 'monthly' ? props.product.monthlyPrice : props.product.annualPrice }}
        </span>
        <span class="text-indigo-700">/month</span>
      </template>
      <template v-else>
        <span class="font-semibold text-5xl text-neutral-900">
          ${{ props.selectedBillingCycle === 'monthly' ? props.product.monthlyPrice : props.product.annualPrice }}
        </span>
        <span>/month</span>
      </template>
      <p v-if="props.selectedBillingCycle === 'annually'" class="mb-0">
        Billed annually (${{ annualyPrice }})
      </p>
      <p v-else class="mb-0">Billed monthly</p>
    </div>
    <div class="product__features flex-initial">
      <ul class="flex flex-col gap-5">
        <li v-for="point of props.product.sellingPoints" :key="point">
          <v-icon class="mr-2 text-indigo-600">mdi-check</v-icon>
          <span class="text-base">{{ point }}</span>
        </li>
      </ul>
    </div>
    <div class="flex-1 flex items-end mt-8">
      <app-btn :theme="product.isPopularChoice ? 'primary' : 'secondary'" classes="w-full shadow-sm">Buy now</app-btn>
    </div>
  </v-card>
</template>
<style scoped>
.product__features ul {
  list-style: none;
  padding: 0;
}

.product.popular-choice {
  border-color: #4F46E5;
  box-shadow: 0 0.5rem 1rem #E6E6E6;
}

.popular-text {
  background-color: #EEF2FF;
  text-align: center;
}

.v-icon {
  background-color: #EEF2FF;
  border-radius: 1rem;
}
</style>