<template>
  <div class="cart">
    <not-found v-if="cartIsEmpty">
      К сожалению, ваша корзина покупок пока пуста
    </not-found>
    <div v-else class="cart__content">
      <div class="cart__items">
        <div v-for="item in cartItems" v-bind:key="item.product.id" class="cart__item">
          <div class="cart__item-image">
            <router-link
              v-bind:to="{ name: 'product', params: { id: item.product.id, product: item.product }}"
              v-on:click.native="hideCart()"
              class="link"
            >
              <img class="cart__item-image-img" v-bind:src="getProductImagePath(item.product, item.product.cover)" v-bind:alt="item.product.name">
            </router-link>
          </div>
          <div class="cart__item-name">
            <router-link
              v-bind:to="{ name: 'product', params: { id: item.product.id, product: item.product }}"
              v-on:click.native="hideCart()"
              class="link link--on-background"
            >
              {{item.product.name}}
            </router-link>
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
            <transition name="fade">
              <div v-if="item.quantity > 1" class="cart__item-price-per-single-unit">
                {{getFormattedPrice(item.product.price)}} &#8381; /шт.
              </div>
            </transition>
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
import html2canvas from 'html2canvas';
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
    hideCart() {
      this.$store.commit('cart/hide');
    },
    printCart() {
      const cartContent = this.$el.getElementsByClassName('cart__content')[0];
      const cartContentRect = cartContent.getBoundingClientRect();

      // We don't need to print whole page, we need only cart content.
      // So we can't call window.print() on a current window.
      // But we can capture cart content, append it to a new window, and the call window.print() on that new window.
      html2canvas(cartContent, {
        windowWidth: cartContentRect.width,
        windowHeight: cartContentRect.height,
        width: cartContent.scrollWidth,
        height: cartContent.scrollHeight,

        // Cart content located inside modal window with fixed position, so we need some scroll to be performed.
        scrollX: (1 - cartContentRect.width / window.innerWidth) * cartContentRect.x,
        scrollY: (1 - cartContentRect.height / window.innerHeight) * cartContentRect.y,

        // Exclude print button from resulting canvas.
        ignoreElements: element => element.classList.contains('cart__summary-print-button'),

        // Handle cloned document before it will be converted into canvas.
        onclone: (clonedDocument) => {
          const clonedCartContent = clonedDocument.getElementsByClassName('cart__content')[0];
          const clonedItemNameElements = clonedCartContent && clonedCartContent.getElementsByClassName('cart__item-name');
          const count = clonedItemNameElements.length;

          let i;
          for (i = 0; i < count; i++) {
            // Html2Canvas can't handle element displayed like '-webkit-box',
            // so we need to change their 'display' property into 'block'
            // to make them visible while printing.
            clonedItemNameElements[i].setAttribute('style', 'display: block;');
          }
        }
      }).then((cartCanvas) => {
        // Finally open resulting canvas in a new window & print it.
        const printWindow = window.open('', 'Print-Window');
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <body onload="window.print()">
            </body>
          </html>`);
        printWindow.document.body.appendChild(cartCanvas);
        printWindow.document.close();

        setTimeout(() => { printWindow.close(); });
      }).catch((error) => {
        this.$store.commit('showError', error);
      });
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/cart/variables';

@import '@/styles/blocks/cart/cart';

@import '@/styles/transitions/fade';
</style>
