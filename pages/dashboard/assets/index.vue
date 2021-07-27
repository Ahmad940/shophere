<template>
  <v-container>
    <p>Images pages </p>
    <v-container id="aa">
      <v-row>
        <v-col
          v-for="image in images"
          class="d-flex child-flex"
          :key="image.id"
          cols="3"
        >
          <v-card>
            <v-img
              :src="getImageUrl(image)"
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

            <v-card-actions>
              <v-spacer />
              <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
              <view-image-dialog :image="getImageUrl(image)" />
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import {Context} from "@nuxt/types";
import {Vue} from "nuxt-property-decorator";
import {mapState} from 'vuex'
import ViewImageDialog from "~/components/view-image-dialog.vue";

// import viewImageDialog from '@/components/view-image-dialog'

export default Vue.extend({
  name: "index",
  components: {ViewImageDialog},
  layout: 'dashboard',
  data: () => ({
    images: [],
    show: false,
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl']),
  },
  methods: {
    getImageUrl(image: any): string {
      return `${this.appUrl}/upload/images/${image.filename}`
    },
  },
  async fetch() {
    try {
      const req = await this.$axios.get("/assets")
      this.images = req.data
    } catch (err) {
      console.log("Error occurred", err.response)
    }
  }

})
</script>

<style scoped>

</style>
