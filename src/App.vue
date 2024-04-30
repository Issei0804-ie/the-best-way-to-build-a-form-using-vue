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
import { useDateFormat } from '@vueuse/core'

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  birthDate: string;
  phoneNumber: string;
  age: number;
}

interface MyFormValues {
  name: string;
  email: string;
}


const transformUpperCase = <k extends keyof MyFormValues>(
  key: k,
  value: MyFormValues[k]
): MyFormValues[k] | undefined => {
  if (key === 'name') {
    return value.toUpperCase() as MyFormValues[k];
  }
};

const layer = useForm<MyFormValues>(undefined, transformUpperCase)
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
}
</style>
