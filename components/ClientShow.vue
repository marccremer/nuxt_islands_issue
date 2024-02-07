<template>
  <div>Client string is {{ str }}</div>
</template>

<script setup lang="ts">
const props = defineProps({ str: String });
</script>

<style scoped></style>
