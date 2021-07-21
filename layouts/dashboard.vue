<template>

  <v-app dark>

  <!--  App bar  -->
    <appbar />
  <!--  end of app bar  -->

  <!-- Navigation drawer   -->
    <Sidenavbar />
  <!--  End of drawer  -->

  <v-main>
    <v-container>
      <nuxt />
    </v-container>
  </v-main>
  </v-app>
</template>

<script>
import Sidenavbar from "../components/dashboard/sidenavbar";
import Appbar from "../components/dashboard/appbar";

export default {
  components: {Appbar, Sidenavbar},
  data() {
    return {
      title: 'Student Management',
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
