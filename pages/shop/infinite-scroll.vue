<template>
  <main class="main skeleton-body">
    <pv-shop-banner></pv-shop-banner>
    <div class="container-fluid">
      <ais-instant-search
          :search-client="searchClient"
          :index-name="indexName"
          :routing="routing">
        <ais-configure :hits-per-page.camel="12"/>
        <div class="row">
          <div class="col-lg-3">
            <aside class="search-panel">
              <div class="sidebar-wrapper sidebar-shop">
                <div class="widget p-3 widget-product-categories">
                  <h4 class="widget-title">Бренд</h4>
                  <ais-refinement-list
                      show-more
                      :show-more-limit="500"
                      searchable
                      attribute="brand_name"
                  />
                </div>
                <div class="widget p-3">
                  <h4>Название</h4>
                  <ais-refinement-list attribute="name"/>
                </div>
                <div class="widget-block p-5 border">
                  <div class="searchbox mt-5">
                    <ais-search-box placeholder=""/>
                  </div>

                  <div class="row my-4 mt-5">
                    <div class="col">
                      <ais-stats/>
                    </div>
                    <div class="col text-right">
                      <div>
                        <ais-hits-per-page
                            :items="[
                        { label: '12 hits per page', value: 12, default: true },
                        { label: '24 hits per page', value: 24 },
                        { label: '48 hits per page', value: 48 },
                        { label: '96 hits per page', value: 96 }
                      ]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div class="col-lg-9">
            <ais-hits>
              <template slot="item" slot-scope="{ item }">
                <article>
                  <a :href="`/catalog/${item.id}`">
                    <img
                        class="product-thumbnail"
                        :src="`//files.world.ms/${item.thumbs[0]}`"
                    />
                  </a>
                  <h1>
                    <ais-highlight
                        :hit="item"
                        attribute="price"
                        class="hit-name"
                    />
                  </h1>
                  <div class="hit-authors">
                    <client-only>
                        <span
                            v-for="(fieldValue, index) in item['sizes']"
                            :key="`highlight-${fieldValue}-${index}`"
                        >
                          <ais-highlight
                              :hit="item"
                              :attribute="`authors.${index}`"
                          /><template v-if="index < item['sizes'].length - 1"
                        >,
                          </template>
                        </span>
                    </client-only>
                  </div>
                  <div class="hit-publication-year">
                    {{ item["name"] }}
                  </div>
                  <div class="hit-rating">{{ item["price"] }}/5</div>
                </article>
              </template>
            </ais-hits>
          </div>
          <div class="mb-4">
            <ais-pagination/>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </main>
</template>

<script>
// https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/vue/
import {history as historyRouter} from "instantsearch.js/es/lib/routers";
import {singleIndex as singleIndexMapping} from "instantsearch.js/es/lib/stateMappings";

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import 'instantsearch.css/themes/algolia-min.css'

import {
  AisAutocomplete,
  AisConfigure,
  AisCurrentRefinements,
  AisHighlight,
  AisHits,
  AisHitsPerPage,
  AisIndex,
  AisInstantSearch,
  AisInstantSearchSsr,
  AisPagination,
  AisPoweredBy,
  AisRangeInput,
  AisRefinementList,
  AisSearchBox,
  AisSnippet,
  AisStateResults,
  AisStats,
  createServerRootMixin
} from "vue-instantsearch"; // eslint-disable-line import/no-unresolved
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "ADuYFSr0041DvbT2lDUBt99dC8prt6z2ukE8rzAc4WBxKseo", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "typesense.world.ms",
        port: "443",
        protocol: "https"
        // path: "/api/search"
      }
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
    connectionTimeoutSeconds: 1,
    numRetries: 8
  },

  additionalSearchParameters: {
    queryBy: "name,brand_name"
  }
});

const indexName = "products";
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default {
  asyncData() {
    return {};
  },
  data() {
    return {
      searchClient,
      indexName: indexName,
      routing: {
        router: historyRouter(),
        stateMapping: singleIndexMapping(indexName)
      }
    };
  },
  provide() {
  },
  serverPrefetch() {
  },
  beforeMount() {
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
    AisHitsPerPage
  }

};
</script>
<style lang="css">
.ais-InstantSearch {
  grid-template: "sidebar info";
  display: grid !important;
}
</style>
