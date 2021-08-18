<template>
  <v-app-bar :color="secondaryColor" class="white--text pr-5" app>
    <nuxt-link to="/" class="text-decoration-none white--text">
      <v-app-bar-title>{{ appname }}</v-app-bar-title>
    </nuxt-link>
    <v-spacer/>
    <v-btn to="/profile" dark depressed fab icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn v-if="CARTS.length" to="/cart" dark depressed fab icon>
      <v-badge
        :color="primaryColor"
        :content="CARTS.length"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-btn v-else to="/cart" dark depressed fab icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn to="/auth/logout" dark depressed fab icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters, mapState, mapActions} from 'vuex'

export default Vue.extend({
  name: "shop-appbar-user",
  methods: {
    ...mapActions('modules/carts', ['fetchCarts'])
  },
  computed: {
    ...mapState('modules/meta', ['appname', 'secondaryColor', 'primaryColor']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING']),
  },
  created() {
    this.fetchCarts()
  }
})
</script>

<style scoped>

</style>
