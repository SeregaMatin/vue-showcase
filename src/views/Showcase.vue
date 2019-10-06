<template>
  <div class="showcase-view">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <ul class="showcase" v-if="showcaseProducts">
      <li v-for="product in showcaseProducts" v-bind:key="product.id" style="padding: 20px 0;">
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
    <div v-if="showcaseProducts">
      Количество товаров: {{showcaseProducts.length}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VButton from '@/components/VButton.vue';

export default {
  name: 'home',
  components: {
    VButton
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: mapState({
    showcaseProducts: state => state.showcase.products
  }),
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.commit('showLoader');

      return this.$store.dispatch('showcase/getProducts').catch((error) => {
        this.$store.commit('showError', error);
      }).finally(() => {
        this.$store.commit('hideLoader');
      });
    },
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
      const productInCartQuantity = this.$store.state.cart.items[product.id];
      return productInCartQuantity > 0;
    }
  }
};
</script>
