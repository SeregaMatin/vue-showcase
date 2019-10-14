<template>
  <div class="showcase-view">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <ul class="showcase" v-if="products">
      <li v-for="product in products" v-bind:key="product.id" style="padding: 20px 0;">
        <router-link class="showcase__product" v-bind:to="{ name: 'product', params: { id: product.id, product: product }}">
          {{product.name}}: {{product.price}} &#8381;
          <img v-bind:src="`${publicPath}data/products/${product.id}/${product.cover}`" style="max-width: 200px;">
        </router-link>
        <v-button class="button--secondary" v-if="!hasProductInCart(product)" v-on:click="addProductToCart(product)">
          Добавить в корзину
        </v-button>
        <v-button class="button--secondary" v-if="hasProductInCart(product)" v-on:click="removeProductFromCart(product)">
          Убрать из корзины
        </v-button>
      </li>
    </ul>
    <div v-if="products">
      Количество товаров: {{products.length}}
    </div>
  </div>
</template>

<script>
import { getRandomInt } from '@/utils/utils';
import store from '@/store/store';
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
    }
  }
};
</script>
