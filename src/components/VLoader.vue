<template>
  <div class="loader">
  </div>
</template>

<script>
// See @/styles/blocks/body.scss.
const overflowHiddenClass = 'body--overflow_hidden';

export default {
  name: 'VLoader',
  mounted() {
    // Disable scrolling on document's body when loader is shown.
    if (!document.body.classList.contains(overflowHiddenClass)) {
      document.body.classList.add(overflowHiddenClass);
    }
  },
  destroyed() {
    // Restore scrolling on document's body when loader is hidden.
    if (document.body.classList.contains(overflowHiddenClass)) {
      document.body.classList.remove(overflowHiddenClass);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/application/variables';
@import '@/styles/blocks/loader/variables';

@import '@/styles/mixins/dimmer';
@import '@/styles/mixins/loader';

@import '@/styles/blocks/loader/loader';
</style>
