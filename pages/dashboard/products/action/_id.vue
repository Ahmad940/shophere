<template>
  <v-container>
    <v-row>

      <!--   Products from   -->
      <v-col sm="12" md="9" cols="12">
        <v-card class="pa-5">

          <v-card-text>
            <p class="headline">{{ formTitle }}</p>
          </v-card-text>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-col sm="12" md="6" cols="12">
                <v-text-field
                  name="pname"
                  type="text"
                  dense
                  aria-label="product name"
                  v-model="product.name"
                  label="Product Name"
                  :rules="[fieldRequired]"
                  outlined
                  placeholder="Product Name"
                  append-icon='mdi-email'
                  clearable
                />
              </v-col>

              <v-col sm="12" md="6" cols="12">
                <v-combobox
                  name="category"
                  label="Category"
                  v-model="product.category"
                  :value="product.category.name"
                  outlined
                  :rules="[combobox]"
                  dense
                  :items="categories"
                  :loading="categoryLoading"
                >
                  <template v-slot:selection="{ item, parent, selected }">
                <span class="pr-2">
            {{ item.name || null }}
                </span>
                  </template>
                  <template v-slot:item="{ index, item, on, attr }">
                    <v-list-item v-bind="attr" v-on="on">
                      {{ item.name }}
                    </v-list-item>
                  </template>
                </v-combobox>
              </v-col>

              <v-col sm="12" md="6" cols="12">
                <v-text-field
                  name="price"
                  type="number"
                  dense
                  aria-label="product price"
                  v-model.number="product.price"
                  label="Product Price"
                  :rules="[fieldRequired]"
                  outlined
                  placeholder="Product Price"
                  append-icon='mdi-email'
                  clearable
                />
              </v-col>

              <v-col sm="12" md="6" cols="12">
                <v-text-field
                  name="quantity"
                  type="number"
                  dense
                  aria-label="No In Stock"
                  v-model.number="product.noInStock"
                  label="Quantity"
                  :rules="[fieldRequired]"
                  outlined
                  placeholder="Quantity"
                  append-icon='mdi-email'
                  clearable
                />
              </v-col>

              <v-col sm="12">
                <v-textarea
                  label="Description"
                  outlined
                  name="description"
                  dense
                  v-model="product.description"
                  :rules="[fieldRequired]"/>
              </v-col>

            </v-row>

            <v-card-actions>
              <v-spacer/>
              <v-btn :color="secondaryColor" @click="discard" dark>
                Discard
              </v-btn>
              <v-btn :color="primaryColor" @click="save" dark>
                Save
              </v-btn>
            </v-card-actions>

          </v-form>
        </v-card>
      </v-col>
      <!--   Products from   -->

      <!--   Quick actions   -->
      <v-col sm="12" md="3" cols="12">
        <v-card class="">
          <v-card-text>
            Quick actions

            <v-dialog
              v-model="dialogUpdate"
              max-width="500px"
              persistent
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mt-5"
                  :color="primaryColor"
                  small
                  text
                >
                  Add Category
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5 orange white--text">
                  Add category
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-form ref="cForm" lazy-validation class="mt-5">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-text-field
                            v-model="editedCategory.name"
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
                            v-model="editedCategory.description"
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
                    @click="closeCategoryDialog"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="saveCategoryDialog"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
      <!--   End Quick actions   -->

    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, namespace, Watch} from "nuxt-property-decorator";
import rules from "~/mixins/rules";
import {Notify, Report} from "notiflix";
import {omit} from 'lodash'

const meta = namespace('meta')

@Component({
  layout: 'dashboard',
  mixins: [rules]
})
export default class EditProductPage extends Vue {
  productId = this.$route.params.id
  valid = false
  categories = []
  dialogUpdate = false
  categoryLoading = false
  product = {
    name: '',
    description: '',
    price: null,
    noInStock: null,
    productImage: '',
    category: {
      id: '',
      name: '',
      description: '',
    },
  }

  @meta.State
  secondaryColor!: string;

  @meta.State
  primaryColor!: string;

  get formTitle(): string {
    return !this.productId ? "Add Product" : "Edit Product"
  }

  editedCategory = {
    name: '',
    description: '',
  }


  $refs!: {
    form: HTMLFormElement
    cForm: HTMLFormElement
  }

  async discard() {
    this.$router.back()
  }

  async saveCategoryDialog() {
    if (!this.$refs.cForm.validate()) return;

    this.$nextTick(async () => {

      try {
        const category = await this.$axios.post('/categories', this.editedCategory)
        this.editedCategory.name = ''
        this.editedCategory.description = ''
        await this.fetchCategories()
      } catch (err) {
        Report.failure('Error', 'something went wrong', 'ok')
        console.log(err.response)
      }

      this.closeCategoryDialog()
    })


  }

  closeCategoryDialog() {
    this.dialogUpdate = false
  }

  async save() {
    if (!this.$refs.form.validate()) return;


    this.$nextTick(async () => {
      try {
        if (this.productId) {
          const req = await this.$axios.patch(`/products/${this.productId}`, {
            ...this.product, category: this.product.category.id
          })
          Notify.success('Product modified successfully', {
            position: 'right-bottom'
          })
        } else {
          const newProduct = {...this.product, category: this.product.category.id, productImage: 'weeee'}
          const req = await this.$axios.post(`/products`, omit(newProduct, ['id']))
          Notify.success('Product added successfully', {
            position: 'right-bottom'
          })
        }
        this.$router.back()
      } catch (e) {
        Report.failure('Error', 'Something went wrong', 'Ok')
        console.log(this.product)
        console.log("Error", e.response)
      }

    })
  }

  async fetchCategories() {
    try {
      let req = await this.$axios.get("/categories")
      this.categories = req.data
    } catch (e) {
      if (process.client)
        Report.failure('Error', "Something went wrong", "Ok")
      console.log(e.response)
    }
  }

  async fetch() {
    try {
      let req;
      if (this.productId) {
        req = await this.$axios.get(`/products/${this.productId}`)
        this.product = req.data

      }
      // req = await this.$axios.get("/categories")
      // this.categories = req.data
      await this.fetchCategories();
    } catch (e) {
      if (process.client)
        Report.failure('Error', "Something went wrong", "Ok")
      console.log(e.response)
    }
  }
}
</script>

<style scoped>

</style>
