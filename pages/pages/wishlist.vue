<template>
	<main class="main">
		<div class="page-header">
			<div class="d-flex flex-column align-items-center">
				<nav
					aria-label="breadcrumb"
					class="breadcrumb-nav"
				>
					<div class="container">
						<ol class="breadcrumb border-0 mb-1 mt-0">
							<li class="breadcrumb-item">
								<nuxt-link to="/">
									<i class="icon-home"></i>
								</nuxt-link>
							</li>
							<li
								class="breadcrumb-item active"
								aria-current="page"
							>Избранное</li>
						</ol>
					</div>
				</nav>

				<h1>Избранное</h1>
			</div>
		</div>

		<div class="container">
			<div
				class="cart-message carted"
				style="display: none"
			>
				<strong
					class="single-cart-notice"
					v-if="currentProduct"
				>“{{ currentProduct.name }}”</strong>
				<span>был успешно добавлен в корзину.</span>
			</div>

			<div
				class="cart-message removed"
				style="display: none"
			>
				<strong
					class="single-cart-notice"
					v-if="currentProduct"
				>“{{ currentProduct.name }}”</strong>
				<span>был успешно удален.</span>
			</div>

			<div class="wishlist-title">
				<h2 class="p-2">Избранное</h2>
			</div>

			<div
				class="wishlist-table-container"
				v-if="wishItems.length > 0"
				key="noEmpty"
			>
				<table class="table table-wishlist mb-0">
					<thead>
						<tr>
							<th class="thumbnail-col"></th>
							<th class="product-col">Название</th>
							<th class="price-col">Цена</th>
							<th class="status-col">Бренд</th>
							<th class="action-col">Действия</th>
						</tr>
					</thead>
					<tbody>
						<tr
							class="product-row"
							v-for="(product,index) in wishItems"
							:key="'wishlist-' +index"
						>
							<td>
								<figure class="product-image-container">
									<nuxt-link
										:to="'/catalog/' + product.slug"
										class="product-image"
									>
										<img
											:src="`//files.world.ms/${product.thumbs[0]}`"
											alt="product"
										/>
									</nuxt-link>

									<a
										href="javascript:;"
										class="btn-remove icon-cancel"
										title="Remove Product"
										@click="removeWishlist(product)"
									></a>
								</figure>
							</td>
							<td>
								<h5 class="product-title">
									<nuxt-link :to="'/catalog/' + product.slug">{{ product.name }}</nuxt-link>
								</h5>
							</td>

							<td
								class="price-box"
								v-if="product.price"
								key="singlePrice"
							>
								<template v-if="!product.price_start">
									<span class="new-price">{{ product.price | priceFormat }}₽</span>
								</template>

								<template v-else>
									<span class="new-price">{{ product.price | priceFormat }}₽</span>
									<span class="old-price">{{ product.price_start | priceFormat }}₽</span>
								</template>
							</td>

							<td
								class="price-box"
								v-else
							>
								<template v-if="product.price !== product.price_start">
									<span class="new-price">${{ product.price | priceFormat }} &ndash; ${{ product.price_start | priceFormat }}</span>
								</template>

								<template v-else>
									<span class="new-price">{{ product.price | priceFormat }}₽</span>
								</template>
							</td>

							<td>
								<span class="stock-status">{{ product.brand_name }}</span>
							</td>
							<td class="action">
								<button
                    class="btn btn-dark btn-add-cart product-type-simple btn-shop"
                >
                  <nuxt-link class="text-white" :to="'/catalog/' + product.id">Перейти на страницу товара</nuxt-link>
                </button>

								<button
									class="btn btn-dark btn-add-cart product-type-simple btn-shop"
									@click="addCart( product )"
									v-if="product.length === 0"
								>Добавить в корзину</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div
				class="box-content"
				v-else
			>
				<div class="wishlist-table-container">
					<table
						class="table-wishlist"
						data-pagination="no"
						data-per-page="5"
						data-page="1"
						data-id
						data-token
					>
						<thead class="d-none">
							<tr>
								<th class="product-thumbnail"></th>

								<th class="product-name">
									<span class="nobr">Продукт</span>
								</th>

								<th class="product-price">
									<span class="nobr">Цена</span>
								</th>

								<th class="product-stock-status">
									<span class="nobr">Статус</span>
								</th>

								<th class="product-add-to-cart">
									<span class="nobr">Действия</span>
								</th>
							</tr>
						</thead>

						<tbody class="wishlist-items-wrapper">
							<tr class="border-0 py-0">
								<td
									colspan="6"
									class="px-3 pt-5 pt-md-0 text-center"
								>
									<i class="far fa-heart wishlist-empty"></i>
								</td>
							</tr>
							<tr class="border-0 py-0">
								<td
									colspan="6"
									class="px-3 wishlist-empty wishlist-text"
								>В список желаний ничего не добавлено</td>
							</tr>
							<tr class="border-0">
								<td
									colspan="6"
									class="px-3 text-center pb-5 pb-md-0"
								>
									<nuxt-link
										to="/"
										class="btn btn-go-shop"
									>В магазин</nuxt-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl, currentDemo } from '~/api';

export default {
	data: function () {
		return {
			baseUrl: baseUrl,
			currentDemo: currentDemo,
			wishItems: [],
			currentProduct: null
		}
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] )
	},
	watch: {
		wishList: function () {
			this.makeCartItems();
		}
	},
	mounted: function () {
		this.makeCartItems();
	},
	methods: {
		...mapActions( 'wishlist', [ 'removeFromWishlist' ] ),
		...mapActions( 'cart', [ 'addToCart' ] ),
		makeCartItems: function () {
			this.wishItems = this.wishList;
			this.wishItems = this.wishList.reduce( ( acc, product ) => {
				let minPrice = 0, maxPrice = 0;

				if ( !product.price ) {
					minPrice = product.price;
					maxPrice = product.price_start;
				}

				return [
					...acc,
					{
						...product,
						minPrice: minPrice,
						maxPrice: maxPrice
					}
				]
			}, [] )
		},
		addCart: function ( product ) {
			this.currentProduct = product;
			document.querySelector( '.cart-message.removed' ).style.display = 'none';
			document.querySelector( '.cart-message.carted' ).style.display = 'block';
			this.addToCart( { product: product } );
			this.removeFromWishlist( { id: product.id } );
		},
		removeWishlist: function ( product ) {
			this.currentProduct = product;
			document.querySelector( '.cart-message.carted' ).style.display = 'none';
			document.querySelector( '.cart-message.removed' ).style.display = 'block';
			this.removeFromWishlist( { id: product.id } );
		}
	}
}
</script>
