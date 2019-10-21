<template>
  <div class="modal">
    <div class="modal__window">
      <div class="modal__header">
        <slot name="header">
        </slot>
        <svg-icon
          src="icomoon.svg#icon-cross"
          class="svg-icon--size_s modal__close-button"
          v-on:click.native="close"
        >
        </svg-icon>
      </div>
      <div class="modal__content">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

// See @/styles/blocks/body.scss.
const overflowHiddenClass = 'body--overflow_hidden';

export default {
  name: 'VModal',
  components: {
    SvgIcon
  },
  mounted() {
    // Disable scrolling on document's body when modal dialog is opened.
    if (!document.body.classList.contains(overflowHiddenClass)) {
      document.body.classList.add(overflowHiddenClass);
    }
  },
  destroyed() {
    // Restore scrolling on document's body when modal dialog is closed.
    if (document.body.classList.contains(overflowHiddenClass)) {
      document.body.classList.remove(overflowHiddenClass);
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/application/variables';
@import '@/styles/blocks/modal/variables';

@import '@/styles/mixins/dimmer';

@import '@/styles/blocks/modal/modal';
</style>
