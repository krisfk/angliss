
<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <!-- <div class="about-content-outer mr-auto ml-auto d-block position-relative">testtestt</div> -->
    <div class="products-content-outer">
      <div class="middle">
        <table>
          <td class="left-col">
            <div class="big-heading">PRODUCTS</div>

            <ul class="products-menu">
              <li>
                <a
                  href="javascript:void(0);"
                  @click="activeBtn ='';activeBtn='btn1'"
                  :class="{active: activeBtn === 'btn1' }"
                >
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  MEAT
                </a>
                <ul class="subcate-menu" :class="{active: activeBtn === 'btn1' }">
                  <li>
                    <a href="javascript:void(0);">chilled beef</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">frozen beef</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">lamb & mutton</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">pork</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">poultry & game</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="activeBtn ='';activeBtn='btn2'"
                  :class="{active: activeBtn === 'btn2' }"
                >
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  SEAFOOD
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  PASTRY & DAIRY
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  CHEESE
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  VEGETABLES
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  DELI
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  GROCERY
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  ITALIAN SPECIALITY
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  PROMOTIONAL ITEMS
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                  BRANDS
                </a>
              </li>
            </ul>
          </td>
          <td class="right-col">
            <input class="search-product-input" type="text" />

            <div>
              <a class="products-filter-btn" href="javascript:void(0);">
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                CATEGORIES
              </a>
              <a class="products-filter-btn" href="javascript:void(0);">
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                BRANDS
              </a>
              <a class="products-filter-btn" href="javascript:void(0);">
                <img class="point-arrow" src="../../assets/images/product-menu-point.png" alt />
                COUNTRY OF ORIGIN
              </a>
            </div>

            <ul v-if="!ProductsListCategoryView" class="list-inline category-list-ul col-lg-12">
              <li class="col-lg-3">
                <nuxt-link to="?c=1">
                  <div class="category-name">MEAT</div>
                  <img src="../../assets/images/cate-img.png" alt />
                </nuxt-link>
              </li>
              <li class="col-lg-3">
                <nuxt-link to="?c=1">
                  <div class="category-name">MEAT</div>
                  <img src="../../assets/images/cate-img.png" alt />
                </nuxt-link>
              </li>
              <li class="col-lg-3">
                <nuxt-link to="?c=1">
                  <div class="category-name">MEAT</div>
                  <img src="../../assets/images/cate-img.png" alt />
                </nuxt-link>
              </li>
              <li class="col-lg-3">
                <nuxt-link to="?c=1">
                  <div class="category-name">MEAT</div>
                  <img src="../../assets/images/cate-img.png" alt />
                </nuxt-link>
              </li>
            </ul>

            <ul v-if="!ProductsListCategoryView" class="list-inline category-list-ul col-lg-12"></ul>
          </td>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";

import Vuebar from "vuebar";
import $ from "jquery";

export default {
  data() {
    return {
      activeBtn: ""
      // ,
      // CategoryView: false
      // ,ProductsListSubcategoryView: false
    };
  },
  components: {
    Logo,
    Top,
    Footer,
    BreadCrumb
  },
  computed: {
    ProductsListCategoryView() {
      if (this.$route.query.c) {
        return true;
      } else {
        return false;
      }
      // return this.CategoryView;
    }
  },
  mounted() {
    function adjust_slide_height() {
      var slide_h =
        $(window).height() -
        $(".top-outer").height() -
        $(".footer-div-outer").height();

      // $(
      //   ".about-content-outer,.about-content-div,.about-content-div table,.affiliates-container"
      // ).height(slide_h);
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
.af-logo {
  /* width: 50%; */
  width: 224px;
}
.vuebar-element {
  /* height: 250px; */
  /* width: 100%; */
  /* max-width: 500px; */
  /* background: #dfe9fe; */
}

.affiliates-container .vuebar-element {
  /* height: 200px !important; */
}
.affiliates-container .vb > .vb-dragger {
  right: 0;
  left: auto;
}

.left-col .vuebar-element {
  padding: 0 0 0 35px;
}
.right-col .vuebar-element {
  /* padding: 0 35px 0 0; */
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  left: 0;
}
/* .left-col .vuebar-element .vb > .vb-dragger {
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

.about-content-img {
  background: url(../../assets/images/about-section-img.jpg) no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 51vh;
  box-shadow: inset 0px 100px 20px -10px rgba(255, 255, 255, 1),
    inset 0px -100px 20px -10px rgba(255, 255, 255, 1);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
