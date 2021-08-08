const state = () => ({
  carts: [],
  loading: false

})

const getters = {
  CARTS: state => state.carts,
  LOADING: state => state.carts,
};

const mutations = {
  SET_CARTS(state, payload) {
    state.carts = payload
  },
  ADD_ITEM(state, payload) {
    state.carts.push(payload)
  },
  REMOVE_ITEM(state, payload) {
    state.carts.filter(s => s.id !== payload)
  },
};

const actions = {
  async fetchCarts(ctx) {
    const carts = await this.$axios.$get('/carts')
    ctx.commit('SET_CARTS', carts)
  },
  async addItemToCart(ctx, payload) {
    const cart = await this.$axios.$post('/carts', payload)
    ctx.commit('ADD_ITEM', cart)
  },
  async remove_cart(ctx, id) {
    ctx.commit('REMOVE_ITEM', id)
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
