<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    Home Page
    <div> {{ data }}</div>
  </div>
</template>
