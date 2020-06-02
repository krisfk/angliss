<template>
  <div>
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :edgeFriction="0.35"
      :speed="500"
      :slidesToShow="1"
    >
      <div style="background:#f00;">
        <div class="slide-img-div">1</div>
        <!-- <img
          class="banner d-inline-block"
          src="~assets/images/banner.jpg"
          alt=""
        /> -->
      </div>

      <div>
        <!-- <table class="two-cols-slide">
          <tr>
            <td class="left-col">
              <div class="left-col-info">
                <table>
                  <tr>
                    <td>
                      <span class="field field-1 d-inline-block mr-3"
                        >ABOUT</span
                      >
                    </td>

                    <td>
                      <span class="field field-2  d-inline-block">
                        <img
                          class="left-col-img"
                          src="~assets/images/angliss-logo.png"
                          alt=""
                      /></span>
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
                <img
                  class="position-absolute"
                  src="~assets/images/half-banner-img.jpg"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </table> -->
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

export default {
  name: "MyComponent",
  components: { VueSlickCarousel }
};
</script>
<style></style>

<script>
//some jquery code here
// $(function() {});
</script>
