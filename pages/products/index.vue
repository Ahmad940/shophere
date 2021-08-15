<template>
  <v-row>
    <v-col cols="12" md="2" class="d-none d-md-flex">
      <shop-sidebar/>
    </v-col>
    <v-col cols="12" md="10" sm="12">
      <shop-products :products="products" name="Products"/>
    </v-col>
  </v-row>
</template>

<script>
import {reverse} from "lodash";
import {Report} from "notiflix";

export default {
  name: "index",
  data: () => ({
    products: [],
  }),
  auth: false,
  async fetch() {
    try {
      this.products = reverse(await this.$axios.$get("/products"))
    } catch (e) {
      Report.failure('Error', 'something went wrong', 'Ok')
    }
  }
}
</script>

<style scoped>

</style>
