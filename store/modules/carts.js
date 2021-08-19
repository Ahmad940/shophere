import {Notify} from "notiflix";

const state = () => ({
  carts: [],
  loading: false

})

const getters = {
  CARTS: state => state.carts,
  LOADING: state => state.carts,
  TOTAL: state => state.carts.reduce(
    (total, currentItem) => total + currentItem.product.price * currentItem.quantity, 0)
};

const mutations = {
  SET_CARTS(state, payload) {
    payload = payload.filter((p) => p.author.id == this.$auth.user.id)
    state.carts = payload
  },
  ADD_ITEM(state, payload) {
    state.carts.push(payload)
  },
  REMOVE_ITEM(state, payload) {
    state.carts = state.carts.filter(s => s.id !== payload)
  },
  async UPDATE_QUANTITY(state, payload) {
    if (payload.product.noInStock > payload.quantity) {
      payload.quantity++
      let cart = await this.$axios.$patch(`/carts/${payload.id}`, {
        ...payload
      })
      const index = state.carts.findIndex((c) => c.id === payload.id)
      state.carts[index] = payload
    } else
      Notify.failure('Quantity cannot exceed number in stock', {
        position: 'right-bottom',
        timeout: 1000,
      })
  },
  async DECREMENT_QUANTITY(state, payload) {
    if (payload.quantity > 1) {
      payload.quantity--
      let cart = await this.$axios.$patch(`/carts/${payload.id}`, {
        ...payload
      })
      const index = state.carts.findIndex((c) => c.id === payload.id)
      state.carts[index] = payload
    }
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
    Notify.success('Item added to cart',{
      position: 'right-bottom',
      timeout: 1000,
    })
  },
  async remove_cart(ctx, id) {
    const cart = await this.$axios.$delete(`/carts/${id}`)
    ctx.commit('REMOVE_ITEM', id)
    Notify.success('Item removed', {
      position: 'right-bottom',
      timeout: 1000,
    })
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
