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
  },
  mutations: {
    addProduct(state, product) {
      Vue.set(state.items, product.id, 1);
      state.itemsTotalCount += 1;
      state.itemsTotalPrice += product.price;
    },
    incrementProductQuantity(state, product) {
      state.items[product.id] += 1;
      state.itemsTotalCount += 1;
      state.itemsTotalPrice += product.price;
    },
    decrementProductQuantity(state, product) {
      state.items[product.id] -= 1;
      state.itemsTotalCount -= 1;
      state.itemsTotalPrice -= product.price;
    },
    removeProduct(state, product) {
      const productQuantity = state.items[product.id];

      Vue.delete(state.items, product.id);
      state.itemsTotalCount -= productQuantity;
      state.itemsTotalPrice -= productQuantity * product.price;
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
        commit('incrementProductQuantity', decrementedProduct);
      });
    },
    removeProduct({ commit }, product) {
      return db.removeProductFromCart(product).then((removedProduct) => {
        commit('removeProduct', removedProduct);
      });
    }
  }
};
