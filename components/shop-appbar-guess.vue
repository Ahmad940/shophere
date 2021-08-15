<template>
  <v-app-bar :color="secondaryColor" class="white--text" app>
    <nuxt-link to="/" class="text-decoration-none white--text">
      <v-app-bar-title>{{ appname }}</v-app-bar-title>
    </nuxt-link>
    <v-spacer />
    <v-btn :color="secondaryColor" to="/products" dark depressed>Shop</v-btn>
    <v-btn :color="secondaryColor" to="/auth/login" dark depressed>Login</v-btn>
    <v-btn :color="secondaryColor" to="/auth/signup" dark depressed>Register</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'

export default Vue.extend({
  name: "shop-appbar-guess",
  computed: {
    ...mapState('modules/meta', ['appname', 'secondaryColor', 'primaryColor'])
  }
})
</script>

<style scoped>

</style>
