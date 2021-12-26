<template>
  <span>
    <div class="btn-secondary rounded-1 btn mb-5" v-if="isAdded">
      Добавлено в корзину
    </div>
    <button class="btn-primary rounded-1 btn mb-5" v-else @click="addCart">
      Добавить в корзину
    </button>
  </span>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    caption: {
      type: String,
      required: false,
      default: "Добавить в корзину"
    },
    captionInCart: {
      type: String,
      required: false,
      default: "Товар в корзине"
    },
    product: {
      type: Object,
      required: true
    },
    classes: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      in_cart: false,
      caption_text: this.caption,
      caption_text_in_cart: this.captionInCart,
      classes_changed: this.classes
    };
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    addCart() {
      let saledProduct = {
        ...this.product,
        qty: 1,
        name: this.product.name,
        price: this.product.price,
      }
      this.addToCart({product: saledProduct});
    },
  },
  computed: {
    ...mapGetters('cart', ['cartList']),
    isAdded: function () {
      console.log(this.cartList.findIndex(item => item.id === this.product.id))
      if (
          this.cartList.findIndex(
              item => item.id === this.product.id
          ) > -1
      )
        return true;
      return false;
    },
  }
};
</script>
