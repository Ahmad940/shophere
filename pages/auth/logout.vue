<template>

</template>

<script>
import {Notify} from 'notiflix'

export default {
  name: "logout",
  mounted() {
    Notify.success('Logout successful', {
      timeout: 1000
    });
  },
  created() {
    this.$auth.logout();
  }
}
</script>

<style scoped>

</style>
