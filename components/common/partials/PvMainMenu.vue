<template>
	<nav class="main-nav w-100">
		<ul class="menu main-menu menu-arrow">
			<li>
				<nuxt-link to="/">
					Home
				</nuxt-link>
			</li>

			<li>
				<nuxt-link to="/pages/about-us">О нас</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/pages/contact-us">Контакты</nuxt-link>
			</li>
		</ul>
	</nav>
</template>
<script>
import { mainMenu } from '~/utils/data/menu';

export default {
	data: function () {
		return {
			mainMenu
		};
	},
	computed: {
		isPageItemActived: function () {
			let exItems = [ 'blog', 'about-us', 'contact-us' ];

			if (
				this.$route.path.includes( '/pages' ) &&
				exItems.findIndex( item => this.$route.path.includes( item ) ) ===
				-1
			) {
				return true;
			}

			return false;
		}
	}
};
</script>
