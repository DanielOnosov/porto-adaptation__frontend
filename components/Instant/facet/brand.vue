<template>
  <div class="bg-light p-4">
    <ais-refinement-list attribute="brand_name" searchable show-more :show-more-limit="500">
      <template v-slot="{ items, isShowingMore, isFromSearch, canToggleShowMore, refine, createURL, toggleShowMore, searchForItems }">
        <h4 class="h3 font-weight-bolder mb-0">Бренд</h4>
        <input class="my-3 border-1 form-control h-50 w-70 p-1" placeholder="Поиск бренда" @input="searchForItems($event.currentTarget.value)" />
        <div class="sidebarOverflow h-48">
          <ul>
            <li v-if="isFromSearch && !items.length">Нет результатов.</li>
            <li v-for="item in items" :key="item.value">
              <a :href="createURL(item)" class="text-dark my-1 h6" :style="{ fontWeight: item.isRefined ? 'bold' : '' }" @click.prevent="refine(item.value)">
                <ais-highlight attribute="item" class="text-dark my-1 h5 font-weight-normal" :hit="item" />
                ({{ item.count.toLocaleString() }})
              </a>
            </li>
          </ul>
        </div>
        <button class="m-0 btn btn-outline-primary w-100" @click="toggleShowMore" :disabled="!canToggleShowMore">
          {{ !isShowingMore ? "Показать больше" : "Показать меньше" }}
        </button>
      </template>
    </ais-refinement-list>
  </div>
</template>
<script>
import {AisRefinementList, AisHighlight} from 'vue-instantsearch'

export default {
  components: {
    AisRefinementList,
    AisHighlight
  }
}
</script>
