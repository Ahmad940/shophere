<template>
  <v-container fluid class="pa-0 ma-0">
    <v-toolbar dense dark :color="primaryColor">
      <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-toolbar>
    <v-row dense class="mt-1">
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        md="3"
        lg="3"
        sm="6"
      >
        <!--        <v-hover v-slot="{ hover }">-->
        <v-card
          width="100vw"
        >
          <v-img
            :src="getImageUrl(product.productImage)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <!--              <div class="" style="position: absolute; right: 0; bottom: 15px">-->
            <!--                <v-btn icon :color="transparent" @click="addToCart(product.id)" :class="{ 'show-btns': hover }">-->
            <!--                  <v-icon>mdi-cart</v-icon>-->
            <!--                </v-btn>-->

            <!--                <v-btn icon :color="transparent" :class="{ 'show-btns': hover }">-->
            <!--                  <v-icon>mdi-eye</v-icon>-->
            <!--                </v-btn>-->
            <!--              </div>-->
            <v-card-title v-text="product.name"></v-card-title>
          </v-img>

          <v-card-actions class="grey lighten-1">
            <v-btn
              text
              dark
              class="grey">
              {{ getPrice(product) }}
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon dark @click="addToCart(product.id)">
              <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn icon :to="`/products/${product.id}`" dark>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <!--        </v-hover>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import {Report} from "notiflix";
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "shop-daily-pick",
  props: {
    name: {
      required: true
    },
    products: {
      required: true
    }
  },
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl', 'primaryColor', 'secondaryColor']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING']),
  },
  created() {
    // const id = '6a2df58e-f37a-41dc-9ded-9b5b2e93fc68'
    // let o = this.CARTS.includes((a: any) => a.id === id)
    // console.log("Created", o)
  },
  methods: {
    ...mapActions('modules/carts', ['addItemToCart']),
    getImageUrl(image) {
      return `${this.appUrl}/upload/images/${image}`
    },
    getPrice(product) {
      let a = ""
      // if (product.price.length < 3)
      //   return `comma₦${product.price}`
      // else return `not₦${product.price}`
      // return "₦ " + (Math.round(product.price * 100) / 100).toLocaleString();
      return "₦ " + ((product.price * 100) / 100).toLocaleString();
    },
    async addToCart(id) {
      if (!this.$auth.loggedIn) {
        this.$auth.redirect("login")
        return
      }
      const formData = {
        quantity: 1,
        product: id,
      }
      await this.addItemToCart(formData)
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  /*opacity: 0.6;*/
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
