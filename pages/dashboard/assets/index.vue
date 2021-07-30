<template>
  <v-container>
    <v-card elevation="0">
      <v-toolbar :color="primaryColor" dark elevation="0">
<!--      <v-toolbar :color="primaryColor" dark elevation="0">-->
        Images
        <v-spacer/>
        <shop-upload-image @upload="addImage" :color="secondaryColor"/>
      </v-toolbar>
      <p v-if="!images.length" class="mt-16 display-1 grey--text text-center">
        <v-icon large>mdi-camera</v-icon>
        No image to display
      </p>
      <v-row class="mt-1">
        <v-col
          v-for="image in images"
          class="d-flex child-flex"
          :key="image.id"
          cols="3"
        >
          <v-card>

            <shop-image :image="getImageUrl(image)"/>

            <v-card-actions>
              <v-spacer/>
              <v-btn icon @click="deleteImage(image)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <view-image-dialog :image="getImageUrl(image)"/>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {Vue} from "nuxt-property-decorator";
import {mapState} from 'vuex'
import ViewImageDialog from "~/components/view-image-dialog.vue";
import Image from "~/components/shop-image.vue";
import ShopImage from "~/components/shop-image.vue";
import ShopUploadImage from "~/components/shop-upload-image.vue";
import {reverse} from "lodash";
import {Confirm, Notify, Report} from "notiflix";

// import viewImageDialog from '@/components/view-image-dialog'

export default Vue.extend({
  name: "index",
  components: {ShopUploadImage, ShopImage, Image, ViewImageDialog},
  layout: 'dashboard',
  data: () => ({
    images: [],
    show: false,
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl', 'primaryColor', 'secondaryColor']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image.filename}`
    },
    addImage(image: never) {
      // console.log('Beeb bob', image)
      this.images.unshift(image)
    },
    deleteImage(image: any) {
      Confirm.show(
        'Delete Image',
        'Are you sure want to delete this image ? \n' +
        ' Note: this action cannot be undo.',
        'Yes',
        'No',
        async () => {
          try {
            await this.$axios.$delete(`/assets/${image.id}`)
            this.images = this.images.filter((i: any) => i.id !== image.id)
            // Report.success('Success', 'Image deleted successfully', 'Ok')
            Notify.success('Image deleted successfully', {
              position: 'right-bottom'
            })
          } catch (err) {
            Report.failure('Error', 'Unable to delete image', 'Ok')
          }
        },
      )
    }
  },
  async fetch() {
    try {
      const req = await this.$axios.get("/assets")
      // this.images = req.data
      this.images = reverse(req.data)
    } catch (err) {
      console.log("Error occurred", err.response)
    }
  }

})
</script>

<style scoped>

</style>
