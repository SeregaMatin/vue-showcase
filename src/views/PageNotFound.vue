<template>
  <div class="view view__page-not-found">
    <h1 class="typography typography--headline1">
      404 - Страница не найдена
    </h1>
    <not-found>
      К сожалению, запрашиваемая страница не найдена
    </not-found>
  </div>
</template>

<script>
import NotFound from '@/components/NotFound.vue';

export default {
  name: 'pageNotFound',
  components: {
    NotFound
  }
};
</script>
