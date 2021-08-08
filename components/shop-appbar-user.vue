<template>
  <v-app-bar :color="secondaryColor" class="white--text pr-5" app>
    <v-app-bar-title>{{ appname }}</v-app-bar-title>
    <v-spacer />
    <v-btn to="/profile" dark depressed fab icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn to="/cart" dark depressed fab icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn to="/auth/logout" dark depressed fab icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters, mapState} from 'vuex'

export default Vue.extend({
  name: "shop-appbar-user",
  computed: {
    ...mapState('modules/meta', ['appname', 'secondaryColor', 'primaryColor']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING']),
  }
})
</script>

<style scoped>

</style>
