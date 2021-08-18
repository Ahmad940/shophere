<template>
  <v-row>
    <v-col cols="12" md="2" class="d-none d-md-flex">
      <shop-sidebar/>
    </v-col>
    <v-col cols="12" md="10" sm="12">
      <shop-products :products="products" :name="getCategoryName" />
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import {reverse, upperFirst} from "lodash";
import {Report} from "notiflix";

export default {
  name: "category_name",
  auth: false,
  data: () => ({
    products: [],
  }),
  computed: {
    getCategoryName() {
      return upperFirst(this.$route.params.name)
    },
  },
  async fetch() {
    try {
      this.products = reverse(await this.$axios.$get("/products"))
      this.products = this.products.filter((p) => p.category.name === this.$route.params.name)
    } catch (e) {
      Report.failure('Error', 'something went wrong', 'Ok')
    }
  }
}
</script>

<style scoped>

</style>
