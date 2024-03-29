<template>
  <div id="app" class="application typography">
    <transition name="fade">
      <v-loader v-if="isLoading" class="application__loader" />
    </transition>
    <transition name="fade">
      <v-modal v-if="cartIsShown" v-on:close="hideCart()" class="application__cart-modal">
        <template v-slot:header>
          Корзина покупок
        </template>
        <cart />
      </v-modal>
    </transition>
    <div class="application__header">
      <div class="application__header-top-bar">
        <v-button class="application__header-button" href="https://github.com/SeregaMatin/vue-showcase">
          <svg-icon src="icomoon.svg#icon-github" class="svg-icon--size_m button__icon button__icon--left-aligned">
          </svg-icon>
          Страница проекта на GitHub
        </v-button>
        <v-button class="application__header-button" v-on:click="showCart()">
          Корзина покупок
          <svg-icon src="icomoon.svg#icon-cart" class="svg-icon--size_m button__icon button__icon--right-aligned">
            <template v-if="!cartIsEmpty" v-slot:badge>
              {{cartItemsTotalCount}}
            </template>
          </svg-icon>
        </v-button>
      </div>
      <div class="application__header-bottom-bar">
        <router-link to="/" class="logo application__header-logo">
          <img class="logo__image" src="@/assets/images/blocks/logo/logo.png" alt="Логотип приложения">
            <div class="logo__caption">
              Демонстрационное приложение
              <br>
              реализованное на Vue.js
            </div>
        </router-link>
        <div class="navigation application__header-navigation">
          <router-link to="/" class="navigation__tab" exact-active-class="navigation__tab--active">
            Витрина товаров
          </router-link>
          <router-link to="/about" class="navigation__tab" exact-active-class="navigation__tab--active">
            О приложении
          </router-link>
        </div>
      </div>
      <transition name="fade">
        <v-message
          v-if="errorOccured"
          class="message--error application__header-error-message"
          v-on:close="hideError"
        >
          {{errorMessage}}
        </v-message>
      </transition>
    </div>
    <div class="application__content">
      <router-view/>
    </div>
    <div class="application__footer">
      <router-link to="/" class="logo application__footer-logo">
        <img class="logo__image" src="@/assets/images/blocks/logo/logo.png" alt="Логотип приложения">
          <div class="logo__caption">
            Демонстрационное приложение
            <br>
            реализованное на Vue.js
          </div>
      </router-link>
      <div class="application__footer-links">
        <a class="link link--on-surface" href="https://github.com/SeregaMatin">
          <svg-icon src="icomoon.svg#icon-github" class="svg-icon--size_m link__icon link__icon--left-aligned">
          </svg-icon>
          github.com/SeregaMatin
        </a>
        <a class="link link--on-surface" href="https://vk.com/seregamatin">
          <svg-icon src="icomoon.svg#icon-vk" class="svg-icon--size_m link__icon link__icon--left-aligned">
          </svg-icon>
          vk.com/seregamatin
        </a>
      </div>
      <div class="application__footer-contacts">
        <a class="link link--on-surface typography typography--body1" href="mailto:seregamatin@gmail.com">
          <svg-icon src="icomoon.svg#icon-mail" class="svg-icon--size_m link__icon link__icon--left-aligned">
          </svg-icon>
          seregamatin@gmail.com
        </a>
        <a class="link link--on-surface" href="https://api.whatsapp.com/send?phone=79124923206">
          <svg-icon src="icomoon.svg#icon-whatsapp" class="svg-icon--size_m link__icon link__icon--left-aligned">
          </svg-icon>
          +7(912)492-32-06
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Cart from '@/components/Cart.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import VButton from '@/components/VButton.vue';
import VLoader from '@/components/VLoader.vue';
import VMessage from '@/components/VMessage.vue';
import VModal from '@/components/VModal.vue';

export default {
  name: 'app',
  components: {
    Cart,
    SvgIcon,
    VButton,
    VLoader,
    VMessage,
    VModal
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),
    ...mapGetters({
      errorOccured: 'errorOccured',
      errorMessage: 'errorMessage'
    }),
    ...mapState('cart', {
      cartIsShown: state => state.isShown,
      cartItemsTotalCount: state => state.itemsTotalCount
    }),
    ...mapGetters('cart', {
      cartIsEmpty: 'isEmpty'
    })
  },
  created() {
    // Cart state restored from localStorage can also contain cart visibility flag.
    // So we hide cart at app start.
    this.hideCart();
  },
  methods: {
    showCart() {
      this.$store.commit('cart/show');
    },
    hideCart() {
      this.$store.commit('cart/hide');
    },
    hideError() {
      this.$store.commit('hideError');
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/application/variables';
@import '@/styles/blocks/body/variables';
@import '@/styles/blocks/link/variables';
@import '@/styles/blocks/loader/variables';
@import '@/styles/blocks/logo/variables';
@import '@/styles/blocks/navigation/variables';
@import '@/styles/blocks/typography/variables';
@import '@/styles/blocks/view/variables';

@import '@/styles/blocks/application/application';
@import '@/styles/blocks/application/application__header';
@import '@/styles/blocks/application/application__content';
@import '@/styles/blocks/application/application__footer';
@import '@/styles/blocks/body/body';
@import '@/styles/blocks/link/link';
@import '@/styles/blocks/link/link__icon';
@import '@/styles/blocks/logo/logo';
@import '@/styles/blocks/navigation/navigation';
@import '@/styles/blocks/typography/typography__roboto-font';
@import '@/styles/blocks/typography/typography';
@import '@/styles/blocks/view/view';

@import '@/styles/transitions/fade';
</style>
