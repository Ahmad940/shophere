<template>
    <v-list-group
      :value="true"
      no-action
      class="white--text"
      :prepend-icon="suffix ? suffix : '' "
    >
      <template v-slot:activator>
        <v-list-item-title>{{ name }}</v-list-item-title>
      </template>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        active-class="active"
        exact
        link
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" color="white"></v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
      </v-list-item>

    </v-list-group>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component({
  name: 'list-group',
})
export default class ListGroup extends Vue {
  @Prop({ required: true, type: Array })
  public items!: string

  @Prop({ required: false, type: String })
  public suffix!: string

  @Prop({ required: false, type: String })
  public name!: string
}
</script>

<style scoped>
</style>
