<template>
  <v-container fluid>
      <p>{{ $route.params.id }}</p>
  </v-container>
</template>

<script>
export default {
  name: "_id",
  auth: false,
  fetch() {
  }
}
</script>

<style scoped>

</style>
