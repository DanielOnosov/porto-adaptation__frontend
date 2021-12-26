<template>
  <div
      class="row"
      v-if="product"
  >
    <div class="col-lg-5 col-md-6 product-single-gallery">
      <div class="product-slider-container"></div>
      <img
          v-lazy="`//files.world.ms/${product.files[0]}`"
          class="product-single-image"
          alt="lgPicture">
    </div>

    <div class="col-lg-7 col-md-6 product-single-details">
      <h1 class="product-title" v-if="product.name">{{ product.name }}</h1>
      <hr class="short-divider">
      <div class="price-box">
              <span class="new-price">
                {{ product.price }}
              </span>
        <span class="new-price" v-if="product.discount > 0">
                {{ product.price }} <p style="text-decoration: line-through">{{ product.price_start }}</p>
              </span>
      </div>
      <div class="product-desc" v-if="product.description">
        <p>{{ product.description }}</p>
      </div>
      <ul class="single-info-list">
        <li>Артикул: <strong>{{ product.article }}</strong></li>
        <li>Бренд: <strong>{{ product.brand_name }}</strong></li>
        <li v-if="product.brand_discription">Описание бренда: <strong>{{ product.brand_discription }}</strong>
        </li>
      </ul>

      <div class="product-action">
        <a
            href="javascript:;"
            class="btn btn-dark add-cart mr-2"
            title="Add to Cart"
            @click="addCart"
        >Add to Cart</a>

        <nuxt-link
            to="/pages/cart"
            class="btn btn-gray view-cart d-none"
        >View cart
        </nuxt-link>
      </div>

      <hr class="divider mb-0 mt-0"/>

      <div class="product-single-share mb-3">

        <nuxt-link
            to="/pages/wishlist"
            class="btn-icon-wish add-wishlist added-wishlist"
            title="Go to Wishlist"
            v-if="isWishlisted"
        >
          <i class="icon-wishlist-2"></i>
          <span>Go to Wishlist</span>
        </nuxt-link>

        <a
            href="javascript:;"
            class="btn-icon-wish add-wishlist"
            title="Add to Wishlist"
            @click="addWishlist($event)"
            v-if="!isWishlisted"
        >
          <i class="icon-wishlist-2"></i>
          <span>Add to Wishlist</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  props: {
    product: Object,
    prevProduct: Object,
    nextProduct: Object,
    isProductNav: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
    };
  },
  watch: {
    $route: function () {
      this.getFlag();
    }
  },
  computed: {
    ...mapGetters('wishlist', ['wishList']),
    isWishlisted: function () {
      if (
          this.wishList.findIndex(
              item => item.name === this.product.name
          ) > -1
      )
        return true;
      return false;
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('wishlist', ['addToWishlist']),
    addCart: function () {
      let saledProduct = {
        ...this.product,
        qty: this.qty,
        name:
            this.product.name +
            ' - ' + saledName,
        price: saledPrice
      };

      this.addToCart({product: saledProduct});
    }
  },
  addWishlist: function (e) {
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
};
</script>
