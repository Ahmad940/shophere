<template>
  <v-container fluid>
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
        <v-hover v-slot="{ hover }">
          <v-card
            width="100vw"
            elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              :src="getImageUrl(product.productImage)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <div class="" style="position: absolute; right: 0; bottom: 15px">
                <v-btn icon :color="transparent" :class="{ 'show-btns': hover }">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>

                <v-btn icon :color="transparent" :class="{ 'show-btns': hover }">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </div>
              <v-card-title v-text="product.name"></v-card-title>
            </v-img>

            <!--            <v-card-actions class="black">-->
            <!--              <v-spacer></v-spacer>-->


            <!--            </v-card-actions>-->
          </v-card>
        </v-hover>
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
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image}`
    },
  }
})
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
