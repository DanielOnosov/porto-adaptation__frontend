<template>
  <div class="col-1 ms-auto items-end w-auto">
    <client-only>
      <div>
        <!-- <h2>Sort by</h2> -->
        <ais-sort-by
            :items="[
          { value: 'products', label: 'Сначала рекомендуемые' },
          { value: 'products/sort/price:asc', label: 'Сначала дешевые' },
          { value: 'products/sort/price:desc', label: 'Сначала дорогие' },
          { value: 'products/sort/discount:desc', label: 'По размеру скидки' },
          { value: 'products/sort/date_created_timestamp:desc', label: 'Сначала новые' },
          { value: 'products/sort/date_created_timestamp:asc', label: 'Сначала старые' },
        ]"
            :class-names="{
          'ais-SortBy': '',
          'ais-SortBy-select': 'form-select',
        }"
        />
      </div>
    </client-only>
  </div>
</template>
<script>
  import AisSortBy from 'vue-instantsearch'

  export default {
    components: {
      AisSortBy
    }
  }
</script>
