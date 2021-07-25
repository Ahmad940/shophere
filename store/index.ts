import MetaModule from './modules/meta'
import CategoryModule from "~/store/modules/category";

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
  },
}
