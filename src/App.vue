<template>
  <div class="app">
    <input type="text"
           :value="layer.getValue('firstName')"
           @input="(event: Event) => layer.setValue('firstName', (event.target as HTMLInputElement).value)"
    />
    <input type="text"
           :value="layer.getValue('birthDate')"
           @change="(event: Event) => layer.setValue('birthDate', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@/UserRegisterForm/layer'

const layer = useForm()
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
}
</style>
