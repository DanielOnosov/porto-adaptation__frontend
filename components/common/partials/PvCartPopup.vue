<template lang="html">
  <notifications
      group="addCartSuccess"
      :duration="3000"
      :width="400"
      :max="4"
      animation-name="fade-left"
      position="bottom right"
  >
    <template slot="body" slot-scope="props">
      <div class="minipopup-box w-100">
        <div class="product">
          <figure class="product-media">
            <nuxt-link :to="'/product/default' + props.item.data.slug">
              <img
                  :src="`//files.world.ms/${props.item.data.thumbs[0]}`"
                  alt="product"
              >
            </nuxt-link>
          </figure>

          <div class="product-detail">
            <nuxt-link :to="'/product/default/' + props.item.data.slug" class="product-name">
              {{ props.item.data.name }}
            </nuxt-link>

            <p>{{ props.item.text }}</p>
          </div>
        </div>

        <div class="product-action">
          <nuxt-link to="/pages/cart" class="btn viewcart">Посмотреть корзину</nuxt-link>
          <nuxt-link to="/pages/checkout" class="btn btn-dark checkout">Оформить</nuxt-link>
        </div>

        <button class="mfp-close" @click="props.close"></button>
      </div>
    </template>
  </notifications>
</template>

<script>
import { baseUrl } from '~/api';

export default {
  name: 'Notify',
  data: function () {
    return {
      baseUrl: baseUrl
    };
  }
};
</script>

<style lang="scss">
.vue-notification-wrapper {
  overflow: unset !important;
}

.fade-left-enter-active,
.fade-left-leave-active,
.fade-left-move {
  transition: all 0.5s;
}

.fade-left-enter,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
