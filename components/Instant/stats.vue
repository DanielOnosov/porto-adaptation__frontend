<template>
  <div class="col">
    <ais-stats>
      <template v-slot="{ /*hitsPerPage, nbPages, page, query, */ nbHits, processingTimeMS }">
        <!-- Страница: {{ page + 1 }} из {{ nbPages }} <br /> -->
        <!-- с {{ hitsPerPage }} записями на странице <br /> -->
        <span class="h6">Найдено записей: <strong>{{ nbHits }}</strong> <br /></span>
        <span class="h6">Время ответа сервера: <strong>{{ processingTimeMS }}ms</strong></span>
        <!-- for <q>{{ query }}</q> -->
      </template>
    </ais-stats>
  </div>
</template>

<script>
import {AisStats} from 'vue-instantsearch'
  export default {
    components: {
      AisStats
    }
  }
</script>
