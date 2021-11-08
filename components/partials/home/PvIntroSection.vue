<template>
	<pv-carousel
		class="home-slider show-nav-hover nav-big mb-2 text-uppercase slide-animate"
		:options="baseSlider1"
		v-animate
	>
		<div class="home-slide home-slide1 banner swiper-slide">
			<img
				class="slide-bg"
				:src="'./images/home/slider/slide-1.jpg'"
				alt="slider image"
				width="800"
				height="500"
				image-ratio="26"
			/>
			<div class="container d-flex align-items-center">
				<div
					class="banner-layer appear-animate"
					data-animation-name="fadeInUpShorter"
				>
					<h4 class="text-transform-none m-b-3">Find the Boundaries. Push Through!</h4>
					<h2 class="text-transform-none mb-0">Summer Sale</h2>
					<h3 class="m-b-3">70% Off</h3>
					<h5 class="d-inline-block mb-0">
						<span>Starting At</span>
						<b class="coupon-sale-text text-white bg-secondary align-middle">
							<sup>$</sup>
							<em class="align-text-top">199</em>
							<sup>99</sup>
						</b>
					</h5>
					<nuxt-link
						to="/shop"
						class="btn btn-dark btn-lg"
					>Shop Now!</nuxt-link>
				</div>
			</div>
		</div>

		<div class="home-slide home-slide2 banner banner-md-vw swiper-slide">
			<img
				class="slide-bg"
				:src="'./images/home/slider/slide-2.jpg'"
				alt="slider image"
				width="800"
				height="500"
				image-ratio="26"
			/>
			<div class="container d-flex align-items-center">
				<div
					class="banner-layer d-flex justify-content-center appear-animate"
					data-animation-name="fadeInUpShorter"
				>
					<div class="mx-auto">
						<h4 class="m-b-1">Extra</h4>
						<h3 class="m-b-2">20% off</h3>
						<h3 class="mb-2 heading-border">Accessories</h3>
						<h2 class="text-transform-none m-b-4">Summer Sale</h2>
						<nuxt-link
							to="/shop"
							class="btn btn-block btn-dark"
						>Shop All Sale</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { baseSlider1 } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			baseSlider1: baseSlider1
		};
	}
};
</script>