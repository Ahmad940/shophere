<template>
  <v-app-bar app clipped-left fixed :color="secondaryColor" class="white--text">
    <v-app-bar-nav-icon class="white--text" />
<!--    <v-app-bar-title v-text="appname"></v-app-bar-title>-->
    <v-app-bar-title>{{ appname }}</v-app-bar-title>
    <v-spacer />
    <profilemenu />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import Profilemenu from "~/components/dashboard/profilemenu.vue";
const metaStore = namespace("meta")
const  store = namespace("")

@Component({
  name: 'app_bar',
  components: {Profilemenu},
})
export default class extends Vue {
  @metaStore.State
  public drawer!: boolean

  @metaStore.State
  public primaryColor!: string

  @metaStore.State
  public secondaryColor!: string

  @metaStore.State
  public appname!: string
}
</script>

<style scoped>

</style>
