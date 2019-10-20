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

export default {
  name: 'VModal',
  components: {
    SvgIcon
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
