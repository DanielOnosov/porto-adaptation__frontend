/////   import Vue from 'vue'
/////   import {
/////     AisInstantSearchSsr,
/////     AisIndex,
/////     AisConfigure,
/////     AisRefinementList,
/////     AisHits,
/////     AisHighlight,
/////     AisSearchBox,
/////     AisStats,
/////     AisPagination,
/////     createServerRootMixin
/////   } from "vue-instantsearch";
/////   // import instantsearch from 'instantsearch.js/es';
/////   // import { history } from 'instantsearch.js/es/lib/routers';
/////   // import { simple } from 'instantsearch.js/es/lib/stateMappings';
/////   
/////   // Vue.component('history', history)
/////   // Vue.component('simple', simple)
/////   Vue.use(AisInstantSearchSsr)
/////   Vue.use(AisIndex)
/////   Vue.use(AisConfigure)
/////   Vue.use(AisRefinementList)
/////   Vue.use(AisHits)
/////   Vue.use(AisHighlight)
/////   Vue.use(AisSearchBox)
/////   Vue.use(AisStats)
/////   Vue.use(AisPagination)
/////   Vue.use(createServerRootMixin)
/////     
/////   //Vue.use(instantsearch)
/////   Vue.config.productionTip = false;

import Vue from 'vue'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'

// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)