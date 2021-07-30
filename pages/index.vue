<template>
    <v-container fluid>
      <shop-parallax/>
      <v-row>
        <v-col cols="3" class="d-none d-md-flex">
          <shop-sidebar />
        </v-col>
        <v-col cols="9">
          <shop-products/>
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
