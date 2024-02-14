<template>
  <div>
    <p>data is {{ data }} and {{ reload }}</p>
    <p>refresh {{ refresh }}</p>
    <div>here</div>
  </div>
</template>

<script setup>
const props = defineProps({ reload: Boolean, refresh: Number });
const { readFile } = await import('fs/promises');
const file = await readFile('./hey.txt');
const data = file.toString();
await new Promise((res) =>
  setTimeout(() => {
    res();
  }, 400)
);
</script>

<style lang="scss" scoped></style>
