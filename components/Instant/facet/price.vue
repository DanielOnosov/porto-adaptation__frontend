<template>
  <div class="bg-light p-4">
    <ais-range-input attribute="price">
      <template
          v-slot="{
        currentRefinement,
        range,
        canRefine,
        refine,
        sendEvent,
      }"
      >
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
    formatMinValue(minValue, minRange) {
      return minValue !== null && minValue !== minRange ? minValue : '';
    },
    formatMaxValue(maxValue, maxRange) {
      return maxValue !== null && maxValue !== maxRange ? maxValue : '';
    },
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
