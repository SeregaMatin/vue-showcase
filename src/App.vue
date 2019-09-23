<template>
  <div id="app" class="application typography">
    <div class="application__header">
      <div class="application__header-top-bar">
        <a class="button application__header-button" href="https://github.com/SeregaMatin/vue-showcase">
          <svg class="icon icon icon--size_m button__icon button__icon--left-aligned">
            <use xlink:href="./assets/icons/icomoon.svg#icon-github"></use>
          </svg>
          Страница проекта на GitHub
        </a>
        <a class="button application__header-button application__header-cart-button" role="button">
          Корзина покупок
          <svg class="icon icon--size_m button__icon button__icon--right-aligned">
            <use xlink:href="./assets/icons/icomoon.svg#icon-cart"></use>
          </svg>
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
            <svg class="icon icon--size_m link__icon link__icon--left-aligned">
              <use xlink:href="./assets/icons/icomoon.svg#icon-github"></use>
            </svg>
            github.com/SeregaMatin
          </a>
          <a class="link link--on-surface" href="https://vk.com/seregamatin">
            <svg class="icon icon--size_m link__icon link__icon--left-aligned">
              <use xlink:href="./assets/icons/icomoon.svg#icon-vk"></use>
            </svg>
            vk.com/seregamatin
          </a>
        </div>
        <div class="application__footer-contacts">
          <a class="link link--on-surface typography typography--body1" href="mailto:seregamatin@gmail.com">
            <svg class="icon icon--size_m link__icon link__icon--left-aligned">
              <use xlink:href="./assets/icons/icomoon.svg#icon-mail"></use>
            </svg>
            seregamatin@gmail.com
          </a>
          <a class="link link--on-surface" href="https://api.whatsapp.com/send?phone=79124923206">
            <svg class="icon icon--size_m link__icon link__icon--left-aligned">
              <use xlink:href="./assets/icons/icomoon.svg#icon-whatsapp"></use>
            </svg>
            +7(912)492-32-06
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/variables';
@import './styles/blocks/body/variables';
@import './styles/blocks/button/variables';
@import './styles/blocks/icon/variables';
@import './styles/blocks/link/variables';
@import './styles/blocks/logo/variables';
@import './styles/blocks/navigation/variables';
@import './styles/blocks/application/variables';
@import './styles/blocks/typography/variables';

@import './styles/blocks/body/body';
@import './styles/blocks/button/button';
@import './styles/blocks/button/button__icon';
@import './styles/blocks/button/button--primary';
@import './styles/blocks/button/button--secondary';
@import './styles/blocks/button/button--outlined';
@import './styles/blocks/icon/icon';
@import './styles/blocks/link/link';
@import './styles/blocks/link/link__icon';
@import './styles/blocks/logo/logo';
@import './styles/blocks/navigation/navigation';
@import './styles/blocks/application/application';
@import './styles/blocks/application/application__header';
@import './styles/blocks/application/application__content';
@import './styles/blocks/application/application__footer';
@import './styles/blocks/typography/typography__roboto-font';
@import './styles/blocks/typography/typography';
</style>
