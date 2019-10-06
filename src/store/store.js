import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Showcase from './modules/showcase';
import Cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Flag: indicates that some long-term operation is in-progress now.
    isLoading: false,

    // Last error occurred.
    error: null
  },
  getters: {
    errorOccured(state) {
      return !!state.error;
    },
    errorMessage(state) {
      const error = state.error || '';

      return error.message || error;
    }
  },
  mutations: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
    showError(state, error) {
      state.error = error;
    },
    hideError(state) {
      state.error = null;
    }
  },
  actions: {
  },
  modules: {
    showcase: Showcase,
    cart: Cart
  },
  plugins: [createPersistedState({
    paths: ['cart']
  })]
});
