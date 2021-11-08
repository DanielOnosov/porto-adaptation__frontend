<template>
	<main class="main skeleton-body">
		<div class="container">
			<nav
				aria-label="breadcrumb"
				class="breadcrumb-nav"
			>
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li class="breadcrumb-item">
						<nuxt-link :to="{ path: '/shop' }">Shop</nuxt-link>
					</li>
					<li
						class="breadcrumb-item active"
						aria-current="page"
					>Boxed Image</li>
				</ol>
			</nav>

			<div class="row">
				<div class="col-lg-9">
					<div
						class="category-banner banner text-uppercase mb-2"
						style="background: no-repeat 60%/cover url('./images/banners/banner-top.jpg');"
					>
						<div class="row">
							<div class="pb-5 pb-md-0 col-sm-5 col-lg-5 offset-1">
								<h3 class="mb-2 ls-10">
									Electronic
									<br />Deals
								</h3>
								<a
									href="#"
									class="btn btn-dark btn-black ls-10"
								>Get Yours!</a>
							</div>
							<div class="col-sm-4 offset-sm-0 offset-1">
								<div class="coupon-sale-content">
									<h4 class="m-b-2 coupon-sale-text bg-white ls-10 text-transform-none">
										Exclusive
										COUPON
									</h4>
									<h5 class="mb-2 coupon-sale-text d-block ls-10 p-0">
										<i class="ls-0">UP TO</i>
										<b class="text-dark">$100</b> OFF
									</h5>
								</div>
							</div>
						</div>
					</div>

					<pv-product-list-one :category-list="categoryList"></pv-product-list-one>
				</div>

				<div
					class="sidebar-overlay"
					@click="hideSidebar"
				></div>
				<aside
					class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar"
					sticky-container
				>
					<div
						v-sticky="isSticky"
						sticky-offset="{top: 75}"
					>
						<pv-sidebar-filter-one
							:category-list="categoryList"
							:featured-products="featuredProducts"
							v-if="featuredProducts.length > 0"
						></pv-sidebar-filter-one>

						<div
							class="sidebar-content skeleton-body"
							v-if="featuredProducts.length === 0"
						>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
						</div>
					</div>
				</aside>
			</div>

			<div class="mb-4"></div>
		</div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import Sticky from 'vue-sticky-directive';
import PvCarousel from '~/components/features/PvCarousel';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListOne from '~/components/partials/shop/product-list/PvProductListOne';
import PvShopBanner from '~/components/partials/shop/PvShopBanner';
import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider6 } from '~/utils/data/carousel';

export default {
	directives: {
		Sticky
	},
	components: {
		PvSidebarFilterOne,
		PvProductListOne,
		PvShopBanner
	},
	data: function () {
		return {
			categoryList: [],
			featuredProducts: [],
			baseSlider6: baseSlider6,
			isSticky: false
		};
	},
	mounted: function () {
		this.getCategoryLists();
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler, {
			passive: true
		} );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		getCategoryLists: function () {
			Api.get( `${ baseUrl }/shop/sidebar-list`, {
				params: { demo: currentDemo }
			} )
				.then( response => {
					this.categoryList = response.data.sidebarList;
					this.featuredProducts = response.data.featuredProducts;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		},
		hideSidebar: function () {
			document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
		}
	}
};
</script>