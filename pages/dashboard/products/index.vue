<template>
  <v-container>
    <v-data-table
      :headers="productsHeader"
      :items="products"
      :search="search"
      class="elevation-1"
      :loading="$fetchState.pending"
    >

      <!--      Top template -->
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Products</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer/>
          <!--          <v-btn class="mr-2" icon><v-icon>mdi-plus</v-icon></v-btn>-->
          <v-row justify="end">
            <v-col sm="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                class="mr-5"
                label="Search"
                single-line
                dense
                clearable
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-dialog v-model="dialogDelete" max-width="500px" persistent>
            <v-card>
              <v-card-title class="text-h5 orange white--text">
                Delete category
              </v-card-title>

              <v-card-text class="mt-5">
                Are you sure you want to delete this product ?
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDeleteDialog">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!--      end Top template -->

      <!--      Images-->
      <template v-slot:item.productImage="{ item }">
        Under development
      </template>
      <!--  End of images    -->

      <!--      category -->
      <template v-slot:item.category="{ item }">
        {{ item.category.name }}
      </template>
      <!--  End of category    -->

      <!--  Actions   -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="edit(item.id)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteBtn(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, namespace} from "nuxt-property-decorator";
import {Report} from "notiflix";

const meta = namespace('meta')

@Component({
  layout: 'dashboard'
})
export default class Products extends Vue {
  search: string = ''
  dialogDelete = false;
  productsHeader = [
    {text: 'Image', value: 'productImage'},
    {text: 'Name', value: 'name'},
    {text: 'Quantity', value: 'noInStock'},
    {text: 'price', value: 'price'},
    {text: 'Category', value: 'category'},
    {text: 'Actions', value: 'actions'},
  ]
  deletedId = ''
  products = []

  @meta.State
  secondaryColor!: string;

  @meta.State
  primaryColor!: string;

  edit(id: string) {
    this.$router.push(`products/action/${id}`)
  }

  deleteBtn(id: string) {
    this.deletedId = id
    this.dialogDelete = true
  }

  closeDeleteDialog() {
    this.deletedId = ''
    this.dialogDelete = false
  }

  deleteItemConfirm() {
    this.$nextTick(async () => {
      try {
        await this.$axios.delete(`products/${this.deletedId}`)

        this.products = this.products.filter((p: any) => p.id !== this.deletedId)
      } catch (err) {
        Report.failure('Error', 'Something went wrong, ', 'Ok')
        console.log(err.response)
      }
      this.closeDeleteDialog()
    })
  }

  async fetch() {
    try {
      const req = await this.$axios.get("/products")
      this.products = req.data
    } catch (err) {
      if (process.client) Report.failure("error", 'Something went wrong', 'ok')
    }
  }

}
</script>

<style scoped>

</style>
