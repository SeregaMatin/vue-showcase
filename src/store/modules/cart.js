import Vue from 'vue';
import db from '@/api/db';

export default {
  namespaced: true,
  state: {
    items: {
    },
    itemsTotalCount: 0,
    itemsTotalPrice: 0
  },
  getters: {
    hasProduct: state => (product) => {
      const item = state.items[product.id];

      return item && item.quantity > 0;
    }
  },
  mutations: {
    addProduct(state, product) {
      const item = { product, quantity: 1 };

      Vue.set(state.items, product.id, item);
      state.itemsTotalCount += 1;
      state.itemsTotalPrice += product.price;
    },
    incrementProductQuantity(state, product) {
      const item = state.items[product.id];

      item.quantity += 1;
      state.itemsTotalCount += 1;
      state.itemsTotalPrice += product.price;
    },
    decrementProductQuantity(state, product) {
      const item = state.items[product.id];

      item.quantity -= 1;
      state.itemsTotalCount -= 1;
      state.itemsTotalPrice -= product.price;
    },
    removeProduct(state, product) {
      const item = state.items[product.id];

      Vue.delete(state.items, product.id);
      state.itemsTotalCount -= item.quantity;
      state.itemsTotalPrice -= item.quantity * product.price;
    }
  },
  actions: {
    addProduct({ commit }, product) {
      return db.addProductToCart(product).then((addedProduct) => {
        commit('addProduct', addedProduct);
      });
    },
    incrementProductQuantity({ commit }, product) {
      return db.incrementProductQuantityInCart(product).then((incrementedProduct) => {
        commit('incrementProductQuantity', incrementedProduct);
      });
    },
    decrementProductQuantity({ commit }, product) {
      return db.decrementProductQuantityInCart(product).then((decrementedProduct) => {
        commit('decrementProductQuantity', decrementedProduct);
      });
    },
    removeProduct({ commit }, product) {
      return db.removeProductFromCart(product).then((removedProduct) => {
        commit('removeProduct', removedProduct);
      });
    }
  }
};
