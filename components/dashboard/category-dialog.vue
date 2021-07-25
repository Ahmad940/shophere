<template>

</template>

<script lang="ts">
import {Vue, Component, namespace, Prop} from 'nuxt-property-decorator'

const meta = namespace('meta')

export default class CategoryDialog extends Vue {
  @Prop({required: true, default: {}})
  category = {}

  @Prop
  saveCategory

  @meta.State
  secondaryColor!: string;

  @meta.State
  primaryColor!: string;
}
</script>

<style scoped>

</style>
