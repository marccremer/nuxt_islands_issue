<template>
  <main>
    <button @click="reload = !reload">click me</button>
    <div v-if="loading">
      ...loading
    </div>
    <ServerShow :reload="reload"></ServerShow>
  </main>
</template>

<script setup lang="ts">
const reload = ref(false);
const loading = ref(false)
watch(reload, (a, b) => {
  loading.value = true

})
if (!process.server) {
  document.addEventListener('island:loaded', (e) => {
    console.log(e)
    loading.value = false
  })
}
</script>

<style scoped></style>
