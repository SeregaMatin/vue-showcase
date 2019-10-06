import Vue from 'vue';
import db from '@/api/db';

const getRandomInt = function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);

  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
};

const getRandomArrayItems = function getRandomArrayItems(array, count) {
  const result = [];
  if (!Array.isArray(array) || count <= 0) {
    return result;
  }

  // Shuffle array and take specified items count.
  // Such implementation with sorting is unefficient for big arrays, but it's fine here for a small chunk of test data.
  return array.sort(() => Math.random() - Math.random()).slice(0, count);
};

export default {
  namespaced: true,
  state: {
    products: null,
    cache: {}
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      Vue.set(state.cache, product.id, product);
    }
  },
  actions: {
    getProducts({ state, commit }) {
      // Don't load products twice.
      if (state.products) {
        return state.products;
      }

      return db.getProducts().then((products) => {
        // Take from 1 to 10 random products.
        const randomProducts = getRandomArrayItems(products, getRandomInt(1, 10));
        commit('setProducts', randomProducts);
      });
    },
    getProduct({ state, commit }, productId) {
      // Don't load product twice.
      const cachedProduct = state.cache[productId];
      if (cachedProduct) {
        return cachedProduct;
      }

      return db.getProduct(productId).then((product) => {
        commit('setProduct', product);

        return product;
      });
    }
  }
};
