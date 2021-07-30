<template>
  <v-app dark>
    <v-main>

      <shop-appbar-user v-if="$auth.loggedIn"/>
      <shop-appbar-guess v-else/>

      <v-container fluid>
        <shop-parallax/>

        <v-container fluid>
          <v-row>
            <v-col cols="3" class="d-none d-md-flex">
              <shop-sidebar />
            </v-col>
            <v-col cols="9">a</v-col>
          </v-row>
        </v-container>

        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'Student Management'
    }
  }
}
</script>
