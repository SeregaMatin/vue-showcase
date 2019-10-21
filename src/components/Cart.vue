<template>
  <div class="cart">
    <not-found v-if="cartIsEmpty">
      К сожалению, ваша корзина покупок пока пуста
    </not-found>
    <div v-else class="cart__content">
      <div class="cart__items">
        <div v-for="item in cartItems" v-bind:key="item.product.id" class="cart__item">
          <div class="cart__item-image">
            <img class="cart__item-image-img" v-bind:src="getProductImagePath(item.product, item.product.cover)" v-bind:alt="item.product.name">
          </div>
          <div class="cart__item-name">
            {{item.product.name}}
          </div>
          <div class="cart__item-quantity">
            x {{item.quantity}} шт.
          </div>
          <div class="cart__item-price">
            {{item.quantity * item.product.price}} &#8381;
          </div>
          <v-button
            v-on:click="removeProductFromCart(item.product)"
            class="cart__item-remove-button button--bezel-less"
          >
            <svg-icon src="icomoon.svg#icon-trash" class="svg-icon--size_m button__icon" />
          </v-button>
        </div>
      </div>
      <div class="cart__summary">
        <div class="cart__summary-total-price">
          Итого: {{cartItemsTotalPrice}} &#8381;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import NotFound from '@/components/NotFound.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'Cart',
  components: {
    NotFound,
    SvgIcon,
    VButton
  },
  computed: {
    ...mapState('cart', {
      cartItems: 'items',
      cartItemsTotalPrice: 'itemsTotalPrice'
    }),
    ...mapGetters('cart', {
      cartIsEmpty: 'isEmpty'
    })
  },
  methods: {
    removeProductFromCart(product) {
      return this.$store.dispatch('cart/removeProduct', product).catch((error) => {
        this.$store.commit('showError', error);
      });
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
@import '@/styles/blocks/cart/variables';

@import '@/styles/blocks/cart/cart';
</style>
