<template>
  <div class="showcase-view">
    <h1 class="typography typography--headline1">
      Витрина товаров
    </h1>
    <div v-if="productsCount > 0 && productsCount <= 3" class="showcase">
      <showcase-product v-for="product in products" v-bind:key="product.id" v-bind:product="product" class="showcase__product" />
    </div>
    <carousel
      v-else-if="productsCount > 3"
      v-bind:perPage="3"
      v-bind:navigationEnabled="true"
      v-bind:paginationEnabled="false"
      v-bind:scrollPerPage="false"
      v-bind:loop="false"
      class="showcase showcase--carousel"
    >
      <slide v-for="product in products" v-bind:key="product.id">
        <showcase-product v-bind:product="product" class="showcase__product--slide" />
      </slide>
      <template v-slot:navigationPrevLabel>
        <svg-icon src="icomoon.svg#icon-chevron-left" class="svg-icon--size_m">
        </svg-icon>
      </template>
      <template v-slot:navigationNextLabel>
        <svg-icon src="icomoon.svg#icon-chevron-right" class="svg-icon--size_m">
        </svg-icon>
      </template>
    </carousel>
    <div v-else class="showcase">
      <div class="showcase__product showcase__product--no-products">
        <img class="showcase__product-image" src="@/assets/images/blocks/showcase/no-products.png">
        <div class="showcase__product-name">
          К сожалению, на нашей витрине пока отсутствуют товары
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { getRandomInt } from '@/utils/utils';
import store from '@/store/store';
import ShowcaseProduct from '@/components/ShowcaseProduct.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const getRandomProducts = function getProduct(count) {
  store.commit('showLoader');

  return store.dispatch('showcase/getRandomProducts', count).catch((error) => {
    store.commit('showError', error);
  }).finally(() => {
    store.commit('hideLoader');
  });
};

export default {
  name: 'showcase',
  components: {
    ShowcaseProduct,
    SvgIcon,
    Carousel,
    Slide
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
    productsCount() {
      return Object.keys(this.products).length;
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
