import MetaModule from './modules/meta'
import CategoryModule from "~/store/modules/category";
import Carts from "~/store/modules/carts";

const state =() => ({
});

const getters = {
};

const mutations = {
};

const actions = {
};

export default {
  state,
  mutations,
  actions,
  getters,
  modules: {
    meta: MetaModule,
    category: CategoryModule,
    cart: Carts,
  },
}
