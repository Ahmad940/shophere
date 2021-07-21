<template>
  <v-container>
    Dashboard

    <p>aaa {{ drawer }}</p>
  </v-container>
</template>

<script lang="ts">
import {Component, namespace, Vue, State} from 'nuxt-property-decorator'

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

  mounted() {
    console.log("Beeb bob")
    console.log(this.drawer)
  }
}
</script>

<style scoped>

</style>
