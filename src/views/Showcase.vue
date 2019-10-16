<template>
  <div class="showcase-view">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <div class="showcase">
      <div v-for="product in products" v-bind:key="product.id" class="showcase__product">
        <router-link
          v-bind:to="{ name: 'product', params: { id: product.id, product: product }}"
          class="link showcase__product-link"
        >
          <img class="showcase__product-image" v-bind:src="`${publicPath}data/products/${product.id}/${product.cover}`" v-bind:alt="product.name">
          <div class="showcase__product-name">
            {{product.name}}
          </div>
          <div class="showcase__product-price">
            {{getProductFormattedPrice(product)}} &#8381;
          </div>
        </router-link>
        <v-button
          v-if="hasProductInCart(product)"
          v-on:click="removeProductFromCart(product)"
          class="showcase__product-cart-button button--bezel-less"
        >
          <svg-icon src="icomoon.svg#icon-remove-from-cart" class="svg-icon--size_m button__icon" />
        </v-button>
        <v-button
          v-else
          v-on:click="addProductToCart(product)"
          class="showcase__product-cart-button button--bezel-less"
        >
          <svg-icon src="icomoon.svg#icon-add-to-cart" class="svg-icon--size_m button__icon" />
        </v-button>
      </div>
      <div v-if="!hasProducts" class="showcase__product showcase__product--no-products">
        Ни один товар еще не был опубликован
      </div>
    </div>
  </div>
</template>

<script>
import { getRandomInt, isEmptyObject } from '@/utils/utils';
import store from '@/store/store';
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';

const getRandomProducts = function getProduct(count) {
  store.commit('showLoader');

  return store.dispatch('showcase/getRandomProducts', count).catch((error) => {
    store.commit('showError', error);
  }).finally(() => {
    store.commit('hideLoader');
  });
};

export default {
  name: 'home',
  components: {
    SvgIcon,
    VButton
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      products: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    const randomProductsCount = getRandomInt(1, 10);

    getRandomProducts(randomProductsCount).then((randomProducts) => {
      // Initialize component's 'products' data property and continue transition.
      next((vm) => { vm.products = randomProducts; });
    }).catch((error) => {
      // Abort transition.
      next(false);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$options.beforeRouteEnter(to, from, next);
  },
  computed: {
    hasProducts() {
      return !isEmptyObject(this.products);
    }
  },
  methods: {
    addProductToCart(product) {
      return this.$store.dispatch('cart/addProduct', product).catch((error) => {
        this.$store.commit('showError', error);
      });
    },
    removeProductFromCart(product) {
      return this.$store.dispatch('cart/removeProduct', product).catch((error) => {
        this.$store.commit('showError', error);
      });
    },
    hasProductInCart(product) {
      return this.$store.getters['cart/hasProduct'](product);
    },
    getProductFormattedPrice(product) {
      return this.$store.getters['showcase/productFormattedPrice'](product);
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/showcase/variables';

@import '@/styles/blocks/showcase/showcase';
@import '@/styles/blocks/showcase/showcase__product';
</style>
