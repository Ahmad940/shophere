import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

let $axios: NuxtAxiosInstance;

@Module({
  name: 'category',
  stateFactory: true,
  namespaced: true,
})
export default class CategoryModule extends VuexModule {
  categories?: Array<object>
  loading?: boolean

  @Mutation
  UPDATE_CATEGORY(payload: object) {
    this.categories?.push(payload)
  }

  @Action
  async fetchCategories() {
    this.loading = true
    try {
      const req = await $axios.get("/categories")
      this.categories = req.data
      this.loading = false
    } catch (err) {
      console.log("Something happened ", err.response.message)
      this.loading = false
    }
  }

}
