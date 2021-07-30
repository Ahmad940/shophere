import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import { Store } from 'vuex'
import * as store from '../index'

@Module({
  name: 'meta',
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store: new Store(store.default)
})
export default class MetaModule extends VuexModule {
  appname?: string = "Shop Here"
  darkMode?: boolean = false
  drawer?: boolean = false
  // primaryColor: string = "black"
  primaryColor: string = "#000080"
  appUrl: string = process.env.asset as string || 'http://localhost:5000'
  secondaryColor: string = "orange"
  navTextColor: string = "white"


  @Mutation
  UPDATE_DRAWER() {
    this.drawer = !this.drawer
  }

}
