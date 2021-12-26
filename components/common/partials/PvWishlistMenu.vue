<template>
	<div class="dropdown cart-dropdown">
		<a
			href="/pages/wishlist"
			title="Wishlist"
			class="dropdown-toggle mr-3 cart-toggle"
			role="button"
		>
			<i class="icon-wishlist-2"></i>
		</a>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api';

export default {
	data: function () {
		return {
			baseUrl: baseUrl
		}
	},
	methods: {
	}
}
</script>
