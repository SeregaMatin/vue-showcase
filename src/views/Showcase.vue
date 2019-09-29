<template>
  <div class="showcase">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <ul v-if="products">
      <li v-for="product in products" v-bind:key="product.id">
        {{product.name}}: ${{product.price}}
        <img v-bind:src="`${publicPath}data/products/${product.id}/${product.cover}`" style="max-width: 200px;">
      </li>
    </ul>
    <div v-if="products">
      Количестов товаров: {{products.length}}
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
    products: state => state.showcase.products
  }),
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.commit('showLoader');

      this.$store.dispatch('showcase/getProducts').catch((error) => {
        this.$store.commit('showError', error.message || `${error}`);
      }).finally(() => {
        this.$store.commit('hideLoader');
      });
    }
  }
};
</script>
