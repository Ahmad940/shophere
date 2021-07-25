<template>
  <div>
    <v-navigation-drawer :color="primaryColor" permanent fixed app clipped>

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

        <list-group name='Products' :items="products" suffix="mdi-clipboard-pulse" />

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import {Vue, Component, namespace} from 'nuxt-property-decorator'
import ListGroup from "~/components/list-group.vue";

const meta = namespace("meta")

@Component({
  name: "sidenavbar",
  data: () => ({
    name: "dashboard",
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
    assets: [],
  }),
})
export default class Sidenavbar extends Vue{
  @meta.State
  public appname!: string

  @meta.State
  public primaryColor!: string
}
</script>

<style>

  .active{
    background: orange;
  }
</style>
