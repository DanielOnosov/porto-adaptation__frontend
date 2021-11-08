<template>
    <pv-carousel
        class="brands-slider images-center appear-animate"
        data-animation-name="fadeIn"
        data-animation-duration="500"
        v-animate
        :options="brandSlider"
    >
        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand1.png'" width="130" height="56" alt="brand" />
        </div>

        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand2.png'" width="130" height="56" alt="brand" />
        </div>

        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand3.png'" width="130" height="56" alt="brand" />
        </div>

        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand4.png'" width="130" height="56" alt="brand" />
        </div>

        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand5.png'" width="130" height="56" alt="brand" />
        </div>

        <div class="swiper-slide">
            <img v-lazy="'./images/brands/brand6.png'" width="130" height="56" alt="brand" />
        </div>
    </pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { brandSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			brandSlider: brandSlider
		}
	}
}
</script>