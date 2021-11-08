<template>
	<main class="main home-page">
		<pv-intro-section></pv-intro-section>

		<pv-service-section></pv-service-section>

		<pv-featured-collection :products="featuredProducts"></pv-featured-collection>

		<pv-new-collection :products="newProducts"></pv-new-collection>

		<pv-feature-section></pv-feature-section>

		<pv-promo-section></pv-promo-section>

		<pv-blog-section :posts="posts"></pv-blog-section>

		<div class="container">
			<pv-small-collection
				:featured-products="featuredProducts.slice(0,3)"
				:best-products="bestProducts.slice(0,3)"
				:latest-products="newProducts.slice(0,3)"
				:top-rated-products="topRatedProducts.slice(0,3)"
			></pv-small-collection>
		</div>
	</main>
</template>

<script>
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import PvFeaturedCollection from '~/components/partials/home/PvFeaturedCollection';
import PvNewCollection from '~/components/partials/home/PvNewCollection';
import PvFeatureSection from '~/components/partials/home/PvFeatureSection';
import PvPromoSection from '~/components/partials/home/PvPromoSection';
import PvBlogSection from '~/components/partials/home/PvBlogSection';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';
import {
	getProductsByAttri,
	getTopSellingProducts,
	getTopRatedProducts
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl } from '~/api';

export default {
	components: {
		PvIntroSection,
		PvServiceSection,
		PvFeatureSection,
		PvNewCollection,
		PvFeaturedCollection,
		PvPromoSection,
		PvBlogSection,
		PvSmallCollection
	},
	data: function () {
		return {
			products: [],
			posts: [],
			featuredProducts: [],
			newProducts: [],
			bestProducts: [],
			topRatedProducts: [],
			timerId: 0
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo4` )
			.then( response => {
				this.products = response.data.products;
				this.posts = response.data.posts;
				this.featuredProducts = getProductsByAttri(
					response.data.products
				);
				this.newProducts = getProductsByAttri(
					response.data.products,
					'is_new'
				);
				this.bestProducts = getTopSellingProducts(
					response.data.products
				);
				this.topRatedProducts = getTopRatedProducts(
					response.data.products
				);
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );

		this.timerId = setTimeout( () => {
			if (
				this.$route.path === '/' &&
				getCookie( 'newsletter' ) !== 'false'
			) {
				this.$modal.show(
					() =>
						import( '~/components/features/modal/PvNewsletterModal' ),
					{},
					{ width: '740', height: 'auto', adaptive: true, class: 'newsletter-modal' }
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		clearTimeout( this.timerId );
	}
};
</script>