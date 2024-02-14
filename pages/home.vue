<template>
  <main>
    <NuxtLoadingIndicator></NuxtLoadingIndicator>
    <button @click="reload = !reload">click me</button>
    <button @click="() => refresh++">refresh</button>
    <ServerShow :refresh="refresh" :reload="reload"></ServerShow>
  </main>
</template>

<script setup lang="ts">
const reload = ref(false);
const loading = ref(false);
const refresh = ref(0);
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
});
useIslandLoading(() => finish());

watch([reload, refresh], (a, b) => {
  start();
  loading.value = true;
});
</script>

<style scoped></style>
