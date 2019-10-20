<template>
  <div class="showcase__product">
    <router-link
      v-bind:to="{ name: 'product', params: { id: product.id, product: product }}"
      class="link showcase__product-link"
    >
      <img class="showcase__product-image" v-bind:src="getProductImagePath(product, product.cover)" v-bind:alt="product.name">
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
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'ShowcaseProduct',
  components: {
    SvgIcon,
    VButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
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
    },
    getProductImagePath(product, productImage) {
      return this.$store.getters['showcase/productImagePath'](product, productImage);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/showcase/variables';

@import '@/styles/blocks/showcase/showcase__product';

@import '@/styles/transitions/fade';
</style>
