<template>
  <v-container fluid>
     <v-toolbar dense flat :color="primaryColor" dark>
      <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>

    <v-list flat>
<!--      <v-subheader class="text-h6">Categories</v-subheader>-->
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in categories"
          :key="i"
          link
          :to="`/categories/${item.name}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters, mapState} from 'vuex'

export default Vue.extend({
  name: "shop-sidebar",
  data: () => ({
    categories: [],
    selectedItem: 0,
  }),
  computed: {
    ...mapState('modules/meta', ['secondaryColor', 'primaryColor']),
  },
  async fetch() {
    try {
      this.categories = await this.$axios.$get('/categories/')
    } catch (e) {
      console.log(e.response)
    }
  },
})
</script>

<style scoped>

</style>
