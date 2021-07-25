<template>
  <v-container>
    <v-data-table
      :headers="category_table_header"
      :items="categories"
      :search="search"
      class="elevation-1"
      :loading="$fetchState.pending"
    >

      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Categories</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
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
          <v-dialog
            v-model="dialogUpdate"
            max-width="500px"
            persistent
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :color="secondaryColor"
                dark
                small
                v-bind="attrs"
                v-on="on"
              >
                New Category
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 orange white--text">
                {{ formTitle }}
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" lazy-validation class="mt-5">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                          :rules="[fieldRequired]"
                          dense
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-text-field
                          v-model="editedItem.description"
                          label="Description"
                          dense
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialogUpdate = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px" persistent>
            <v-card>
              <v-card-title class="text-h5 orange white--text">
                Delete category
              </v-card-title>

              <v-card-text class="mt-5">
                Are you sure you want to delete this category ?
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <!--  Actions   -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, Watch, namespace} from "nuxt-property-decorator";
import Category from '@/store/modules/category'
import {Report} from 'notiflix'
import _ from 'lodash'
import rules from "~/mixins/rules";
import CategoryModel from '@/models/category.model'

const meta = namespace('meta')

@Component({
  head: {title: "Category"},
  layout: 'dashboard',
  mixins: [rules]
})
export default class CategoryPage extends Vue {
  category_table_header = [
    {
      text: 'Name',
      value: 'name',
    },
    {text: 'Description', value: 'description'},
    {text: 'Actions', value: 'actions'},
  ]

  search: string = ''
  categories: any = []
  dialogUpdate = false
  dialogDelete = false
  editedIndex = -1
  editedItem: CategoryModel = {
    id: '',
    name: '',
    description: ''
  }
  defaultItem: CategoryModel = {
    id: '',
    name: '',
    description: ''
  }

  $refs!: {
    form: HTMLFormElement
  }

  @meta.State
  secondaryColor!: string;

  @meta.State
  primaryColor!: string;

  @Watch('dialogUpdate')
  watchDialogUpdate(newVal: boolean) {
    newVal || this.closeUpdate()
  }

  @Watch('dialogDelete')
  watchDeleteUpdate(newVal: boolean) {
    newVal || this.closeDelete()
  }

  get formTitle() {
    return this.editedIndex === -1 ? "Add Category" : "Edit Category"
  }

  editItem(category: CategoryModel) {
    this.editedIndex = _.indexOf(this.categories, category)
    this.editedItem = Object.assign({}, category)
    this.dialogUpdate = true
  }

  deleteItem(category: CategoryModel) {
    this.editedIndex = _.indexOf(this.categories, category)
    this.editedItem = Object.assign({}, category)
    this.dialogDelete = true
  }

  deleteItemConfirm() {
    this.dialogDelete = true
    this.$nextTick(async () => {
      try {
        await this.$axios.delete(`/categories/${this.editedItem.id}`)
        this.categories.splice(this.editedIndex, 1)
      } catch (e) {
        console.log(e.response)
      }
    })
    this.dialogDelete = false
  }

  async save() {
    this.$nextTick(async () => {
      if (!this.$refs.form.validate()) return;
      if (this.editedIndex > -1) {
        const category = await this.$axios.patch(`/categories/${this.editedItem.id}`, this.editedItem)
        this.categories[this.editedIndex] = this.editedItem
        // this.categories[this.editedIndex].name = this.editedItem.name
        // this.categories[this.editedIndex].description = this.editedItem.description
      } else {
        delete this.editedItem.id
        const category = (await this.$axios.post('/categories', this.editedItem))
        // this.categories.unshift(category.data)
        await this.$nuxt.refresh()
      }
      this.dialogUpdate = false
    })
  }

  closeUpdate() {
    this.editedIndex = -1
    this.editedItem = this.defaultItem
    this.dialogUpdate = false
  }

  closeDelete() {
    this.editedIndex = -1
    this.editedItem = this.defaultItem
    this.dialogDelete = false
  }

  async fetch() {
    try {
      const req = await this.$axios.get("/categories")
      this.categories = req.data
    } catch (err) {
      if (process.client) Report.failure("error", 'Something went wrong', 'ok')
    }
  }
}
</script>

<style scoped>

</style>
