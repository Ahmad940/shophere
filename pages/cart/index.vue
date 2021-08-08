<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" sm="12">
        <v-data-table
          :headers="cart_table_header"
          :items="CARTS"
          :items-per-page="5"
          class="elevation-1"
        >
          <!--      Images-->
          <template v-slot:item.productImage="{ item }">
            <div style="width: 80px; height: 80px;" class="pa-1">
              <shop-image :image="getImageUrl(item.product.productImage)"/>
            </div>
          </template>
          <!--  End of images    -->

          <!--      category -->
<!--          <template v-slot:item.category="{ item }">-->
<!--            {{ item.product.category.name }}-->
<!--          </template>-->
          <!--  End of category    -->
        </v-data-table>
      </v-col>
      <v-col cols="12" md="2" sm="12">
        Total
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState, mapGetters, mapActions} from 'vuex'

export default Vue.extend({
  name: "Cart",
  head: {
    title: "Cart",
  },
  computed: {
    ...mapState('modules/meta', ['appUrl', 'appname', 'secondaryColor', 'primaryColor']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image}`
    },
    async deleteCartItem() {
      this.$nextTick(() => {
        try {

        } catch (err) {

        }
        this.closeDeleteDialogs()
      })
    },
    ...mapActions('modules/carts', ['fetchCarts', 'addItemToCart', 'remove_cart']),
    closeDeleteDialogs() {
      this.deleteDialog = !this.deleteDialog
    }
  },
  data: () => ({
    cart_table_header: [
      {text: 'Image', value: 'productImage'},
      {text: 'Name', value: 'product.name'},
      {text: 'Quantity', value: 'product.noInStock'},
      {text: 'price', value: 'product.price'},
      {text: 'Category', value: 'quantity'},
      {text: 'Actions', value: 'actions'},
    ],
    deleteDialog: false,
  }),
  async fetch() {
    await this.fetchCarts()
  }
});
</script>

<style scoped></style>
