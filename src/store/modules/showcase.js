import Vue from 'vue';
import db from '@/api/db';
import { arrayToObject, isEmptyObject, getRandomObjectItems } from '@/utils/utils';

export default {
  namespaced: true,
  state: {
    products: {}
  },
  getters: {
    hasProducts(state) {
      return !isEmptyObject(state.products);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      Vue.set(state.products, product.id, product);
    }
  },
  actions: {
    getProducts({ state, commit, getters }) {
      // Don't load products twice.
      if (getters.hasProducts) {
        return state.products;
      }

      return db.getProducts().then((productsArray) => {
        const products = arrayToObject(productsArray, 'id');
        commit('setProducts', products);

        return products;
      });
    },
    getProduct({ state, commit }, productId) {
      // Don't load product twice.
      const cachedProduct = state.products[productId];
      if (cachedProduct) {
        return cachedProduct;
      }

      return db.getProduct(productId).then((product) => {
        commit('setProduct', product);

        return product;
      });
    },
    getRandomProducts({ state, dispatch }, count) {
      return dispatch('getProducts').then(products => getRandomObjectItems(products, count));
    }
  }
};
