<template>
  <div class="product">
    <h1 class="typography typography--headline1">
      {{product.name}}
    </h1>
    {{getProductFormattedPrice(product)}} &#8381;
    <br>
    {{product.description}}
    <br>
    <img
      v-bind:src="`${publicPath}data/products/${product.id}/${product.cover}`"
      v-bind:alt="product.name"
    >
  </div>
</template>

<script>
import store from '@/store/store';

const getProduct = function getProduct({ id: productId, product }) {
  if (product) {
    return Promise.resolve(product);
  }

  store.commit('showLoader');

  return store.dispatch('showcase/getProduct', productId).catch((error) => {
    store.commit('showError', error);
  }).finally(() => {
    store.commit('hideLoader');
  });
};

export default {
  name: 'product',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      product: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    getProduct(to.params).then((product) => {
      // Initialize component's 'product' data property and continue transition.
      next((vm) => { vm.product = product; });
    }).catch((error) => {
      // Abort transition.
      next(false);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$options.beforeRouteEnter(to, from, next);
  },
  methods: {
    getProductFormattedPrice(product) {
      return this.$store.getters['showcase/productFormattedPrice'](product);
    }
  }
};
</script>
