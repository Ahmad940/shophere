<template>

  <v-app dark>

    <!--  App bar  -->
    <v-app-bar app clipped-left :color="secondaryColor" class="white--text">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"/>
      <!--    <v-app-bar-title v-text="appname"></v-app-bar-title>-->
      <v-app-bar-title>{{ appname }}</v-app-bar-title>
      <v-spacer/>
      <profilemenu/>
    </v-app-bar>
    <!--  end of app bar  -->

    <!-- Navigation drawer   -->

    <v-navigation-drawer
      :color="primaryColor"
      v-model="drawer"
      clipped
      app>

      <v-list>
        <v-list-item active-class="orange">
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text">
              {{ appname }}
            </v-list-item-title>
            <v-list-item-subtitle class="white--text">
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
          active-class="active"
          link
          exact
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <list-group name='Products' :items="products" suffix="mdi-clipboard-pulse"/>

      </v-list>
    </v-navigation-drawer>

    <!--  End of drawer  -->

    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import profilemenu from '../components/dashboard/profilemenu'

export default {
  components: {profilemenu},
  data() {
    return {
      title: 'Student Management',
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/dashboard'
        },
        {
          icon: 'mdi-apps',
          title: 'Category',
          to: '/dashboard/category'
        },
        {
          icon: 'mdi-cloud-upload',
          title: 'Assets',
          to: '/dashboard/assets'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Users',
          to: '/dashboard/users'
        },
      ],
      products: [
        {
          icon: 'mdi-plus',
          title: 'Add',
          to: '/dashboard/products/action'
        },
        {
          icon: 'mdi-clipboard-text-outline',
          title: 'View',
          to: '/dashboard/products'
        },
      ],
    }
  },
  computed: {
    ...mapState('modules/meta', ['appname', 'primaryColor', 'secondaryColor'])
  },
  methods: {}
}
</script>

<style scoped>

</style>
