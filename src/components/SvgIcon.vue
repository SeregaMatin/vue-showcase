<template>
  <div class="svg-icon">
    <svg class="svg-icon__icon">
      <use v-bind:xlink:href="require(`@/assets/icons/${font}`) + '#' + icon"></use>
    </svg>
    <div class="svg-icon__badge" v-if="$slots.badge">
      <slot name="badge"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    srcParts() {
      // Cast 'src' to a String type just in case.
      const src = `${this.src}`;
      const [font, icon] = src.split('#');
      if (!font || !icon) {
        throw new Error('Value of "src" attribute doesn\'t satisfy required format: <svg-icon src="font-name.svg#icon-name"></svg-icon>');
      }

      return { font, icon };
    },
    font() {
      return this.srcParts.font;
    },
    icon() {
      return this.srcParts.icon;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/typography/variables';
@import '@/styles/blocks/svg-icon/variables';

@import '@/styles/blocks/svg-icon/svg-icon';
</style>
