<template>
  <div class="input-group input-group-lg">
    <ais-search-box
        placeholder="Поиск..."
        :class-names="{
        'ais-SearchBox': 'w-100',
        'ais-SearchBox-form': 'w-100',
        'ais-SearchBox-input': 'bg-white form-control border-1 p-3',
        // ...
      }"
    >
      <template v-slot="{ currentRefinement, isSearchStalled, refine }">
        <div class="w-full">
          <input class="bg-white rounded-px-1 form-control p-3" placeholder="Поиск по названию и производителю..." type="search" :value="currentRefinement" @input="refine($event.currentTarget.value)" />
          <span :hidden="!isSearchStalled">Загрузка...</span>
        </div>
      </template>
    </ais-search-box>
    <!-- <input type="text" class="bg-white form-control border-1" placeholder="Search" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" /> -->
  </div>
</template>
<script>
import {AisSearchBox} from 'vue-instantsearch'

export default {
  data: function () {
    return {};
  },
  components: {
    AisSearchBox
  }
};
</script>
<style scoped>
input {
  border-radius: 15px !important;
}
</style>
