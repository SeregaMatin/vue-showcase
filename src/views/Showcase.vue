<template>
  <div class="showcase">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <ul v-if="showcaseProducts">
      <li v-for="product in showcaseProducts" v-bind:key="product.id">
        {{product.name}}: ${{product.price}}
        <img v-bind:src="`${publicPath}data/products/${product.id}/${product.cover}`" style="max-width: 200px;">
        <a class="button button--secondary" role="button" v-on:click="addProductToCart(product)">
          Добавить в корзину
        </a>
      </li>
    </ul>
    <div v-if="showcaseProducts">
      Количество товаров: {{showcaseProducts.length}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
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
    }
  }
};
</script>
