<template>
    <v-container fluid>
      <shop-parallax/>
      <v-row>
        <v-col cols="2" class="d-none d-md-flex">
          <shop-sidebar />
        </v-col>
        <v-col cols="12" md="10" sm="12" lg="10">
          <shop-home-products-list />
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
  components: {
  },
  auth: false
})
</script>
