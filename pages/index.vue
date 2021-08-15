<template>
  <v-container fluid class="ma-0 pa-0">
    <shop-parallax/>
    <v-row>
      <v-col cols="12" md="2" class="d-none d-md-flex mt-2">
        <shop-sidebar/>
      </v-col>
      <v-col cols="12" md="10" sm="12" class="pa-0 my-0 mt-5">
        <shop-home-products-list/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'dashboard',
  created() {
    // console.log("User", )
  },
  components: {},
  auth: false
})
</script>
