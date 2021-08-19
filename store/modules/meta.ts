import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import { Store } from 'vuex'
import * as store from '../index'

@Module({
  name: 'meta',
  stateFactory: true,
  namespaced: true,
})
export default class MetaModule extends VuexModule {
  appname?: string = "Shop Here"
  darkMode?: boolean = false
  // drawer?: boolean = false
  // primaryColor: string = "black"
  primaryColor: string = "#000080"
  appUrl: string = process.env.asset as string || 'http://localhost:5000'
  pay_key: string = process.env.pay_key as string || ''
  secondaryColor: string = "orange"
  navTextColor: string = "white"

}
