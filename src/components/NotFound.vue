<template>
  <div class="not-found">
    <img class="not-found__image" src="@/assets/images/blocks/not-found/not-found.png">
    <div class="not-found__message">
      <slot>
        К сожалению, запрашиваемая страница не найдена
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped lang="scss">
@import '@/styles/blocks/not-found/variables';

@import '@/styles/blocks/not-found/not-found';
</style>
