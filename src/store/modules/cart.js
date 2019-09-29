export default {
  namespaced: true,
  state: {
    items: [1, 2, 3]
  },
  getters: {
    itemsCount(state) {
      return state.items.length;
    }
  },
  mutations: {
  },
  actions: {
  }
};
