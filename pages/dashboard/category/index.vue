<template>
  <v-container>
    <p>Category Page</p>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

  @Component({
    name: 'category',
    head: { title: "Category" },
    layout: 'dashboard'
  })
    export default class extends Vue{

  }
</script>

<style scoped>

</style>
