<template>
  <a
    v-bind:class="['button', { 'button--loading': isLoading }]"
    v-bind:href="href"
    v-bind:role="href ? 'link' : 'button'"
    v-on="listeners"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    href: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: this.onClick
      };
    }
  },
  methods: {
    onClick(event) {
      const clickHandler = this.$listeners.click;
      if (typeof clickHandler !== 'function') {
        return;
      }

      const clickResult = clickHandler(event);
      if (!clickResult || typeof clickResult.finally !== 'function') {
        return;
      }

      // Show loader if click event result is a promise.
      this.isLoading = true;
      clickResult.finally(() => {
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/blocks/typography/variables';
@import '@/styles/blocks/button/variables';

@import '@/styles/mixins/loader';

@import '@/styles/blocks/button/button';
@import '@/styles/blocks/button/button__icon';
@import '@/styles/blocks/button/button--primary';
@import '@/styles/blocks/button/button--secondary';
@import '@/styles/blocks/button/button--outlined';
@import '@/styles/blocks/button/button--disabled';
@import '@/styles/blocks/button/button--loading';
</style>
