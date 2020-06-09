<template>
  <div>
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :edgeFriction="0.35"
      :speed="500"
      :slidesToShow="1"
    >
      <div>
        <div class="slide-banner-div"></div>
      </div>
      <div>
        <table class="two-cols-slide">
          <tr>
            <td class="left-col">
              <div class="left-col-info">
                <table>
                  <tr>
                    <td>
                      <span class="field field-1 d-inline-block mr-3">ABOUT</span>
                    </td>

                    <td>
                      <span class="field field-2 d-inline-block">
                        <img class="left-col-img" src="~assets/images/angliss-logo.png" alt />
                      </span>
                    </td>
                  </tr>
                </table>

                <span class="field field-3 d-block mt-3">
                  Angliss Hong Kong Food Service Ltd. is one of the region’s
                  primary food importers. Formerly known as the Hong Kong
                  Refrigerating Company Ltd. (HKRco), Angliss Hong Kong has been
                  in business since 1946 and located at the company-owned Kwai
                  Chung premises since 1980. Distribution offices are in
                  Beijing, Tianjin, Shanghai, Hangzhou, Guangzhou, Chengdu,
                  Shenzhen, Haikou, Xi’an, Hunan, Macau, Singapore and Malaysia.
                  Our parent company, Bidcorp Group (Formerly Bidvest), is an
                  international investment holding company.
                </span>
              </div>
            </td>
            <td class="right-col">
              <div class="half-banner-img-outer">
                <!-- <img
                  class="position-absolute"
                  src="~assets/images/half-banner-img.jpg"
                  alt=""
                />-->
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

//  "dots": true,
//   "dotsClass": "slick-dots custom-dot-class",
//   "edgeFriction": 0.35,
//   "infinite": false,
//   "speed": 500,
//   "slidesToShow": 1,
//   "slidesToScroll": 1
import $ from "jquery";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  mounted: function() {
    function adjust_slide_height() {
      var slide_h =
        $(window).height() -
        $(".top-outer").height() -
        $(".footer-div-outer").height();

      $(".slick-slider,.slide-banner-div,.half-banner-img-outer").height(
        slide_h
      );

      $(
        ".mobile .slick-slider,.mobile .slide-banner-div,.mobile .half-banner-img-outer"
      ).css({ height: "auto" });
    }

    adjust_slide_height();

    $(window).resize(function() {
      adjust_slide_height();
    });
  },
  methods: {}
};
</script>
<style>
.slide-banner-div {
  background: url("../assets/images/banner.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 62vh;
  box-shadow: inset 0px 30px 20px -10px rgba(255, 255, 255, 0.6),
    inset 0px -30px 20px -10px rgba(255, 255, 255, 0.6);
}
.mobile .slide-banner-div {
  /* min-height: auto; */
}

.half-banner-img-outer {
  background: url("../assets/images/half-banner-img.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 62vh;
}
.mobile .half-banner-img-outer {
  /* min-height: auto; */
}
</style>
