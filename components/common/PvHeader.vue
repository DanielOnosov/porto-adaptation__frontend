<template>
	<header class="header">
		<div class="header-top">
			<div class="container-fluid">
				<div class="header-left d-none d-sm-block">
					<p class="top-message text-uppercase">+123 4567 89 | email@email.com</p>
				</div>

				<div class="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
					<div class="header-dropdown dropdown-expanded d-none d-lg-block">
						<a href="javascript:;">Links</a>
						<div class="header-menu">
							<ul>
								<li>
									<a href="/pages/login/">Мой аккаунт</a>
								</li>
								<li>
									<a href="/pages/about-us">О нас</a>
								</li>
								<li>
									<a href="/pages/wishlist">Избранное</a>
								</li>
								<li>
									<a href="/pages/cart">Корзина</a>
								</li>
							</ul>
						</div>
					</div>

					<span class="separator"></span>

					<div class="social-icons">
						<a
							href="javascript:;"
							class="social-icon social-facebook icon-facebook"

						></a>
						<a
							href="javascript:;"
							class="social-icon social-twitter icon-twitter"

						></a>
						<a
							href="javascript:;"
							class="social-icon social-instagram icon-instagram"

						></a>
					</div>
				</div>
			</div>
		</div>

		<div class="header-middle sticky-header mobile-sticky">
			<div class="container-fluid">
				<div class="header-left col-lg-2 w-auto pl-0">
					<button
						class="mobile-menu-toggler text-primary mr-2"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>
					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							src="~/static/images/logo.png"
							width="101"
							height="40"
							alt="Porto Logo"
						/>
					</nuxt-link>
				</div>

				<div class="header-right w-100 w-lg-max">
					<pv-header-search class="mr-3"></pv-header-search>

					<a
						href="javascript:;"
						@click="openLoginModal"
						class="header-icon"
						title="login"
					>
						<i class="icon-user-2"></i>
					</a>

					<pv-wishlist-menu class="mr-3"></pv-wishlist-menu>
					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>

		<div class="header-bottom sticky-header d-none d-lg-block desktop-sticky">
			<div class="container-fluid">
				<pv-main-menu></pv-main-menu>
			</div>
		</div>
	</header>
</template>

<script>
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvWishlistMenu from '~/components/common/partials/PvWishlistMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import {mapGetters} from "vuex";


export default {
	components: {
		PvMainMenu,
		PvCartMenu,
		PvHeaderSearch,
    PvWishlistMenu
	},
	methods: {
		openLoginModal: function () {
      let id = localStorage.getItem('id')
      if(id){
        this.$router.push('/profile/' + id)
        setTimeout(() => {
          location.reload()
        },500)
      } else {
        this.$router.push('/pages/login')
        setTimeout(() => {
          location.reload()
        },500)
      }
		},
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		},
		showMobileSearch: function ( e ) {
			let headerSearch = e.currentTarget.closest( '.header-search' );
			headerSearch.classList.add( 'show' );
			headerSearch
				.querySelector( '.header-search-wrapper' )
				.classList.add( 'show' );
		}
	},
	mounted(){
		document.querySelector( 'body' ).classList.add( 'loaded' );

	},
  computed: {
    ...mapGetters( 'wishlist', [ 'totalCount' ] )
  },
};
</script>
