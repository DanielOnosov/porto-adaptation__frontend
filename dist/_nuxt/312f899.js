(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{318:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return v})),r.d(e,"h",(function(){return h})),r.d(e,"i",(function(){return f})),r.d(e,"n",(function(){return m})),r.d(e,"a",(function(){return _})),r.d(e,"m",(function(){return w})),r.d(e,"l",(function(){return y})),r.d(e,"j",(function(){return P})),r.d(e,"k",(function(){return C}));var n={slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"}},c={slidesPerView:4,spaceBetween:8,nav:!0,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"}},o={loop:!1,spaceBetween:20,autoplay:!1,slidesPerView:2,breakpoints:{992:{slidesPerView:1}}},l={loop:!1,spaceBetween:30,autoplay:!1,slidesPerView:3,breakpoints:{480:{slidesPerView:1},1200:{slidesPerView:2}},pagination:{el:".swiper-dots",clickable:!0}},d={slidesPerView:1,spaceBetween:0},v={center:!0,slidesPerView:3,spaceBetween:0,centeredSlides:!0,loop:!0,breakpoints:{768:{slidesPerView:1}}},h={slidesPerView:3,spaceBetween:8,direction:"vertical",navigation:{nextEl:".vertical-thumbs .thumb-up",prevEl:".vertical-thumbs .thumb-down"},isCustomNav:!0},f={spaceBetween:20,autoplay:!1,slidesPerView:4,breakpoints:{576:{slidesPerView:2},992:{slidesPerView:3}}},m={slidesPerView:3,spaceBetween:0,breakpoints:{576:{slidesPerView:1},992:{slidesPerView:2}}},_={slidesPerView:3,breakpoints:{576:{slidesPerView:1},992:{slidesPerView:2}}},w={nav:!0,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},slidesPerView:5,breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}},y={spaceBetween:20,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},slidesPerView:5,breakpoints:{576:{slidesPerView:2},992:{slidesPerView:3}}},P={spaceBetween:20,slidesPerView:4,breakpoints:{480:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3}}},C={slidesPerView:6,breakpoints:{480:{slidesPerView:2},768:{slidesPerView:3},991:{slidesPerView:4},1200:{slidesPerView:5}}}},319:function(t,e,r){"use strict";var n={loop:!1,scrollbar:{draggable:!1},spaceBetween:20,slidesPerView:4,watchSlidesVisibility:!0,clickable:!0,navIcon:{prev:"icon-angle-left",next:"icon-angle-right"},isCustomNav:!1},c={props:{options:Object},data:function(){return{sliderOption:Object.assign({},n,this.options),isNavDisabled:!1,isDotDisabled:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.pvCarousel&&(t.$refs.pvCarousel.swiper.emit("update"),t.isNavDisabled=!!(t.$refs.pvCarousel.querySelectorAll(".swiper-button-disabled")&&t.$refs.pvCarousel.querySelectorAll(".swiper-button-disabled").length>1),t.isDotDisabled=!!(t.$refs.pvCarousel.querySelectorAll(".swiper-pagination-bullet")&&t.$refs.pvCarousel.querySelectorAll(".swiper-pagination-bullet").length<2),t.sliderOption.navigation&&document.querySelector(t.sliderOption.navigation.nextEl).parentNode.querySelectorAll(".swiper-button-disabled").length>1&&document.querySelector(t.sliderOption.navigation.nextEl).parentNode.classList.add("disabled"))}))},methods:{resizeHandler:function(){this.isNavDisabled=this.$refs.pvCarousel.querySelectorAll(".swiper-button-disabled")&&this.$refs.pvCarousel.querySelectorAll(".swiper-button-disabled").length>1,this.isDotDisabled=this.$refs.pvCarousel.querySelectorAll(".swiper-pagination-bullet")&&this.$refs.pvCarousel.querySelectorAll(".swiper-pagination-bullet").length<2}}},o=r(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"swiper-carousel swiper-theme"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper",value:t.sliderOption,expression:"sliderOption"}],ref:"pvCarousel",on:{resize:t.resizeHandler}},[r("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t.sliderOption.navigation&&!t.sliderOption.isCustomNav?r("div",{staticClass:"swiper-nav",class:{disabled:t.isNavDisabled}},[r("button",{staticClass:"swiper-prev",attrs:{type:"button",role:"presentation"}},[r("i",{class:t.sliderOption.navIcon.prev})]),t._v(" "),r("button",{staticClass:"swiper-next",attrs:{type:"button",role:"presentation"}},[r("i",{class:t.sliderOption.navIcon.next})])]):t._e(),t._v(" "),t.sliderOption.pagination?r("div",{staticClass:"swiper-dots swiper-pagination-bullets",class:{disabled:t.isDotDisabled}}):t._e()])])}),[],!1,null,null,null);e.a=component.exports},337:function(t,e,r){"use strict";r(33),r(20),r(21),r(38),r(39);var n=r(8),c=(r(111),r(34),r(10),r(18),r(41),r(40),r(50),r(29)),o=r(23);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{product:Object,adClass:String,isActions:{type:Boolean,default:!0}},data:function(){return{baseUrl:o.a,minPrice:0,maxPrice:0,discount:0}},computed:d(d({},Object(c.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1}}),mounted:function(){var t=this;this.product.is_sale&&this.product.price&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.price||(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.is_sale?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:d(d(d({},Object(c.b)("wishlist",["addToWishlist"])),Object(c.b)("cart",["addToCart"])),{},{openQuickview:function(){this.$modal.show((function(){return Promise.all([r.e(3),r.e(50)]).then(r.bind(null,648))}),{slug:this.product.slug},{width:"931",height:"auto",adaptive:!0,class:"quickview-modal"})},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},addCart:function(){if(this.product.stock>0){var t=d({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}}})},h=r(9),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-default"},[r("figure",[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},t._l(t.product.large_pictures.slice(0,2),(function(e,n){return r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],key:"related-large-"+n,class:{"last-image":1===n},attrs:{alt:"large-picture",width:e.width,height:e.height}})})),0),t._v(" "),r("div",{staticClass:"label-group"},[t.product.is_hot?r("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale&&!t.product.price?r("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_sale&&t.product.price?r("div",{staticClass:"product-label label-sale"},[t._v(t._s(t.discount)+"%")]):t._e()])],1),t._v(" "),r("div",{staticClass:"product-details"},[r("div",{staticClass:"category-list"},t._l(t.product.product_categories,(function(e,n){return r("span",{key:"product-category-"+n},[r("nuxt-link",{attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v(" "),n<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),0),t._v(" "),r("h3",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"product-ratings"},[r("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),t.product.price?r("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):r("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.isActions?r("div",{staticClass:"product-action"},[t.isWishlisted?r("nuxt-link",{staticClass:"btn-icon-wish added-wishlist",attrs:{to:"/pages/wishlist",title:"Go to Wishlist"}},[r("i",{staticClass:"icon-wishlist-2"})]):t._e(),t._v(" "),t.isWishlisted?t._e():r("a",{staticClass:"btn-icon-wish",attrs:{href:"javascript:;",title:"Add to Wishlist"},on:{click:function(e){return t.addWishlist(e)}}},[r("i",{staticClass:"icon-wishlist-2"})]),t._v(" "),t.product.variants.length>0?r("nuxt-link",{key:"variantProduct",staticClass:"btn-icon btn-add-cart",attrs:{to:"/product/default/"+t.product.slug}},[r("i",{staticClass:"fa fa-arrow-right"}),t._v(" "),r("span",[t._v("SELECT OPTIONS")])]):r("a",{staticClass:"btn-icon btn-add-cart product-type-simple",attrs:{href:"javascript:;"},on:{click:t.addCart}},[r("i",{staticClass:"icon-shopping-cart"}),t._v(" "),r("span",[t._v("ADD TO CART")])]),t._v(" "),r("a",{staticClass:"btn-quickview",attrs:{href:"javascript:;",title:"Quick View"},on:{click:t.openQuickview}},[r("i",{staticClass:"fas fa-external-link-alt"})])],1):t._e()])])}),[],!1,null,null,null);e.a=component.exports},344:function(t,e,r){"use strict";r(33),r(20),r(21),r(10),r(38),r(18),r(39);var n=r(8);r(320);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{totalCount:Number,itemsPerPage:Number},data:function(){return{pageNumbers:[],totalPage:0,currentPage:1}},computed:{prevPage:function(){var t=this.$route.params.page&&this.$route.params.page>1?this.$route.params.page-1:1;return o(o({},this.$route),{},{query:o(o({},this.$route.query),{},{page:t})})},nextPage:function(){var t=this.$route.params.page&&this.$route.params.page<this.totalPage?this.$route.params.page+1:this.totalPage;return o(o({},this.$route),{},{query:o(o({},this.$route.query),{},{page:t})})}},watch:{$route:function(){this.getPageNumbers(),this.currentPage=this.$route.query.page},itemsPerPage:function(){this.getPageNumbers()}},created:function(){this.getPageNumbers(),this.currentPage=this.$route.query.page?this.$route.query.page:1},methods:{getPageNumbers:function(){this.totalPage=parseInt(this.totalCount/this.itemsPerPage)+(0<this.totalCount%this.itemsPerPage?1:0),this.pageNumbers=[];for(var i=-1;i<2&&this.totalPage>=3;i++)1<this.currentPage&&this.currentPage<this.totalPage&&this.pageNumbers.push(this.currentPage+i),1===this.currentPage&&this.pageNumbers.push(this.currentPage+i+1),this.currentPage===this.totalPage&&this.pageNumbers.push(this.currentPage+i-1);for(var t=0;t<this.totalPage&&this.totalPage<3;t++)this.pageNumbers.push(t+1)},getPageLinkUrl:function(t){return o(o({},this.$route.path),{},{query:o(o({},this.$route.query),{},{page:t})})},changePage:function(t){this.currentPage=t}}},d=r(9),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pageNumbers.length>1?r("ul",{staticClass:"pagination toolbox-item mb-0"},[t.currentPage>1?r("li",{staticClass:"page-item"},[r("nuxt-link",{staticClass:"page-link page-link-btn",attrs:{to:t.prevPage}},[r("i",{staticClass:"icon-angle-left"})])],1):t._e(),t._v(" "),t._l(t.pageNumbers,(function(e){return r("li",{key:"page"+e,staticClass:"page-item",on:{click:function(r){return t.changePage(e)}}},[r("nuxt-link",{staticClass:"page-link",class:{active:e===t.currentPage},attrs:{to:t.getPageLinkUrl(e)}},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t\t"),r("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)})),t._v(" "),t.currentPage<t.totalPage?r("li",{staticClass:"page-item"},[r("nuxt-link",{staticClass:"page-link page-link-btn",attrs:{to:t.nextPage}},[r("i",{staticClass:"icon-angle-right"})])],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=component.exports},351:function(t,e,r){"use strict";r(33),r(20),r(21),r(38),r(18),r(39);var n=r(8),c=(r(320),r(24),r(112),r(34),r(117),r(10),r(62),r(71),r(84),r(141)),o=r(329),l=r(319),d=r(355),v=r(390),h=r(318);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{VueSlideToggle:c.a,VueTreeList:o.VueTreeList,PvSmallProduct:d.a,PvCarousel:l.a},props:{categoryList:Array,featuredProducts:Array},data:function(){return{catOpened:!0,priceOpenened:!0,sizeOpened:!0,colorOpened:!0,prices:[0,1e3],priceSettings:{connect:!0,step:50,margin:100,range:{min:0,max:1e3},format:{from:Number,to:Number}},shopColors:v.a,shopSizes:v.b,baseSlider1:h.b,emptyObject:{},isFeatured:!0,priceReset:!0,currentCategory:""}},watch:{$route:function(){this.getFlag(),this.$route.query.min_price?this.prices=[this.$route.query.min_price,this.$route.query.max_price]:this.prices=[0,1e3],this.priceReset=!1,this.currentCategory=this.$route.query.category,this.$nextTick((function(){this.priceReset=!0}))}},created:function(){this.getFlag(),this.$route.query.min_price?this.prices=[this.$route.query.min_price,this.$route.query.max_price]:this.prices=[0,1e3]},computed:{categoryTree:function(){return new o.Tree(this.categoryList)},priceFilterRoute:function(){return{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,max_price:this.prices[1],min_price:this.prices[0]})}},isEmptyQuery:function(){for(var t in this.$route.query)if("page"!==t&&"per_page"!==t&&this.$route.query[t])return!1;return!0}},methods:{colorFilterRoute:function(t){var e=this.$route.query.color?this.$route.query.color.split(","):[],r=e.indexOf(t.name);return r>-1?e.splice(r,1):e.push(t.name),{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,color:e.toString()})}},sizeFilterRoute:function(t){var e=this.$route.query.size?this.$route.query.size.split(","):[],r=e.indexOf(t.size);return r>-1?e.splice(r,1):e.push(t.size),{path:this.$route.path,query:m(m({},this.$route.query),{},{size:e.toString(),page:1})}},isActivedColor:function(t){return this.$route.query.color&&this.$route.query.color.split(",").includes(t.name)},isActivedSize:function(t){return this.$route.query.size&&this.$route.query.size.split(",").includes(t.size)},getFlag:function(){this.$route.path.includes("horizontal-filter-1")&&(this.isFeatured=!1)}}},w=r(9),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar-wrapper"},[0===t.categoryList.length?r("div",{staticClass:"sidebar-content skeleton-body"},[r("aside",{staticClass:"widget"})]):r("div",{staticClass:"widget widget-product-categories"},[r("h3",{staticClass:"widget-title"},[r("a",{class:{collapsed:!t.catOpened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.catOpened=!t.catOpened}}},[t._v("Categories")])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.catOpened}},[r("div",{staticClass:"widget-body"},[r("vue-tree-list",{attrs:{model:t.categoryTree,"default-expanded":!1},scopedSlots:t._u([{key:"leafNameDisplay",fn:function(e){return[r("nuxt-link",{class:{active:e.model.slug===t.currentCategory},attrs:{to:{path:t.$route.path,query:{category:e.model.slug,page:1}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.model.name)+"\n\t\t\t\t\t\t\t"),r("span",{staticClass:"products-count"},[t._v("("+t._s(e.model.counts)+")")])])]}},{key:"treeNodeIcon",fn:function(){return[r("span")]},proxy:!0}])})],1)])],1),t._v(" "),r("vue-slide-toggle",{attrs:{open:!t.isEmptyQuery}},[r("div",{staticClass:"widget clear-widget"},[r("nuxt-link",{staticClass:"btn btn-primary reset-filter-btn router-link-active",attrs:{to:{path:t.$router.path}}},[t._v("Reset All Filters")])],1)]),t._v(" "),r("div",{staticClass:"widget"},[r("h3",{staticClass:"widget-title"},[r("a",{class:{collapsed:!t.priceOpenened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.priceOpenened=!t.priceOpenened}}},[t._v("Price")])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.priceOpenened}},[r("div",{staticClass:"widget-body pb-0"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"price-slider-wrapper"},[t.priceReset?r("vue-nouislider",{attrs:{config:t.priceSettings,values:t.prices,id:"price-slider"}}):t._e()],1),t._v(" "),r("div",{staticClass:"filter-price-action d-flex align-items-center justify-content-between flex-wrap"},[r("div",{staticClass:"filter-price-text"},[t._v("Price: $"+t._s(t.prices[0])+" - $"+t._s(t.prices[1]))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:t.priceFilterRoute}},[t._v("Filter")])],1)])])])],1),t._v(" "),r("div",{staticClass:"widget widget-color"},[r("h3",{staticClass:"widget-title"},[r("a",{class:{collapsed:!t.colorOpened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.colorOpened=!t.colorOpened}}},[t._v("Color")])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.colorOpened}},[r("div",{staticClass:"widget-body pb-0"},[r("ul",{staticClass:"config-swatch-list"},t._l(t.shopColors,(function(e,n){return r("li",{key:"color-filter"+n,class:{active:t.isActivedColor(e)}},[r("nuxt-link",{style:{backgroundColor:e.color},attrs:{to:t.colorFilterRoute(e)}})],1)})),0)])])],1),t._v(" "),r("div",{staticClass:"widget widget-size"},[r("h3",{staticClass:"widget-title"},[r("a",{class:{collapsed:!t.sizeOpened},attrs:{href:"javascript:;"},on:{click:function(e){t.sizeOpened=!t.sizeOpened}}},[t._v("Sizes")])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.sizeOpened}},[r("div",{staticClass:"widget-body pb-0"},[r("ul",{staticClass:"config-size-list"},t._l(t.shopSizes,(function(e,n){return r("li",{key:"size-filter"+n,class:{active:t.isActivedSize(e)}},[r("nuxt-link",{attrs:{to:t.sizeFilterRoute(e)}},[t._v(t._s(e.size))])],1)})),0)])])],1),t._v(" "),t.isFeatured?r("div",{staticClass:"widget widget-featured"},[r("h3",{staticClass:"widget-title"},[t._v("Featured")]),t._v(" "),r("div",{staticClass:"widget-body"},[r("pv-carousel",{staticClass:"widget-featured-products",attrs:{options:t.baseSlider1}},[r("div",{staticClass:"featured-col swiper-slide"},t._l(t.featuredProducts,(function(t,e){return r("pv-small-product",{key:"featured"+e,attrs:{product:t,"is-lazy":!1}})})),1),t._v(" "),r("div",{staticClass:"featured-col swiper-slide"},t._l(t.featuredProducts,(function(t,e){return r("pv-small-product",{key:"featured"+e,attrs:{product:t,"is-lazy":!1}})})),1)])],1)]):t._e(),t._v(" "),t.isFeatured?r("div",{staticClass:"widget widget-block"},[r("h3",{staticClass:"widget-title"},[t._v("Custom HTML Block")]),t._v(" "),r("h5",[t._v("This is a custom sub-title.")]),t._v(" "),r("p",[t._v("\n\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam\n\t\t\tnon tellus\n\t\t")])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},355:function(t,e,r){"use strict";r(10),r(18);var n=r(23),c={props:{product:Object,isLazy:{type:Boolean,default:!0}},data:function(){return{baseUrl:n.a,minPrice:0,maxPrice:0}},mounted:function(){var t=this;this.product.is_sale&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.variants.length>0&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))}},o=r(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-default left-details product-widget"},[r("figure",[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t.isLazy?t._l(t.product.small_pictures.slice(0,2),(function(e,n){return r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],key:"small-product"+n,class:{"last-image":1===n},attrs:{width:e.width,height:e.height,alt:"small-product-image"}})})):t._l(t.product.small_pictures.slice(0,2),(function(e,n){return r("img",{key:"small-product"+n,class:{"last-image":1===n},attrs:{src:""+t.baseUrl+e.url,width:e.width,height:e.height,alt:"small-product-image"}})}))],2)],1),t._v(" "),r("div",{staticClass:"product-details"},[r("h2",{staticClass:"product-title font2"},[r("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"product-ratings"},[r("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),t.product.price?r("div",{key:"singlePrice",staticClass:"price-box font2"},[t.product.is_sale?[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):r("div",{staticClass:"price-box font2"},[t.minPrice!==t.maxPrice?r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))]):r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])])])])}),[],!1,null,null,null);e.a=component.exports},390:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c}));var n=[{color:"#000",name:"black"},{color:"#0188cc",name:"blue"},{color:"#81d742",name:"green"},{color:"#6085a5",name:"indigo"},{color:"#ab6e6e",name:"red"}],c=[{size:"XL",name:"Extra Large"},{size:"L",name:"Large"},{size:"M",name:"Medium"},{size:"S",name:"Small"}]}}]);