<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>

    <v-card>
<!--      <v-card-title class="text-h5 grey lighten-2">-->
<!--        <v-spacer />-->
<!--        <v-btn small absolute class="d-flex justify-end mb-6">Xaaaa</v-btn>-->
<!--      </v-card-title>-->

      <v-img
        :src="image"
        :lazy-src="`/icon.png`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "view-image-dialog",
  props: {
    image : {
      type: String,
      required: true,
    }
  },
  data: () => ({
    dialog: false,
  }),
})
</script>

<style scoped>

</style>
