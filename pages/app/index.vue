<template>

</template>

<script>

export default ({
  name: "index",
  middleware: [
    ({redirect}) => {
    redirect("/app/dashboard")
  }]
})
</script>

<style scoped>

</style>
