<template>
  <div v-if="hasProduct" class="view view__product">
    <h1 class="typography typography--headline1">
      {{product.name}}
    </h1>
    <div class="product">
      <div class="product__images-list">
        <div
          v-for="productImage in product.images"
          v-bind:key="productImage"
          v-on:click="productActiveImage = productImage"
          class="product__images-list-item"
          v-bind:class="{ 'product__images-list-item--active': productActiveImage === productImage }"
        >
          <img
            v-bind:src="getProductImagePath(product, productImage)"
            v-bind:alt="`${product.name} - ${productImage}`"
            class="product__images-list-item-img"
          >
        </div>
      </div>
      <div class="product__active-image">
        <transition name="fade">
          <img
            v-bind:key="productActiveImage"
            v-bind:src="getProductImagePath(product, productActiveImage)"
            v-bind:alt="`${product.name} - ${productActiveImage}`"
            class="product__active-image-img"
          >
        </transition>
      </div>
      <div class="product__summary">
        <div class="product__purchasing">
          <div class="product__purchasing-price">
            {{getProductFormattedPrice(product)}} &#8381;
          </div>
          <v-button
            v-if="hasProductInCart(product)"
            v-on:click="removeProductFromCart(product)"
            class="product__purchasing-cart-button button--secondary"
          >
            <svg-icon src="icomoon.svg#icon-remove-from-cart" class="svg-icon--size_m button__icon button__icon--left-aligned" />
            Убрать из корзины
          </v-button>
          <v-button
            v-else
            v-on:click="addProductToCart(product)"
            class="product__purchasing-cart-button button--secondary"
          >
            <svg-icon src="icomoon.svg#icon-add-to-cart" class="svg-icon--size_m button__icon button__icon--left-aligned" />
            Добавить в корзину
          </v-button>
        </div>
        <div class="product__description">
          <div class="product__description-header">
            Описание
          </div>
          {{product.description}}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="view view__product">
    <not-found>
      К сожалению, страница запрашиваемого товара не найдена
    </not-found>
  </div>
</template>

<script>
import { formatPrice, isEmptyObject } from '@/utils/utils';
import store from '@/store/store';
import NotFound from '@/components/NotFound.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';

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
  components: {
    NotFound,
    SvgIcon,
    VButton
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      product: null,
      productActiveImage: null
    };
  },
  computed: {
    hasProduct() {
      if (!this.product) {
        return false;
      }

      return !isEmptyObject(this.product);
    }
  },
  beforeRouteEnter(to, from, next) {
    getProduct(to.params).then((product) => {
      // Initialize component's 'product' data property and continue transition.
      next((vm) => {
        vm.product = product;

        vm.productActiveImage = Array.isArray(product.images) && product.images.length > 0
          ? product.images[0]
          : null;
      });
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
    },
    getProductImagePath(product, productImage) {
      return this.$store.getters['showcase/productImagePath'](product, productImage);
    },
    getProductFormattedPrice(product) {
      return formatPrice(product.price);
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/typography/variables';
@import '@/styles/blocks/product/variables';

@import '@/styles/blocks/product/product';

@import '@/styles/transitions/fade';
</style>
