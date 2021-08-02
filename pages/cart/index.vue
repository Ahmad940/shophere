<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" sm="12">
        Total
      </v-col>
      <v-col cols="12" md="2" sm="12">
        Total
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from 'vuex'

export default Vue.extend({
  name: "Cart",
  head: {
    title: "Cart",
  },
  computed: {
    ...mapState('modules/meta', ['appUrl', 'appname', 'secondaryColor', 'primaryColor']),
    ...mapState('modules/carts.js', ['carts']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image}`
    },
  },
  data: () => ({
    cart_table_header: [
      {text: 'Image', value: 'productImage'},
      {text: 'Name', value: 'name'},
      {text: 'Quantity', value: 'noInStock'},
      {text: 'price', value: 'price'},
      {text: 'Category', value: 'category'},
      {text: 'Actions', value: 'actions'},
    ],
    cart_items: []
  }),
  async fetch(){

  }
});
</script>

<style scoped></style>
