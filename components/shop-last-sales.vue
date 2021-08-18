<template>
  <v-card
    class="mx-auto text-center"
    :color="color"
    dark
  >
<!--    max-width="600"-->
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
        @click="reportHandler"
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {Report} from "notiflix";

export default {
  name: "shop-last-sales",
  props: {
    color: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
    ],
  }),
  methods: {
    reportHandler() {
      Report.success('Coming soon', 'This feature is under experimental development', 'Ok')
    }
  },
}
</script>

<style scoped>

</style>
