<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  classes?: string;
  theme?: 'primary' | 'secondary' | 'outline';
}

const props = defineProps<ButtonProps>();

const buttonClasses = computed(() => {
  const baseClasses = 'app-btn';
  const themeClasses = {
    primary: 'bg-indigo-600 text-white app-btn__primary',
    secondary: 'bg-white !border-neutral-200 app-btn__secondary',
    outline: 'border-2 border-indigo-600 text-indigo-600 app-btn__outline'
  };
  return [props.classes, baseClasses, themeClasses[props.theme ?? 'primary']];
});
</script>
<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.app-btn {
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  border: 2px solid;
  box-sizing: border-box;
}

.app-btn.app-btn__secondary {
  border: 1px solid;
}

.app-btn:hover {
  background-color: #3730A3;
}

.app-btn.app-btn__secondary:hover {
  background-color: #FAFAFA;
}

.app-btn:focus {
  border-color: #b1b9f3;
}

.app-btn[disabled],
.app-btn.disabled {
  background-color: #E6E6E6;
  color: #525252;
  cursor: not-allowed;
  border-color: #E6E6E6;
}
</style>