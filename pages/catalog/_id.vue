<template>
  <main class="main">
    <div class="container skeleton-body">
      <nav
          aria-label="breadcrumb"
          class="breadcrumb-nav"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">
              <i class="icon-home"></i>
            </a>
          </li>
          <li class="breadcrumb-item">
            <nuxt-link to="/shop">Shop</nuxt-link>
          </li>
          <li
              class="breadcrumb-item"
          >
            <!--                 <nuxt-link
                                        :to="{path: '/shop', query: {category: category.slug}}"
                                        v-for="(category, index) in productCategory"
                                        :key="`product-category-${index}`"
                                    >{{index === productCategory.length - 1 ? category.name : category.name + ', '}}</nuxt-link>-->
          </li>
          <li
              class="breadcrumb-item active"
              aria-current="page"
              v-if="product.name"
          >{{ product.name }}
          </li>
        </ol>
      </nav>
      <div class="product-single-container product-single-default">
        <div
            class="row"
            v-if="product"
        >
          <div class="col-lg-5 col-md-6 product-single-gallery">
            <div class="slider-carousel-box">
              <client-only>
                <carousel :items="1" :loop="true" :nav="false" :dots="false" :lazyLoad="true" :lazyLoadEager="1">
                  <div
                      v-for="(img, index) in product.files"
                      class="product-thumbnail"
                      :key="index"
                  >
                    <img :src="'https://files.world.ms/' + img" alt="picture">
                  </div>
                </carousel>
              </client-only>
            </div>
          </div>

          <div class="col-lg-7 col-md-6 product-single-details">

            <h1 class="product-title" v-if="product.name">{{ product.name }}</h1>
            <hr class="short-divider">
            <div class="price-box">
              <span class="new-price" v-if="product.price">
                {{ product.price }} <span v-if="product.discount" class="h5 text-danger">   -{{product.discount}}%</span>
              </span>
              <span class="old-price" v-if="product.discount > 0 && product.price && product.price_start">
                <p style="text-decoration: line-through">{{ product.price_start }}₽</p>
              </span>
            </div>
            <div class="product-desc" v-if="product.description">
              <p>{{ product.description }}</p>
            </div>
            <ul class="single-info-list">
              <li v-if="product.article">Артикул: <strong>{{ product.article }}</strong></li>
              <li v-if="product.brand_name">Бренд: <strong>{{ product.brand_name }}</strong></li>
              <li v-if="product.brand_discription">Описание бренда: <strong>{{ product.brand_discription }}</strong>
              <li v-if="product.color">Цвет: <strong>{{ product.color }}</strong></li>
              <li v-if="product.size_chest">Размер груди: <strong>{{ product.color }}</strong></li>
              <li v-if="product.size_hip">Размер бедра: <strong>{{ product.size_hip }}</strong></li>
              <li v-if="product.size_russian">Русский размер: <strong>{{ product.size_russian }}</strong></li>
              <li v-if="product.size_waist">Размер талии: <strong>{{ product.size_waist }}</strong></li>
              <li v-if="product.size_vendor">Размер от производителя: <strong>{{ product.size_vendor }}</strong></li>
              <li v-if="views.product.views">Просмотров:<strong>{{ views.product.views }}</strong>
              </li>
            </ul>
            <div class="product-action">
              <a
                  v-if="!isAddedToCart"
                  class="btn btn-dark add-cart mr-2"
                  title="Add to Cart"
                  @click="addCart"
              >Добавить в корзину</a>

              <div v-if="isAddedToCart">
                <a href="/pages/cart">Посмотреть корзину</a>
              </div>
            </div>

            <hr class="divider mb-0 mt-0"/>

            <div class="product-single-share mb-3">

              <a
                  href="/pages/wishlist"
                  class="btn-icon-wish add-wishlist added-wishlist"
                  title="Go to Wishlist"
                  v-if="isWishlisted"
              >
                <i class="icon-wishlist-2"></i>
                <span>Go to Wishlist</span>
              </a>

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
      </div>

      <div
          class="skel-group"
          v-if="!product"
      >
        <div class="summary-before col-lg-5 col-md-6"></div>
        <div class="summary entry-summary col-lg-7 col-md-6"></div>
        <div class="tab-content col-lg-12"></div>
      </div>

      <hr class="mt-0 m-b-5"/>

      <pv-tabs class="product-single-tabs">
        <ul
            class="nav nav-tabs"
            role="tablist"
        >
          <li class="nav-item">
            <a
                class="nav-link active"
                id="product-tab-desc"
                data-toggle="tab"
                href="#product-desc-content"
                role="tab"
                aria-controls="product-desc-content"
                aria-selected="true"
            >Описание</a>
          </li>

          <li class="nav-item">
            <a
                class="nav-link"
                id="product-tab-size"
                data-toggle="tab"
                href="#product-size-content"
                role="tab"
                aria-controls="product-size-content"
                aria-selected="true"
            >Таблица размеров</a>
          </li>

          <li
              class="nav-item"
              v-if="!(isCustom || isFullwidth || isAddition)"
          >
            <a
                class="nav-link"
                id="product-tab-tags"
                data-toggle="tab"
                href="#product-tags-content"
                role="tab"
                aria-controls="product-tags-content"
                aria-selected="false"
            >Additional Information</a>
          </li>

          <li
              class="nav-item"
              v-if="isCustom"
          >
            <a
                class="nav-link"
                id="product-tab-custom"
                data-toggle="tab"
                href="#product-custom-content"
                role="tab"
                aria-controls="product-custom-content"
                aria-selected="false"
            >Custom Tab</a>
          </li>
        </ul>

        <div class="tab-content">
          <div
              class="tab-pane fade show active"
              id="product-desc-content"
              role="tabpanel"
              aria-labelledby="product-tab-desc"
          >
            <div
                class="product-desc-content"
                v-if="isFullwidth"
            >
              <p class="mb-1" v-if="product.description">
                {{ product.description }}
              </p>

              <img
                  alt="image desc"
                  width="275"
                  height="276"
                  :src="'./images/products/product-img.jpg'"
                  class="float-right"
              />

              <p v-if="product.description">
                {{ product.description }}
              </p>

              <ul>
                <li>Any Product types that You want - Simple, Configurable</li>
                <li>Downloadable/Digital Products, Virtual Products</li>
                <li>Inventory Management with Backordered items</li>
              </ul>

              <div class="row justify-content-center">
                <div class="col-sm-6 col-xl-4">
                  <div class="feature-box feature-box-simple text-center">
                    <div class="feature-icon">
                      <i class="fa fa-star"></i>
                    </div>

                    <div class="feature-box-content">
                      <h3>Dedicated Service</h3>
                      <p>
                        Consult our specialists for help with an order,
                        customization, or design advice
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-4">
                  <div class="feature-box feature-box-simple text-center">
                    <div class="feature-icon">
                      <i class="fa fa-reply"></i>
                    </div>

                    <div class="feature-box-content">
                      <h3>Free Returns</h3>
                      <p>
                        Consult our specialists for help with an order,
                        customization, or design advice
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-4">
                  <div class="feature-box feature-box-simple text-center">
                    <div class="feature-icon">
                      <i class="fa fa-paper-plane"></i>
                    </div>

                    <div class="feature-box-content">
                      <h3>International Shipping</h3>
                      <p>
                        Consult our specialists for help with an order,
                        customization, or design advice
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
            <div
                class="product-desc-content"
                v-else
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum
                consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
              </p>
              <ul>
                <li>
                  Any Product types that You want - Simple,
                  Configurable
                </li>
                <li>
                  Downloadable/Digital Products, Virtual
                  Products
                </li>
                <li>Inventory Management with Backordered items</li>
              </ul>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>

          <div
              class="tab-pane fade"
              id="product-size-content"
              role="tabpanel"
              aria-labelledby="product-tab-size"
          >
            <div class="product-size-content">
              <div class="row">
                <iframe :src="'/size_guide/' + product.name" frameborder="0"></iframe>
              </div>
            </div>
          </div>

          <div
              class="tab-pane fade"
              id="product-tags-content"
              role="tabpanel"
              aria-labelledby="product-tab-tags"
              v-if="!isCustom"
          >
            <table class="table table-striped mt-2">
              <tbody>
              <tr>
                <th>Dimensions</th>
                <td>12 × 24 × 35 cm</td>
              </tr>

              <tr>
                <th>Color</th>
                <td>Black, Green, Indigo</td>
              </tr>

              <tr v-for="item in product.sizes" :key="item">
                <th>{{ item.match(/[a-zA-Z_]+/gm)[0] }}</th>
                <td>{{ item.match(/[A-Z0-9-]+/gm)[0] }}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div
              class="tab-pane fade"
              id="product-custom-content"
              role="tabpanel"
              aria-labelledby="product-tab-custom"
              v-if="isCustom"
          >Custom Tab Content
          </div>
        </div>
      </pv-tabs>
      <client-only>
        <ais-experimental-configure-related-items :hit="hit" :matchingPatterns="matchingPatterns" />
        <ais-hits>
          <template v-slot="{ items }">
            <pv-related-products v-if="items" :products="items"></pv-related-products>
          </template>
        </ais-hits>
      </client-only>
    </div>
  </main>
</template>

<script>
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';
import PvQuantityInput from '~/components/features/PvQuantityInput';
import PvTabs from '~/components/features/PvTabs';
import {mapActions, mapGetters} from "vuex";
import 'instantsearch.css/themes/algolia-min.css'


var token = '5DbWTsKyseQHD7Tk9xYCAhwKzPdUJjLtdzw5E3FnL8XxDfQCe3d7eEd6MvwTNuKa';
var id = "a6ec5d3c-5d43-4585-bc71-8f40d09ff6d3";

import {AisIndex, AisHits, AisExperimentalConfigureRelatedItems} from 'vue-instantsearch'

export default {
  layout: 'main',
  components: {
    PvDetailOne,
    PvDescOne,
    PvRelatedProducts,
    PvSmallCollection,
    PvQuantityInput,
    PvTabs,
    AisIndex,
    AisHits,
    AisExperimentalConfigureRelatedItems
  },
  async asyncData({$axios, route, app, params, req, res, redirect}) {
    // USE ONLY SERVER SIDE
    if (process.server) {
      // on production set this to params.id and check it for truth
      const id = params.id ? params.id : "a6ec5d3c-5d43-4585-bc71-8f40d09ff6d3";

      // static url to self will fastify request
      const protocol = req.connection.encrypted ? "https" : "http";
      const host = `${protocol}://${req.headers.host}`;


      // create promise for get product
      var config_product = {
        method: 'get',
        url: `${host}/api/products/collections/products/documents/${id}`,
      };
      var promiseGetProduct = await $axios(config_product).then((v) => {
        return v.data
      }).catch(() => {
        redirect('/');
        return 'Product retrieve error'
      });


      // create promise for get product views count
      const urlGetViews = `${host}/api/slapi2/?product_id=${id}`;
      const promiseGetViews = await $axios.$get(urlGetViews).then((v) => {
        return v.data
      }).catch(() => {
      });


      // Get views and product
      Promise.all([promiseGetProduct, promiseGetViews]).then((v) => {
      }).catch(() => {
      });

      // Check if viewc sount data is set
      if (promiseGetViews) {
        // creating configuration for axios
        var data = JSON.stringify({
          "views": promiseGetViews.product.views
        });
        var url = `${host}/api/back/items/products/${id}`
        var config = {
          method: 'patch',
          url: url,
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        // Set views count on backend data server
        var promiseSetViews = await $axios(config).then((v) => {
          return v.data
        }).catch(() => {
          return 'Update vievs on backend failed'
        });
        Promise.all([promiseSetViews]).then((v) => {
        }).catch((e) => {
          console.log(e);
        });
      }


      // Retrieve data
      return {
        product: promiseGetProduct,
        views: promiseGetViews,
        views_updated: promiseSetViews,
      };
    }
  },
  mounted() {
    console.log(this.views)
  },
  data() {
    return {
      isCustom: false,
      isFullwidth: false,
      isAddition: false,
      hit: {
        id: this.$route.params.id,
      },
      matchingPatterns: {
        name: { score: 2 },
        brand_name: { score: 1 },
      },
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
<style scoped lang="scss">
.product-single-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

.ais-InstantSearch {
  display: block !important;
}
</style>
