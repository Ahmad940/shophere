<template>
  <v-container fluid>
    <v-toolbar dense dark color="grey">
      <v-toolbar-title>Daily Pick</v-toolbar-title>
    </v-toolbar>
    <v-row dense class="mt-1">
      <v-col
        v-for="product in products"
        :key="product.name"
        cols="3"
      >
        <v-card>
          <v-img
            :src="getImageUrl(product.productImage)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="product.name"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {Report} from "notiflix";
import {mapState} from 'vuex'

export default Vue.extend({
  name: "shop-daily-pick",
  data: () => ({
    products: []
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl', 'primaryColor', 'secondaryColor']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image}`
    },
  },
  async fetch() {
    try {
      this.products = await this.$axios.$get("/products")
      // console.log("products", this.products)
    } catch (err) {
      Report.failure('Error', 'Something went wrong', 'Ok')
    }
  },
})
</script>

<style scoped>

</style>
