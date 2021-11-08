<template>
	<section
		class="featured-products-section appear-animate"
		v-animate
	>
		<div class="container">
			<h2 class="section-title heading-border ls-20 border-0">Featured Products</h2>

			<pv-carousel
				class="products-slider custom-products nav-outer show-nav-hover nav-image-center"
				:options="baseSlider9"
				v-if="products.length === 0"
			>
				<div
					v-for="item in [1,2,3,4,5]"
					:key="item"
					class="swiper-slide product-loading-overlay"
				></div>
			</pv-carousel>

			<pv-carousel
				class="products-slider custom-products nav-outer show-nav-hover nav-image-center"
				:options="baseSlider9"
			>
				<pv-product-one
					v-for="(product,index) in products"
					:key="'featured' + index"
					:product="product"
					class="swiper-slide"
				></pv-product-one>
			</pv-carousel>
		</div>
	</section>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductOne from '~/components/features/product/PvProductOne';
import { baseSlider9 } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvProductOne
	},
	props: {
		products: Array
	},
	data: function () {
		return {
			baseSlider9: baseSlider9
		};
	}
};
</script>