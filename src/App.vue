<template>
  <div id="app" class="application typography">
    <div v-if="isLoading" class="loader">
    </div>
    <div class="application__header">
      <div class="application__header-top-bar">
        <a class="button application__header-button" href="https://github.com/SeregaMatin/vue-showcase">
          <svg-icon src="icomoon.svg#icon-github" class="svg-icon--size_m button__icon button__icon--left-aligned">
          </svg-icon>
          Страница проекта на GitHub
        </a>

        <a class="button application__header-button application__header-cart-button" role="button">
          Корзина покупок
          <svg-icon src="icomoon.svg#icon-cart" class="svg-icon--size_m button__icon button__icon--right-aligned">
            <template v-if="cartIsNotEmpty" v-slot:badge>{{cartItemsTotalCount}}</template>
          </svg-icon>
        </a>
      </div>
      <div class="application__header-bottom-bar">
        <router-link to="/" class="logo application__header-logo">
          Демонстрационное приложение
          <br>
          реализованное на Vue.js
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
        <message-card
          v-if="errorOccured"
          class="message-card--error application__header-error-message"
          v-on:close="hideError"
        >
          {{errorMessage}}
        </message-card>
      </transition>
    </div>
    <div class="application__content">
      <div class="application__content-container">
        <router-view/>
      </div>
    </div>
    <div class="application__footer">
      <div class="application__footer-container">
        <router-link to="/" class="logo application__footer-logo">
          Демонстрационное приложение
          <br>
          реализованное на Vue.js
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MessageCard from '@/components/MessageCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'app',
  components: {
    MessageCard,
    SvgIcon
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
      cartItemsTotalCount: state => state.itemsTotalCount
    }),
    cartIsNotEmpty() {
      return this.cartItemsTotalCount > 0;
    }
  },
  methods: {
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
@import '@/styles/blocks/button/variables';
@import '@/styles/blocks/link/variables';
@import '@/styles/blocks/loader/variables';
@import '@/styles/blocks/logo/variables';
@import '@/styles/blocks/navigation/variables';
@import '@/styles/blocks/typography/variables';

@import '@/styles/mixins/loader';

@import '@/styles/blocks/application/application';
@import '@/styles/blocks/application/application__header';
@import '@/styles/blocks/application/application__content';
@import '@/styles/blocks/application/application__footer';
@import '@/styles/blocks/body/body';
@import '@/styles/blocks/button/button';
@import '@/styles/blocks/button/button__icon';
@import '@/styles/blocks/button/button--primary';
@import '@/styles/blocks/button/button--secondary';
@import '@/styles/blocks/button/button--outlined';
@import '@/styles/blocks/button/button--disabled';
@import '@/styles/blocks/button/button--loading';
@import '@/styles/blocks/link/link';
@import '@/styles/blocks/link/link__icon';
@import '@/styles/blocks/loader/loader';
@import '@/styles/blocks/logo/logo';
@import '@/styles/blocks/navigation/navigation';
@import '@/styles/blocks/typography/typography__roboto-font';
@import '@/styles/blocks/typography/typography';

@import '@/styles/transitions/fade';
</style>
