<template>
  <div class="message-card">
    <slot>
    </slot>
    <svg-icon
      src="icomoon.svg#icon-cross"
      class="svg-icon--size_s message-card__close-button"
      v-on:click.native="close"
    >
    </svg-icon>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'MessageCard',
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
@import '@/styles/blocks/message-card/variables';

@import '@/styles/blocks/message-card/message-card';
</style>
