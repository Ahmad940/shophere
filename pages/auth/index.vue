<template>

</template>

<script>
export default {
  name: "index",
  middleware: [({redirect}) => {
      redirect("/auth/login")
    }
  ]
}
</script>

<style scoped>

</style>
