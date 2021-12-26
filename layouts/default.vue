<template>
	<div>
		<div class="page-wrapper">
			<div
				class="top-notice bg-primary text-white"
				:class="{'d-none' : isHide}"
			>
				<div class="container text-center">
					<h5 class="d-inline-block">
						Get Up to
						<b>40% OFF</b> New-Season Styles
					</h5>

					<nuxt-link
						:to="{path: '/shop', query: {category: 'men'}}"
						class="category"
					>MEN</nuxt-link>
					<nuxt-link
						:to="{path: '/shop', query: {category: 'women'}}"
						class="category ml-2 mr-3"
					>WOMEN</nuxt-link>

					<small>* Limited time only.</small>
					<button
						title="Close (Esc)"
						type="button"
						class="mfp-close"
						@click="hideTopNotice"
					>×</button>
				</div>
			</div>

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
                      <nuxt-link to="/pages/account">Мой аккаунт</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/pages/about-us">О нас</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/pages/wishlist">Избранное</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/pages/cart">Корзина</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>

              <span class="separator"></span>

              <div class="header-dropdown mr-auto mr-sm-3 mr-md-0">
                <a href="javascript:;">USD</a>
                <div class="header-menu">
                  <ul>
                    <li>
                      <a href="javascript:;">RUB</a>
                    </li>
                    <li>
                      <a href="javascript:;">USD</a>
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
          <div class="container-fluid d-flex justify-content-between">
            <div class="header-left col-lg-2 w-auto pl-0">
              <button
                  class="mobile-menu-toggler text-primary mr-2"
                  type="button"
                  @click="showMobileMenu"
              >
                <i class="fas fa-bars"></i>
              </button>
              <a
                  href="/"
                  class="logo"
              >
                <img
                    src="~/static/images/logo.png"
                    width="101"
                    height="40"
                    alt="Porto Logo"
                />
              </a>
            </div>
            <div class="w-100"></div>
            <div class="header-right w-100 w-lg-max">
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
			<nuxt></nuxt>
			<pv-footer></pv-footer>

			<div class="wishlist-popup">
				<div class="wishlist-popup-msg">Product added!</div>
			</div>
		</div>

		<pv-cart-popup class="minipopup-area"></pv-cart-popup>

		<a
			id="scroll-top"
			href="javascript:;"
			title="Top"
			role="button"
			@click="scrollToTop"
		>
			<i class="icon-angle-up"></i>
		</a>

    <modal/>

		<pv-mobile-menu></pv-mobile-menu>

		<pv-sticky-footer></pv-sticky-footer>
	</div>
</template>

<script>
import PvHeader from '~/components/common/PvHeader';
import PvFooter from '~/components/common/PvFooter';
import PvCartPopup from '~/components/common/partials/PvCartPopup';
import PvMobileMenu from '~/components/common/partials/PvMobileMenu';
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';

import Modal from "~/components/common/Modal";

import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvWishlistMenu from '~/components/common/partials/PvWishlistMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import {mapGetters} from "vuex";

import {
	scrollTopHandler,
	stickyHeaderHandler,
	resizeHandler,
	showScrollTopHandler,
	scrollTo,
	setCookie,
	getCookie,
	scrollTop
} from '~/utils';

export default {
	components: {
		PvHeader,
		PvFooter,
		PvCartPopup,
		PvMobileMenu,
		PvStickyFooter,
    PvMainMenu,
    PvCartMenu,
    PvHeaderSearch,
    PvWishlistMenu,
    Modal
	},
	data: function () {
		return {
			isHide: false,
		};
	},
	watch: {
		$route: function () {
			resizeHandler();
			this.$modal.hideAll();
			this.isHide = getCookie( 'topNotice' );
		}
	},
	created: function () {
		this.isHide = getCookie( 'topNotice' );
	},
  computed: {
    ...mapGetters( 'wishlist', [ 'totalCount' ] )
  },
	mounted: function () {
		window.addEventListener( 'scroll', stickyHeaderHandler, {
			passive: true
		} );
		window.addEventListener( 'scroll', showScrollTopHandler, {
			passive: true
		} );
		window.addEventListener( 'resize', stickyHeaderHandler );
		window.addEventListener( 'resize', resizeHandler );
    document.querySelector( 'body' ).classList.add( 'loaded' );
	},
	destroyed: function () {
		window.removeEventListener( 'scroll', showScrollTopHandler, {
			passive: true
		} );
		window.removeEventListener( 'scroll', stickyHeaderHandler, {
			passive: true
		} );
		window.removeEventListener( 'resize', stickyHeaderHandler );
		window.removeEventListener( 'resize', resizeHandler );
	},
	methods: {
		scrollToTop: function () {
			scrollTop( false, 70 );
		},
		hideTopNotice: function () {
			this.isHide = true;
			setCookie( 'topNotice', false );
		},
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
        }, 500)
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
	}
};
</script>
