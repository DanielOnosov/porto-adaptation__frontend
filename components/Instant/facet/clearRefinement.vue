<template>
  <div class="bg-gray-200 justify-items-center">
    <ais-clear-refinements
        :class-names="{
        'ais-ClearRefinements': '',
        'ais-ClearRefinements-button': ' w-100',
        // ...
      }"
    >
      <template v-slot="{ canRefine, refine, createURL /*resetLabel*/ }">
        <a class="btn btn-sm btn-danger m-4 w-auto clear-rifinement-btn" :href="createURL()" @click.prevent="refine" v-if="canRefine"> Очистить фильтр </a>
        <span v-else></span>
      </template>
    </ais-clear-refinements>
  </div>
</template>
<style scoped>
.clear-rifinement-btn {
  width: calc(100% - 36pt) !important;
}
</style>
<script>
import {AisClearRefinements} from 'vue-instantsearch'

export default {
  components: {
    AisClearRefinements
  }
}
</script>
