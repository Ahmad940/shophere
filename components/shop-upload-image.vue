<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="dialog"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        v-on="on">Add Image
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card
        :loading="loading">
        <v-toolbar
          :color="color"
          dark
        >Upload image
        </v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-file-input
              :rules="[uploadFileVal, fieldRequired]"
              show-size
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an image"
              prepend-icon="mdi-camera"
              label="Image"
              v-model="image"
              :loading="loading"
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="close"
          >Close
          </v-btn>
          <v-btn
            text
            @click="upload"
          >
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import rules from "~/mixins/rules";

export default Vue.extend({
  name: "shop-upload-image",
  data: () => ({
    image: null,
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
  methods: {
    close() {
      this.image = null
      this.loading = false
      this.dialog = !this.dialog
    },
    upload() {
      if (!(this.$refs.form as HTMLFormElement).validate()) return;

      this.loading = true
      this.$nextTick(() => {
        const formData = new FormData();
        formData.append('image', this.image!)

        this.$axios.$post('/assets/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }).then((data) => {
          this.$emit('upload', data)

          this.close()
        })
          .catch((response) => {
            console.log("Error", response)

            this.close()
          })
      })
    }
  },
})
</script>

<style scoped>

</style>
