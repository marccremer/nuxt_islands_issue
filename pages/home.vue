<template>
  <main>
    <button @click="reload = !reload">click me</button>
    <ServerShow :reload="reload"></ServerShow>
  </main>
</template>

<script setup lang="ts">
const reload = ref(false);
</script>

<style scoped></style>
