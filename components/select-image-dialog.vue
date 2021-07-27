<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="dialog"
    scrollable
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        text
        color="blue"
        v-bind="attrs"
        v-on="on">
        Select Image
        <v-icon>mdi-camera</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card
        :loading="loading">
        <v-toolbar
          :color="color"
          dark
        >select image
          <v-spacer/>
          <shop-upload-image @upload="addImage" :color="color"/>
        </v-toolbar>

        <v-card-text>
          <v-row class="mt-1">
            <v-col align="center">
              <p v-if="!images.length" class="mt-16 display-1 grey--text">
                <v-icon large>mdi-camera</v-icon>
                No image to display
              </p>
            </v-col>
            <v-col
              v-for="image in images"
              class="d-flex child-flex"
              :key="image.id"
              cols="3"
            >
              <span class="img-hover" @click="selectImage(image)">
                <shop-image :image="getImageUrl(image)"/>
              </span>

            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="close"
          >Close
          </v-btn>
          <!--          <v-btn-->
          <!--            text-->
          <!--            @click="select"-->
          <!--          >-->
          <!--            Upload-->
          <!--          </v-btn>-->
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import rules from "~/mixins/rules";
import {mapState} from 'vuex'
import {reverse} from "lodash";

import ShopUploadImage from "~/components/shop-upload-image.vue";

export default Vue.extend({
  name: "select-image-dialog",
  components: {ShopUploadImage},
  data: () => ({
    images: [],
    dialog: false,
    loading: false,
  }),
  mixins: [rules],
  props: {
    color: {
      required: true,
      type: String,
    }
  },
  computed: {
    ...mapState('modules/meta', ['appUrl', 'primaryColor', 'secondaryColor']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image.filename}`
    },
    close() {
      this.loading = false
      this.dialog = !this.dialog
    },
    addImage(image: never) {
      // console.log('Beeb bob', image)
      this.images.unshift(image)
    },
    selectImage(data: any) {
      this.$emit('select', data)

      this.close()
    },
  },
  async fetch() {
    try {
      const req = await this.$axios.$get("/assets")
      // this.images = req.data
      this.images = reverse(req)
    } catch (err) {
      console.log("Error occurred", err.response)
    }
  }
})
</script>

<style scoped>
.img-hover {
  cursor: pointer;
}
</style>
