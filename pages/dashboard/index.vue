<template>
  <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="3">
          <v-card elevation="0" :color="primaryColor">
              <v-card-text>
                  <p class="text-left title white--text">Total Users</p>
                  <p class="text-right display-1 white--text">{{ users.length }}</p>
              </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3">
          <v-card elevation="0" :color="primaryColor">
            <v-card-text>
              <p class="text-left title white--text">Total Products</p>
              <p class="text-right display-1 white--text">{{ products.length }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3">
          <v-card elevation="0" :color="primaryColor">
            <v-card-text>
              <p class="text-left title white--text">Total Categories</p>
              <p class="text-right display-1 white--text">{{ categories.length }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3">
        <v-card elevation="0" :color="primaryColor">
          <v-card-text>
            <p class="text-left title white--text">Total Assets</p>
            <p class="text-right display-1 white--text">{{ assets.length }}</p>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, namespace, Vue, State} from 'nuxt-property-decorator'
import {Report} from "notiflix";

const meta = namespace('meta')

@Component({
  name: 'dashboard',
  layout: 'dashboard',
  head: {
    title: 'Dashboard',
  },
})
export default class MyStore extends Vue {
  @meta.State
  public drawer!: boolean;

  @meta.State
  public primaryColor!: string;

  mounted() {
  }

  users = []
  products = []
  categories = []
  assets = []

  fetch() {
    this.$nextTick(async () => {
      try {
        this.users = await this.$axios.$get('/users')
        this.products = await this.$axios.$get('/products')
        this.categories = await this.$axios.$get('/categories')
        this.assets = await this.$axios.$get('/assets')
      }
      catch (err) {
        Report.failure('Error', 'Something went wrong', 'ok')
      }
    })
  }
}
</script>

<style scoped>

</style>
