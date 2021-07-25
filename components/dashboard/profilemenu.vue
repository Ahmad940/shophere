<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-list :color="secondaryColor" class="white--text">
        <v-list-item dense v-bind="attrs" v-on="on">

          <v-avatar size="40" class="mr-2">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>

<!--          <v-list-item-title  class="white&#45;&#45;text">Ahmad Muhammad</v-list-item-title>-->
          <v-list-item-title  class="white--text" v-text="fullName"></v-list-item-title>
          <v-list-item-icon>
            <v-icon color="white">mdi-menu-down</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

    </template>
    <v-list flat>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          exact
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import {Vue, Component, namespace} from 'nuxt-property-decorator'

const meta = namespace("meta")
const auth = namespace("auth")
import { upperFirst } from 'lodash'
import UserModel from "~/models/user.model";

@Component({
  name: "profilemenu",
  data: () => ({
    selectedItem: 1,
    items: [
      {
        icon: 'mdi-account',
        title: 'Profile',
        to: '/dashboard/profile',
      },
      {
        icon: 'mdi-cog',
        title: 'Settings',
        to: '/dashboard/profile/settings',
      },
      {
        icon: 'mdi-logout',
        title: 'Sign Out',
        to: '/auth/logout',
      },

    ],
  }),
})
export default class ProfileMenu extends Vue {
  @meta.State
  public primaryColor!: string

  @meta.State
  public secondaryColor!: string

  @auth.State
  public user!: UserModel

  get fullName(): string {
    const { firstName, lastName } = this.user
    return `${upperFirst(firstName)} ${upperFirst(lastName)}`
  }
}

</script>

<style scoped>

</style>
