<template>
	<div class="product-single-container product-single-default product-quick-view mb-0 custom-scrollbar skeleton-body">
		<div
			class="quickview-wrap product"
			v-if="!product"
		>
			<div class="skel-group">
				<div class="col-md-6 summary-before"></div>
				<div class="col-md-6 summary entry-summary"></div>
			</div>
		</div>

		<div
			class="row"
			v-if="product"
		>
			<div class="col-md-6 product-single-gallery mb-md-0">
        <img :src="`//files.world.ms/${product.thumbs}`" alt="">
			</div>

			<div class="col-md-6 product-single-details mb-0">
        <pv-detail-one
            :product="product"
            :is-product-nav="false"
        ></pv-detail-one>
			</div>

			<button
				title="Close (Esc)"
				type="button"
				class="mfp-close"
				@click="$emit('close')"
			>×</button>
		</div>
	</div>
</template>

<script>
import Respository, { baseUrl, currentDemo } from '~/api';
import PvDetailOne from "~/components/partials/product/detail/PvDetailOne";

export default {
  props: ['product'],
	data: function () {
		return {
			currentDemo: currentDemo
		}
	},
	mounted: function () {
		this.getProduct();
	},
  components: {PvDetailOne},
	methods: {
		getProduct: function () {
			Respository.get( `${ baseUrl }/products/${ this.slug }`, { params: { demo: currentDemo, 'quick_view': true } } ).then( response => {
				this.product = response.data.product;
			} ).catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
}
</script>
