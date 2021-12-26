<template>
  <main class="main skeleton-body mt-1">
    <div class="container-fluid">
      <ais-configure :hits-per-page.camel="12"/>
      <div class="row">
        <img src="~/static/images/menu.png" class="fixed-icon position-fixed" alt="menu" @click="isActive = !isActive">
        <div class="col-lg-3 position-sticky menu-z">
          <div class="menu-open" v-if="isActive">
            <InstantClearRefinement/>
            <!-- <br /> -->
            <InstantName/>
            <br/>
            <InstantBrand/>
            <br/>
            <InstantPrice/>
            <br/>
            <InstantDiscount/>
            <br/>
            <InstantSizeRussian/>
            <br/>
            <InstantSizeVendor/>
          </div>
          <br/>
        </div>

        <div class="col-lg-9">
          <div class="d-flex my-3">
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
            <InstantMetaStats class="w-25"/>
          </div>
          <ais-infinite-hits>
            <template v-slot="{ items,refineNext, isLastPage }">
              <article class="w-100 flex-wrap d-flex flex-row">
                <div v-for="item in items" :key="item.objectID" class="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-0">
                  <SlCard class="mx-4 p-0 cursor-pointer" :product="item"></SlCard>
                </div>
              </article>
              <div v-if="!isLastPage">
                <div class="d-flex align-content-center align-items-center">
                  <button class="btn btn-sm btn-light my-4" @click="refineNext">Показать больше результатов</button>
                  <ais-pagination/>
                </div>
              </div>
            </template>
          </ais-infinite-hits>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/vue/
import SlCard from '~/components/sl/card'

import InstantMetaStats from '~/components/Instant/stats'
import InstantSortBy from '~/components/Instant/sortBy'

import InstantClearRefinement from '~/components/Instant/facet/clearRefinement'
import InstantBrand from '~/components/Instant/facet/brand'
import InstantDiscount from '~/components/Instant/facet/discount'
import InstantName from '~/components/Instant/facet/name'
import InstantSizeRussian from '~/components/Instant/facet/sizeRussian'
import InstantSizeVendor from '~/components/Instant/facet/sizeVendor'
import InstantPrice from '~/components/Instant/facet/price'

import {
  AisInstantSearchSsr,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisPagination,
  AisSnippet,
  AisStateResults,
  AisPoweredBy,
  AisSortBy,
  createServerRootMixin,
  AisInstantSearch,
  AisIndex,
  AisConfigure,
  AisAutocomplete,
  AisRangeInput,
  AisCurrentRefinements,
  AisHitsPerPage,
  AisInfiniteHits,
} from 'vue-instantsearch'

export default {
  layout: 'main',
  asyncData() {
    return {};
  },
  data() {
    return {
      isActive: true
    };
  },
  provide() {
  },
  serverPrefetch() {
  },
  mounted(){
    if(window.innerWidth < 980){
      this.isActive = false;
    }

    setInterval(() => {
      if(window.pageYOffset > 180){
        document.querySelector('.fixed-icon').style.top = '80px'
      } else {
        document.querySelector('.fixed-icon').style.top = '170px'
      }
    },500)

    setInterval(() => {
      if(window.innerWidth > 980){
        this.isActive = true;
      }
    }, 2000)
  },
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination,
    AisSnippet,
    AisStateResults,
    AisPoweredBy,
    createServerRootMixin,
    AisInstantSearch,
    AisIndex,
    AisConfigure,
    AisAutocomplete,
    AisRangeInput,
    AisCurrentRefinements,
    AisHitsPerPage,
    SlCard,
    AisSortBy,
    AisInfiniteHits,
    InstantBrand,
    InstantClearRefinement,
    InstantDiscount,
    InstantName,
    InstantPrice,
    InstantSizeRussian,
    InstantSizeVendor,
    InstantMetaStats,
    InstantSortBy
  }
};

</script>
<style lang="css" scoped>
.ais-InstantSearch {
  grid-template: "sidebar info";
  display: grid ;
}

.fixed-icon {
  width: 50px !important;
  z-index: 3;
  right: 15px;
  top: 70px;
  display: none;
}

@media screen and (max-width: 978px){
  .fixed-icon {
    display: block;
    transition: top .2s linear;
  }

  .menu-open {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    background: white;
  }

  .menu-z {
    z-index: 2;
  }
}
</style>
