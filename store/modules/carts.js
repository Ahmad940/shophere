const state = {
  carts: [], loading: false

}

const getters = {
  CARTS: state => state.carts,
  LOADING: state => state.carts,
};

const mutations = {
  SET_CARTS(state, payload) {
    state.carts = payload
  },
};

const actions = {
  async fetchCarts(ctx, payload) {
    const cart = await this.$axios.$get('/carts')
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
