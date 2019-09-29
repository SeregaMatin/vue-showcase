<template>
  <div class="showcase">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <div v-if="loading">
      Загрузка...
    </div>
    <div v-if="error">
      Загрузка завершилась ошибкой: {{error}}
    </div>
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
import axios from 'axios';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      loading: false,
      error: null,
      products: null
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    getRandomInt(min, max) {
      const intMin = Math.ceil(min);
      const intMax = Math.floor(max);

      return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
    },
    getRandomArrayItems(array, count) {
      const result = [];
      if (!Array.isArray(array) || count <= 0) {
        return result;
      }

      // Shuffle array and take specified items count.
      // Such implementation with sorting is unefficient for big arrays, but it's fine here for test data.
      return array.sort(() => Math.random() - Math.random()).slice(0, count);
    },
    loadProducts() {
      this.loading = true;
      this.error = null;
      this.products = null;

      axios.get(`${this.publicPath}data/products.json`).then((response) => {
        // Take from 1 to 10 random products.
        this.products = this.getRandomArrayItems(response.data, this.getRandomInt(1, 10));
      }).catch((error) => {
        this.error = error.message || error;
      }).finally(() => {
        this.loading = false;
      });
    }
  }
};
</script>
