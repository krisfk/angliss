<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <!-- <div class="about-content-outer mr-auto ml-auto d-block position-relative">testtestt</div> -->
    <div class="products-content-outer">
      <div class="middle">
        <!--product detail lightbox-->
        <div class="lightbox" v-show="show_lightbox">
          <div class="lightbox-content-div">
            <!--product detail-->

            <table>
              <tr>
                <td class="left-col">
                  <a href="#" class="add-to-wish-list-a">add to wish list</a>
                  <div class="product-name">Tail</div>
                  <div class="stick-slide-show">
                    <VueSlickCarousel
                      :arrows="false"
                      :dots="true"
                      :edgeFriction="0.35"
                      :speed="500"
                      :slidesToShow="1"
                    >
                      <div>
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-1.jpg"
                          alt
                        />
                      </div>
                      <div>
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-2.jpg"
                          alt
                        />
                      </div>
                      <div>
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-3.jpg"
                          alt
                        />
                      </div>
                    </VueSlickCarousel>
                  </div>

                  <div>
                    <img class="tag" src="../../assets/images/promo-tag.png" alt />
                  </div>
                </td>
                <td class="right-col">
                  <ul class="list-inline product-mouseover-view-ul">
                    <li>
                      COUNTRY ORIGIN
                      <div>
                        <img class="flag-icon" src="../../assets/images/flag-icon.jpg" alt />
                      </div>
                    </li>
                    <li>
                      BRAND
                      <div>
                        <img class="brand-icon" src="../../assets/images/brand-icon.jpg" alt />
                      </div>
                    </li>
                    <li>
                      ATTRIBUTE
                      <div>
                        <img
                          class="attribute-icon"
                          src="../../assets/images/attribute-icon.png"
                          alt
                        />
                        <span class="attribute-name">FROZEN</span>
                      </div>
                    </li>

                    <li>
                      PRODUCT TYPE
                      <div class="product-type-name">BEEF</div>
                    </li>

                    <li>
                      PRODUCT DETAIL
                      <div class="product-type-name">200KG X 5</div>
                    </li>
                    <li>
                      PRODUCT DESCRIPTION
                      <div class="product-type-name">
                        TAIL IS A BONY, GELATIN-RICH MEAT, WHICH IS USUALLY
                        SLOW-COOKED AS A STEW OR BRAISED.
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>

            <a href="javascript:void(0);" class="close-lightbox-btn" @click="show_lightbox = false"></a>

            <!-- <table>
              <tr>
                <td class="align-top pl-5 pt-4 pb-4">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />
                </td>
                <td class="align-top text-left pr-5 pt-4 pb-4">
                  <div class="vuebar-element" v-bar>
                    <div>
                      <div class="sub-heading gold">PASTRY GLOBAL HONG KONG</div>
                      <div class="description">
                        PastryGlobal Food Service Limited was founded in January 2007 with a team of experienced sales and marketing professionals specialising in building brand image and selling premium pastry ingredients. Through our extensive regional market knowledge and connections, we are the preferred business partner for both principals and customers. We represent more than 20 world famous pastry ingredient brands from 15 countries. With the full support of our customers, PastryGlobal has become one of the leading suppliers in Hong Kong and Macau for quality pastry ingredients. PastryGlobal is proud to work with the creme de la creme of partners, distributing the more than products to our customers.
                        We build brands with our belief in quality ingredients. With our extensive network in the pastry world, we are delighted to recommend our partners to different market in other parts of the world for exploring business opportunities. Together we grow the business, not just within Hong Kong and Macau, but globally as our name says - PastryGlobal.
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>-->
          </div>
        </div>
        <!---->
        <table>
          <td class="left-col">
            <div class="big-heading">PRODUCTS</div>
            <div class="products-menu mobile">
              <select @change="mobile_menu_onChange($event)">
                <option value="MEAT" data-url="?c=1">MEAT</option>
                <option value="chilled beef" data-url="?c=1">- chilled beef</option>
                <option value="frozen beef" data-url="?c=1">- frozen beef</option>
                <option value="lamb & mutton" data-url="?c=1">- lamb & mutton</option>
                <option value="MEAT" data-url="?c=1">MEAT</option>
                <option value="chilled beef" data-url="?c=1">- chilled beef</option>
                <option value="frozen beef" data-url="?c=1">- frozen beef</option>
                <option value="lamb & mutton" data-url="?c=1">- lamb & mutton</option>
                <option value="MEAT" data-url="?c=1">MEAT</option>
                <option value="chilled beef" data-url="?c=1">- chilled beef</option>
                <option value="frozen beef" data-url="?c=1">- frozen beef</option>
                <option value="lamb & mutton" data-url="?c=1">- lamb & mutton</option>
                <option value="promotion item" data-url="?c=1">promotion item</option>
                <option value="brand" data-url="?b=1">brands</option>
              </select>
            </div>

            <ul class="products-menu pc">
              <li>
                <nuxt-link
                  to="?c=1"
                  @click="
                    activeBtn = '';
                    activeBtn = 'btn1';
                    show_product_list = true;
                  "
                  :class="{ active: activeBtn === 'btn1' }"
                >
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  MEAT
                </nuxt-link>
                <ul
                  class="subcate-menu"
                  :class="{
                    active: activeBtn === 'btn1' || ProductsListCategoryView
                  }"
                >
                  <li>
                    <nuxt-link to="?c=1">chilled beef</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="?c=1">frozen beef</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="?c=1">lamb & mutton</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="?c=1">pork</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="?c=1">poultry & game</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <nuxt-link
                  to="?c=1"
                  @click="
                    activeBtn = '';
                    activeBtn = 'btn2';
                  "
                  :class="{ active: activeBtn === 'btn2' }"
                >
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  SEAFOOD
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  PASTRY & DAIRY
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  CHEESE
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  VEGETABLES
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  DELI
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  GROCERY
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  ITALIAN SPECIALITY
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="?c=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  PROMOTIONAL ITEMS
                </nuxt-link>
              </li>
              <li>
                <a href="?b=1">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  BRANDS
                </a>
              </li>
            </ul>
          </td>
          <td class="right-col">
            <input class="search-product-input" type="text" />

            <div>
              <a
                class="products-filter-btn"
                href="javascript:void(0);"
                @click="
                  show_filter = true;
                  mouseOverProduct = '';
                "
              >
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                CATEGORIES
              </a>
              <a
                class="products-filter-btn"
                href="javascript:void(0);"
                @click="
                  show_filter = true;
                  mouseOverProduct = '';
                "
              >
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                BRANDS
              </a>
              <a
                class="products-filter-btn"
                href="javascript:void(0);"
                @click="
                  show_filter = true;
                  mouseOverProduct = '';
                "
              >
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                COUNTRY OF ORIGIN
              </a>
            </div>

            <div class="filter-div" v-show="show_filter">
              <a href="javascript:void(0);" class="close-filter-btn" @click="show_filter = false"></a>

              <div>
                <ul class="filters-buttons-ul">
                  <li>
                    <a href="#" class="filter-ok-btn">OK</a>
                  </li>
                  <li>
                    <a href="#" class="filter-cancel-btn" @click="show_filter = false">CANCEL</a>
                  </li>
                  <li>
                    <a href="#" class="filter-clear-btn">CLEAR LIST</a>
                  </li>
                </ul>
                <div class="sub-heading mt-5">Selected Filters:</div>

                <table class="selected-filters-table">
                  <tr>
                    <td class="left-col">Categories:</td>
                    <td class="right-col">xxx</td>
                  </tr>
                  <tr>
                    <td class="left-col">Brands:</td>
                    <td class="right-col">xxx</td>
                  </tr>
                  <tr>
                    <td class="left-col">Countries:</td>
                    <td class="right-col">xxx</td>
                  </tr>
                </table>
              </div>

              <div class="vuebar-element3" v-bar>
                <div>
                  <ul class="list-inline col-lg-12 col-md-12 col-sm-12 col-12">
                    <li class="col-lg-12 col-md-12 col-sm-12 col-12 font-weight-bold">No.</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">111</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">222</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">333</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">444</li>
                  </ul>
                  <ul class="list-inline col-lg-12 col-md-12 col-sm-12 col-12">
                    <li class="col-lg-12 col-md-12 col-sm-12 col-12 font-weight-bold">A</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">A</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">AA</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">AAA</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">AAAA</li>
                  </ul>
                  <ul class="list-inline col-lg-12 col-md-12 col-sm-12 col-12">
                    <li class="col-lg-12 col-md-12 col-sm-12 col-12 font-weight-bold">B</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">B</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">BB</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">BBB</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">BBBB</li>
                  </ul>

                  <ul class="list-inline col-lg-12 col-md-12 col-sm-12 col-12">
                    <li class="col-lg-12 col-md-12 col-sm-12 col-12 font-weight-bold">C</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">C</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">CC</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">CCC</li>
                    <li class="col-lg-3 col-md-4 col-sd-4 col-4">CCCC</li>
                  </ul>
                </div>
              </div>

              <!-- <ul class="col-lg-12 list-inline">
                <li class="col-lg-12 font-weight-bold">A</li>
                <li class="col-lg-3">a</li>
                <li class="col-lg-3">aa</li>
                <li class="col-lg-3">aaa</li>
                <li class="col-lg-3">aaaa</li>
              </ul>
              <ul class="col-lg-12 list-inline">
                <li class="col-lg-12 font-weight-bold">B</li>
                <li class="col-lg-3">b</li>
                <li class="col-lg-3">bb</li>
                <li class="col-lg-3">bbb</li>
                <li class="col-lg-3">bbbb</li>
              </ul>
              <ul class="col-lg-12 list-inline">
                <li class="col-lg-12 font-weight-bold">c</li>
                <li class="col-lg-3">c</li>
                <li class="col-lg-3">cc</li>
                <li class="col-lg-3">ccc</li>
                <li class="col-lg-3">cccc</li>
              </ul>-->
            </div>

            <!--category list-->
            <ul v-if="CategoryView && !show_product_list" class="list-inline category-list-ul">
              <li class="col-lg-3 col-md-4 col-sm-6 col-6" v-for="item in 8" :key="item.id">
                <nuxt-link to="?c=1">
                  <div class="category-name">MEAT</div>
                  <img src="../../assets/images/cate-img.png" alt />
                </nuxt-link>
              </li>
            </ul>
            <!--product by category/subcategory list-->

            <ul
              v-else-if="ProductsListCategoryView || show_product_list"
              class="list-inline products-by-category-list-ul col-lg-12"
            >
              <li v-if="BrandsListView == 2" class="brand-row col-lg-12">
                <div class>
                  <img class="brand-logo" src="../../assets/images/brand-logo.png" alt />
                </div>
                <div class>
                  Pigs by Savoury Choice farm in Alberta, Canada are nourished
                  by the crisp, clean water running down from the Rocky
                  Mountains and nutritious barley, peas, wheat, soy, minerals,
                  and vitamins from the region, with no animal matter fed to
                  them, ever. The common feed additive Ractopamine is never used
                  and only a minimal amount of antibiotics are used. In fact,
                  according to the Canadian Food Inspection Agency’s (CFIA)
                  standards, there are no regulatory antibiotic residues found
                  in any of our premium pork products.
                </div>
              </li>
              <li
                v-for="(item, index) in 10"
                :key="item.id"
                class="col-lg-3 col-md-4 col-sm-6 col-6"
              >
                <div
                  class="product-mouseover-view"
                  :class="{ active: mouseOverProduct === 'p' + index }"
                  @mouseleave="mouseOverProduct = ''"
                >
                  <a class="wish-heart-icon" href="javascript:void(0);"></a>
                  <a
                    class="product-name"
                    href="javascript:void(0);"
                    @click="
                      show_lightbox = true;
                      mouseOverProduct = '';
                    "
                  >Tail</a>

                  <div class="product-slide-show">
                    <VueSlickCarousel
                      :arrows="false"
                      :dots="true"
                      :edgeFriction="0.35"
                      :speed="500"
                      :slidesToShow="1"
                    >
                      <!-- @click="
                          show_lightbox = true;
                          mouseOverProduct = '';
                      "-->
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="slick-click-a"
                          @click="
                            show_lightbox = true;
                            mouseOverProduct = '';
                          "
                        ></a>
                        <!-- <a href="javascript:void(0);"> -->
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-1.jpg"
                          alt
                        />
                        <!-- </a> -->
                      </div>
                      <!-- <a
                        href="javascript:void(0);"
                        @click="
                          show_lightbox = true;
                          mouseOverProduct = '';
                        "
                      >
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-2.jpg"
                          alt
                        />
                      </a>
                      <a
                        href="javascript:void(0);"
                        @click="
                          show_lightbox = true;
                          mouseOverProduct = '';
                        "
                      >
                        <img
                          class="slideshow-img-small"
                          src="../../assets/images/product-photo-3.jpg"
                          alt
                        />
                      </a>-->
                    </VueSlickCarousel>
                  </div>

                  <a
                    href="javascript:void(0);"
                    @click="
                      show_lightbox = true;
                      mouseOverProduct = '';
                    "
                  >
                    <ul class="list-inline product-mouseover-view-ul">
                      <li>
                        COUNTRY ORIGIN
                        <div>
                          <img class="flag-icon" src="../../assets/images/flag-icon.jpg" alt />
                        </div>
                      </li>
                      <li>
                        BRAND
                        <div>
                          <img class="brand-icon" src="../../assets/images/brand-icon.jpg" alt />
                        </div>
                      </li>
                      <li>
                        ATTRIBUTE
                        <div>
                          <img
                            class="attribute-icon"
                            src="../../assets/images/attribute-icon.png"
                            alt
                          />
                          <span class="attribute-name">FROZEN</span>
                        </div>
                      </li>

                      <li>
                        PRODUCT TYPE
                        <div class="product-type-name">BEEF</div>
                      </li>

                      <img class="tag" src="../../assets/images/promo-tag.png" alt />
                    </ul>
                  </a>
                </div>

                <div class="white-square-1"></div>
                <div class="white-square-2"></div>

                <a
                  href="javascript:void(0);"
                  @mouseover="
                    mouseOverProduct = '';
                    mouseOverProduct = 'p' + index;
                  "
                  :class="{ active: mouseOverProduct === 'p' + index }"
                >
                  <span class="product-name">Tail</span>
                  <img class="tag" src="../../assets/images/promo-tag.png" alt />
                  <span class="wish-heart-icon"></span>
                  <img class="product-photo" src="../../assets/images/product-photo.jpg" alt />
                </a>
              </li>
            </ul>

            <!--brand list-->
            <ul v-else-if="BrandsListView" class="list-inline brands-list-ul">
              <li v-for="item in 8" :key="item.id" class="col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="white-square-1"></div>
                <div class="white-square-2"></div>
                <nuxt-link to="?c=1&b=2">
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                  <span class="brand-name">Arla</span>
                  <img class="brand-logo" src="../../assets/images/brand-logo.png" alt />
                </nuxt-link>
              </li>
            </ul>
          </td>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import Vuebar from "vuebar";
import $ from "jquery";

export default {
  data() {
    return {
      activeBtn: "",
      mouseOverProduct: "",
      show_lightbox: false,
      show_filter: false,
      show_product_list: false,
      brands_list_view_value: false
    };
  },
  components: {
    // Logo,
    Top,
    Footer,
    BreadCrumb,
    VueSlickCarousel
  },
  computed: {
    CategoryView() {
      return Object.keys(this.$route.query).length == 0 ? true : false;
    },
    ProductsListCategoryView() {
      return this.$route.query.c ? true : false;
    },

    BrandsListView() {
      if (!this.$route.query.b) {
        this.brands_list_view_value = false;
        return this.brands_list_view_value;
      } else {
        this.brands_list_view_value = this.$route.query.b;
        return this.brands_list_view_value;
      }
    }

    // return this.CategoryView;
  },
  methods: {
    mobile_menu_onChange(event) {
      var data_url = event.target.selectedOptions[0].getAttribute("data-url");
      this.$router.push(data_url);
    }
  },
  mounted() {
    function adjust_slide_height() {
      var slide_h =
        $(window).height() -
        $(".top-outer").height() -
        $(".footer-div-outer").height();

      $(
        ".products-content-outer .middle .lightbox .lightbox-content-div"
      ).height(slide_h - 200);

      $(".products-content-outer table").height(slide_h);
    }

    adjust_slide_height();

    $(window).resize(function() {
      adjust_slide_height();
    });
  }
};

// Who-are-we
// What-do-we-do
// Quality-control
// Our-history
// Social responsibility
// Affiliates
</script>

<style>
.vuebar-element3 {
  height: 400px;
  /* width: 100%; */
  /* max-width: 500px; */
  /* background: #dfe9fe; */
}

.affiliates-container .vuebar-element3 {
  /* height: 200px !important; */
}
.affiliates-container .vb > .vb-dragger {
  right: 0;
  left: auto;
}

.left-col .vuebar-element3 {
  padding: 0 0 0 35px;
}
.right-col .vuebar-element3 {
  /* padding: 0 35px 0 0; */
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  left: 0;
}
/* .left-col .vuebar-element3 .vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  left: 0;
} */
.right-col .vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
  left: auto;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  /* background-color: rgba(200, 173, 105, 0.7); */
  background-color: rgba(200, 173, 105, 0.7);

  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(200, 173, 105, 0.7);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(200, 173, 105, 1);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  /* background-color: rgba(48, 121, 244, 0.5); */
  background-color: rgba(200, 173, 105, 1);

  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(200, 173, 105, 1);
}
</style>
