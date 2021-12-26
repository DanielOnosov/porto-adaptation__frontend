<template>
  <div class="product-default" @click="$router.push(`/catalog/${product.id}`)">
    <figure>
      <a :href="`/catalog/${product.id}`">
        <img
            v-for="(item,index) in product.files.slice(0,2)"
            :key="`related-large-${index}`"
            v-lazy="`//files.world.ms/${item}`"
            alt="large-picture"
            class="image"
            :class="{'last-image': index === 1}"
        />
      </a>

      <div class="label-group">
        <div
            class="product-label label-hot"
            v-if="product.is_hot"
        >HOT</div>
        <div
            class="product-label label-sale"
            v-if="product.reserved && !product.price"
        >Sale</div>
        <div
            class="product-label label-sale"
            v-if="product.discount && product.price"
        >-{{ product.discount }}%</div>
      </div>
    </figure>

    <div class="product-details">
      <div class="category-list">
				<span>
					<nuxt-link :to="{ path: '/', query: { category: product.brand_name }}">{{ product.brand_name }}</nuxt-link>
				</span>
      </div>

      <h3 class="product-title">
        <nuxt-link :to="'/catalog/' + product.id">{{ product.name }}</nuxt-link>
      </h3>

      <div class="ratings-container">
        <div class="product-ratings">
					<span
              class="ratings"
              :style="{width: product.ratings * 20 + '%'}"
          ></span>
          <span class="tooltiptext tooltip-top">{{ product.ratings }} ₽</span>
        </div>
      </div>

      <div
          class="price-box"
          v-if="product.price"
          key="singlePrice"
      >
        <template v-if="!product.discount">
          <span class="product-price">{{ product.price }} ₽</span>
        </template>

        <template v-else>
          <span class="product-price" v-if="product.price">{{ product.price }} ₽</span>
          <span class="old-price" v-if="product.price_start">{{ product.price_start  }} ₽</span>
        </template>
      </div>

      <div
          class="price-box"
          v-else
      >
        <template v-if="product.price !== product.price_start">
          <span class="product-price">{{ product.price }} &ndash; {{ product.price_start }} ₽</span>
        </template>

        <template v-else>
          <span class="product-price" v-if="product.price">{{ product.price }} ₽</span>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import addToCart from "~/components/mega/addToCart";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: {
        id: null,
        thumbs: ["https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"],
      },
    },
  },
  components: {
    addToCart
  },
  data() {
    return {
      isCustom: false,
      isFullwidth: false,
      isAddition: false,
    };
  },
  computed: {
    ...mapGetters('wishlist', ['wishList']),
    ...mapGetters('cart', ['cartList']),
    isWishlisted: function () {
      if (
          this.wishList.findIndex(
              item => item.name === this.product.name
          ) > -1
      )
        return true;
      return false;
    },
    isAddedToCart: function () {
      if (
          this.cartList.findIndex(
              item => item.id === this.product.id
          ) > -1
      )
        return true;
      return false;
    },
    sizes: function () {
      if (this.product.sizes) {
        this.product.sizes.forEach(e => {
          return e.match(/[a-zA-Z_]+/gm)
        })
      }
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('wishlist', ['addToWishlist']),
    addCart() {
      let saledProduct = {
        ...this.product,
        qty: 1,
        name: this.product.name,
        price: this.product.price
      }

      this.addToCart({product: saledProduct});
    },
    addWishlist(e) {
      e.currentTarget.classList.add('load-more-overlay', 'loading');

      setTimeout(() => {
        this.addToWishlist({product: this.product});
        document
            .querySelector('.wishlist-popup')
            .classList.add('active');

        setTimeout(() => {
          document
              .querySelector('.wishlist-popup')
              .classList.remove('active');
        }, 1000);
      }, 1000);
    },
  }
}
</script>
<style scoped>
.product-thumbnail {
  width: 100% !important;
  height: 350px !important;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  transition: opacity 0.5s;
}

.product-thumbnail:hover {
  opacity: 0.9;
}

img {
  border: none !important;
}

.owl-stage-outer {
  height: 450px !important;
}

.image {
  object-fit: cover;
  height: 500px !important;
  width: 100%!important;
}

</style>
