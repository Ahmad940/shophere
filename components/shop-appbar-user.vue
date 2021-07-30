<template>
  <v-app-bar :color="secondaryColor" class="white--text" app>
    <v-app-bar-title>{{ appname }}</v-app-bar-title>
    <v-spacer />
    <v-btn :color="secondaryColor" to="/cart" dark depressed>Cart</v-btn>
    <v-btn :color="secondaryColor" to="/auth/logout" dark depressed>Logout</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'

export default Vue.extend({
  name: "shop-appbar-user",
  computed: {
    ...mapState('modules/meta', ['appname', 'secondaryColor', 'primaryColor'])
  }
})
</script>

<style scoped>

</style>
