<template>
  <v-container fluid>
    <div v-if="$fetchState.pending">
      <v-skeleton-loader loading type="card, article" />
    </div>
    <div v-else>
      <p class="display-1 mb-10">{{ getProductName }}</p>
      <v-row>
        <v-col cols="12" md="3" sm="12">
          <shop-image :image="getImageUrl(product) "/>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <p class="display-1">Price ₦{{ product.price }}</p>
          <p>
            Category:
            <v-btn
              link
              :to="`/categories/${product.category.name}`"
              text>
              {{ product.category.name }}
            </v-btn>
          </p>
          <p>{{ product.description }}</p>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-btn
            block
            :color="secondaryColor"
            dark>
            Add to Cart
          </v-btn>
        </v-col>
      </v-row>

    <shop-products class="mt-10" :products="similar" name="Similar products"/>
    </div>


  </v-container>
</template>

<script>
import {reverse, shuffle, startCase} from "lodash";
import {Report} from "notiflix";
import {mapState} from 'vuex'

export default {
  name: "product_id",
  auth: false,
  data: () => ({
    product: {},
    products: [],
    similar: [],
  }),
  watch: {
    'this.$route.params.id'() {
      console.log("Beeb bob")
    },
  },
  computed: {
    ...mapState('modules/meta', ['appUrl', 'appname', 'secondaryColor', 'primaryColor']),
    getProductName() {
      return startCase(this.product.name)
    },
    openImage() {
      alert("Hello world")
    }
  },
  methods: {
    getImageUrl(item) {
      return `${this.appUrl}/upload/images/${item.productImage}`
    }
  },
  async fetch() {
    this.loading = true
    try {
      this.product = await this.$axios.$get(`/products/${this.$route.params.id}`)
      this.products = reverse(await this.$axios.$get("/products"))
      this.similar = shuffle(this.products).slice(0, 4).filter((p) => p.category.name === this.product.category.name)
    } catch (e) {
      Report.failure('Error', 'something went wrong', 'Ok')
    }
  }
}
</script>

<style scoped>

</style>
