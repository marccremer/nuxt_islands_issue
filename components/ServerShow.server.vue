<template>
  <div>
    <p>data is {{ data }} and {{ reload }}</p>
    <div>
      here
      <ClientShow nuxt-client :str="data + reload"></ClientShow>
    </div>
  </div>
</template>

<script setup>
import { readFile } from 'fs/promises';

const props = defineProps({ reload: Boolean });

const file = await readFile('./hey.txt');
const data = file.toString();
</script>

<style lang="scss" scoped></style>
