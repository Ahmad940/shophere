<template>
  <div>
<!--    <v-toolbar>-->
<!--      <v-toolbar-title>Categories</v-toolbar-title>-->
<!--    </v-toolbar>-->

    <v-list flat>
      <v-subheader class="text-h6">Categories</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in categories"
          :key="i"
          link
          :to="`/categories/${item.id}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "shop-sidebar",
  data: () => ({
    categories: [],
    selectedItem: 0,
  }),
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
