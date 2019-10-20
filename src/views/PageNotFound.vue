<template>
  <div class="page-not-found-view">
    <h1 class="typography typography--headline1">
      404 - Страница не найдена
    </h1>
    <div class="page-not-found">
      <img class="page-not-found__image" src="@/assets/images/blocks/page-not-found/page-not-found.png">
      <div class="page-not-found__message">
        К сожалению, запрашиваемая страница не найдена
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageNotFound'
};
</script>

<style lang="scss">
@import '@/styles/blocks/page-not-found/variables';

@import '@/styles/blocks/page-not-found/page-not-found';
</style>
