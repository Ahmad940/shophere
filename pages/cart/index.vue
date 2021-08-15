<template>
  <v-container>
    <v-breadcrumbs
      large
      :items="items"
    />
    <v-row>
      <v-col cols="12" md="9" sm="12">
          <v-data-table
            :headers="cart_table_header"
            :items="CARTS"
            :items-per-page="5"
            mobile-breakpoint="100"
            class="elevation-1"
          >
            <!--      Images-->
            <template v-slot:item.productImage="{ item }">
              <div style="width: 80px; height: 80px;" class="pa-1">
                <shop-image :image="getImageUrl(item.product.productImage)"/>
              </div>
            </template>
            <!--  End of images    -->

            <!--  Actions   -->
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="UPDATE_QUANTITY(item)"
              >
                mdi-plus
              </v-icon>
              <v-icon
                small
                class="mr-2"
                @click="DECREMENT_QUANTITY(item)"
              >
                mdi-minus
              </v-icon>
              <v-icon
                small
                @click="deleteCartItem(item.id)"
              >
                mdi-delete
              </v-icon>
            </template>

            <!--      category -->
            <!--          <template v-slot:item.category="{ item }">-->
            <!--            {{ item.product.category.name }}-->
            <!--          </template>-->
            <!--  End of category    -->
          </v-data-table>
      </v-col>
      <v-col cols="12" md="3 " sm="12">
        <v-card class="">
          <v-card-title class="d-flex justify-center">Total</v-card-title>
          <v-spacer/>
          <v-card-text class="display-2 d-flex justify-center">
            ₦{{ TOTAL }}
          </v-card-text>

          <v-card-actions class="d-flex justify-center">
            <!--            <v-spacer />-->
            <v-btn class="mb-5" dark to="/checkout" :color="secondaryColor">Check out</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import {Report} from "notiflix";

export default {
  name: "Cart",
  head: {
    title: "Cart",
  },
  computed: {
    ...mapState('modules/meta', ['appUrl', 'appname', 'secondaryColor', 'primaryColor']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING', 'TOTAL']),
  },
  methods: {
    ...mapActions('modules/carts', ['fetchCarts', 'addItemToCart', 'remove_cart']),
    ...mapMutations('modules/carts', ['UPDATE_QUANTITY', 'DECREMENT_QUANTITY']),
    updateCartQuantity(item) {
      this.updateQuantity(item)
    },
    getImageUrl(image) {
      return `${this.appUrl}/upload/images/${image}`
    },
    async deleteCartItem(id) {

      this.$nextTick(() => {
        this.remove_cart(id)
        console.log()
      })
    },
  },
  data: () => ({
    cart_table_header: [
      {text: 'Image', value: 'productImage'},
      {text: 'Name', value: 'product.name'},
      {text: 'Quantity', value: 'quantity'},
      {text: 'price (₦)', value: 'product.price'},
      {text: 'Category', value: 'product.category.name'},
      {text: 'Actions', value: 'actions'},
    ],
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
        exact: true,
      },
      {
        text: 'Cart',
        disabled: true,
        href: '/cart',
        exact: true,
      },
    ],
  }),

  async fetch() {
    await this.fetchCarts()
  }
}
</script>

<style scoped></style>
