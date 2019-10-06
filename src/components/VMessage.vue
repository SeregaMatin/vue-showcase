<template>
  <div class="message">
    <slot>
    </slot>
    <svg-icon
      src="icomoon.svg#icon-cross"
      class="svg-icon--size_s message__close-button"
      v-on:click.native="close"
    >
    </svg-icon>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'VMessage',
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
@import '@/styles/blocks/typography/variables';
@import '@/styles/blocks/message/variables';

@import '@/styles/blocks/message/message';
</style>
