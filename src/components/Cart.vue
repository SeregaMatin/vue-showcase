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
            <vue-numeric-input
              class="cart__item-quantity-input"
              align="center"
              v-bind:value="item.quantity"
              v-bind:min="1"
              v-bind:max="1000"
              v-on:input="changeProductQuantityInCart({ product: item.product, newQuantity: $event })"
            >
              <template v-slot:btnDecrement>
                <svg-icon src="icomoon.svg#icon-minus" class="svg-icon--size_s button__icon" />
              </template>
              <template v-slot:btnIncrement>
                <svg-icon src="icomoon.svg#icon-plus" class="svg-icon--size_s button__icon" />
              </template>
            </vue-numeric-input>
          </div>
          <div class="cart__item-price">
            {{getFormattedPrice(item.totalPrice)}} &#8381;
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
        <div class="cart__summary-total">
          <div class="cart__summary-total-caption">
            Позиций
          </div>
          <div class="cart__summary-total-value">
            {{cartItemsTotalCount}}
          </div>
        </div>
        <div class="cart__summary-total">
          <div class="cart__summary-total-caption">
            На сумму
          </div>
          <div class="cart__summary-total-value">
            {{getFormattedPrice(cartItemsTotalPrice)}} &#8381;
          </div>
        </div>
        <v-button
          v-on:click="printCart()"
          class="cart__summary-print-button button--secondary"
        >
          <svg-icon src="icomoon.svg#icon-printer" class="svg-icon--size_m button__icon button__icon--left-aligned" />
          Распечатать
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input';
import { mapState, mapGetters } from 'vuex';
import { formatPrice } from '@/utils/utils';
import NotFound from '@/components/NotFound.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'Cart',
  components: {
    NotFound,
    SvgIcon,
    VButton,
    VueNumericInput
  },
  computed: {
    ...mapState('cart', {
      cartItems: 'items',
      cartItemsTotalCount: 'itemsTotalCount',
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
    changeProductQuantityInCart(options) {
      return this.$store.dispatch('cart/changeProductQuantity', options).catch((error) => {
        this.$store.commit('showError', error);
      });
    },
    getProductImagePath(product, productImage) {
      return this.$store.getters['showcase/productImagePath'](product, productImage);
    },
    getFormattedPrice(price) {
      return formatPrice(price);
    },
    printCart() {
      // Mock print operation while it isn't implemented.
      return new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/cart/variables';

@import '@/styles/blocks/cart/cart';
</style>
