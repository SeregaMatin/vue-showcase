import Vue from 'vue';
import db from '@/api/db';

export default {
  namespaced: true,
  state: {
    items: {
    },
    itemsTotalCount: 0,
    itemsTotalPrice: 0,
    isShown: false
  },
  getters: {
    isEmpty(state) {
      return state.itemsTotalCount === 0;
    },
    hasProduct: state => (product) => {
      const item = state.items[product.id];

      return item && item.quantity > 0;
    }
  },
  mutations: {
    show(state) {
      state.isShown = true;
    },
    hide(state) {
      state.isShown = false;
    },
    addProduct(state, product) {
      const item = { product, quantity: 1, totalPrice: product.price };

      Vue.set(state.items, product.id, item);
      state.itemsTotalCount += 1;
      state.itemsTotalPrice += product.price;
    },
    changeProductQuantity(state, { product, newQuantity }) {
      const item = state.items[product.id];
      const quantityDelta = newQuantity - item.quantity;
      const priceDelta = quantityDelta * product.price;

      item.quantity += quantityDelta;
      item.totalPrice += priceDelta;
      state.itemsTotalCount += quantityDelta;
      state.itemsTotalPrice += priceDelta;
    },
    removeProduct(state, product) {
      const item = state.items[product.id];

      Vue.delete(state.items, product.id);
      state.itemsTotalCount -= item.quantity;
      state.itemsTotalPrice -= item.totalPrice;
    }
  },
  actions: {
    addProduct({ commit }, product) {
      return db.addProductToCart(product).then((addedProduct) => {
        commit('addProduct', addedProduct);
      });
    },
    changeProductQuantity({ commit }, options) {
      // TODO: uncomment when debounce related user actions in 'cart' component.
      // return db.changeProductQuantityInCart(product, newQuantity).then((incrementedProduct) => {
      // commit('changeProductQuantity', incrementedProduct, newQuantity);
      // });
      commit('changeProductQuantity', options);
    },
    removeProduct({ commit }, product) {
      return db.removeProductFromCart(product).then((removedProduct) => {
        commit('removeProduct', removedProduct);
      });
    }
  }
};
