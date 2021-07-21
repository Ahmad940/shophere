<template>

</template>

<script>
export default {
  name: "logout",
  created() {
    this.$auth.logout();
  }
}
</script>

<style scoped>

</style>
