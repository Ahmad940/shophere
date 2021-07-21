import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import { Store } from 'vuex'
import * as mystore from '../index'

@Module({
  name: 'meta',
  stateFactory: true,
  namespaced: true,
})
export default class MetaModule extends VuexModule {
  appname?: string = "Shop Here"
  darkMode?: boolean = false
  drawer?: boolean = false
  primaryColor: string = "blue"
  secondaryColor: string = "orange"
  navTextColor: string = "white"

  get draw() {
    return this.drawer
  }

  @Mutation
  UPDATE_DRAWER() {
    this.drawer = !this.drawer
  }

  @Action
  updateDrawer() {
    this.drawer = !this.drawer
  }
}
