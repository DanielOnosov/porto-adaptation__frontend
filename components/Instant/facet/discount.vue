<template>
  <div class="bg-light p-4">
    <h4 class="h4 p-0 m-0 mb-5">Размер скидки (%)</h4>
    <template>
      <ais-range-input attribute="discount">
        <template v-slot="{ currentRefinement, range, refine, canRefine }">
          <vue-slider :min="range.min" :max="range.max" :value="toValue(currentRefinement, range)" :disabled="!canRefine" :lazy="true" :useKeyboard="true" :enableCross="false" tooltip="always" :tooltip-formatter="price_tooltip" :interval="1" :duration="0" @change="refine({ min: $event[0], max: $event[1] })">
            <template v-slot:dot="{ index, value }">
              <div :aria-valuemin="range.min" :aria-valuemax="range.max" :aria-valuenow="value" :data-handle-key="index" class="vue-slider-dot-handle" role="slider" tabindex="0" />
            </template>
            <template v-slot:tooltip="{ value }">
              {{ formatNumber(value) }}
            </template>
          </vue-slider>
        </template>
      </ais-range-input>
    </template>
  </div>
</template>
<script>
import {AisRangeInput} from 'vue-instantsearch'

export default {
  data() {
    return {
      price_tooltip: (v) => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    };
  },
  methods: {
    //formatNumber,
    formatNumber(value) {
      return Number(value).toLocaleString();
    },
    toValue(value, range) {
      return [typeof value.min === "number" ? value.min : range.min, typeof value.max === "number" ? value.max : range.max];
    },
  },
  components: {
    AisRangeInput
  }
};
</script>
