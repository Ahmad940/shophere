<template>

  <v-app dark>

  <!-- Navigation drawer   -->
  <v-navigation-drawer permanent fixed app>

    <v-list>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Shop Here
        </v-list-item-title>
        <v-list-item-subtitle>
          Dashboard
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        @click="logout"
        class="red"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-exit</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!--  End of drawer  -->

  <v-main>
    <v-container>
      <nuxt />
    </v-container>
  </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "dashboard",
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: 'dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Products',
          to: 'products'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hospital',
          to: '/app/hospitals'
        }
      ],
      miniVariant: false,
      title: 'Student Management'
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>

</style>
