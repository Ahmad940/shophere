<template>
  <v-container fluid>
    <p v-if="$fetchState.pending">Loading</p>
    <div v-else>
      <shop-products name="Recently Added" :products="products.slice(0, 8)"/>
      <shop-products name="Daily Pick" :products="dailyPicks"/>
      <shop-products name="Top Deals" :products="topDeals"/>
      <shop-products name="Popular Brands" :products="popularBrand"/>
      <shop-products name="For you" :products="forYou"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {Report} from "notiflix";
import {mapState} from 'vuex'
import {shuffle, reverse} from 'lodash'

export default Vue.extend({
  name: "shop-home-products-list",
  data: () => ({
    products: [],
    dailyPicks: [],
    topDeals: [],
    popularBrand: [],
    forYou: [],
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl', 'primaryColor', 'secondaryColor']),
  },
  methods: {},
  async fetch() {
    try {
      this.products = reverse(await this.$axios.$get("/products"))
      this.dailyPicks = shuffle(this.products).slice(0, 8)
      this.topDeals = shuffle(this.products).slice(0, 8)
      this.popularBrand = shuffle(this.products).slice(0, 8)
      this.forYou = shuffle(this.products).slice(0, 8)
      // this.products = shuffle(this.products)
      // console.log("products", this.products)
    } catch (err) {
      Report.failure('Error', 'Something went wrong', 'Ok')
    }
  },
})
</script>

<style scoped>

</style>
