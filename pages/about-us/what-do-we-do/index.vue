<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="about-content-outer mr-auto ml-auto d-block position-relative">
      <!-- <div class="about-content-div" v-if="content =='who-are-we' || !content  "></div> -->

      <!---->
      <div>
        <div class="about-content-div">
          <nuxt-link to="./who-are-we" class="up-arrow"></nuxt-link>
          <table>
            <tr>
              <td class="left-col">
                <div class="vuebar-element" v-bar>
                  <div>
                    <div class="big-heading">
                      WHAT DO WE DO & PROVIDE?
                    </div>
                    <div class="description">
                      65 years in the food trading business has taught us that
                      staying relevant to our customers is as important as
                      supplying them with fresh food. With a rising demand for
                      quality customer service, we recognize that we have to
                      reposition ourselves to lead that change in the food
                      trade.
                      <br />
                      <br />
                      <div class="sub-heading">
                        SERVING THOSE WHO SERVE GREAT FOOD
                      </div>
                      We love food and the people who serve food. Angliss Macau
                      wants to be that reliable ‘extra pair of hands’ committed
                      to serving the people who serve others.
                      <br />
                      <br />
                      <div class="sub-heading">
                        WE DON’T JUST SERVE FOOD WE SERVE PEOPLE.
                      </div>
                      Our wide range of service solutions was created to support
                      any format and size of business. We thrive everyday to
                      improve our services and clients’ needs by:
                      <br />

                      <table class="provide-icon-table">
                        <tr>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="~assets/images/provide-icon-1.png"
                              alt
                            />
                            <div>
                              Reducing potential costs and improving quality.
                            </div>
                          </td>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="~assets/images/provide-icon-2.png"
                              alt
                            />
                            <div>
                              Implement the highest Safety, Environmental and
                              Safety standards.
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="~assets/images/provide-icon-3.png"
                              alt
                            />
                            <div>
                              Taking advantage of our market leading innovation
                              and practices from the world.
                            </div>
                          </td>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="~assets/images/provide-icon-4.png"
                              alt
                            />
                            <div>
                              Access to the latest food leading brands and food
                              concepts.
                            </div>
                          </td>
                        </tr>
                      </table>

                      <div class="sub-heading gold">OUR SERVICES</div>

                      <div class="sub-heading text-dark">GOODS & SERVICES</div>

                      <ul>
                        <li>Stock of over 2,000 individual SKUs</li>
                        <li>
                          Temperature-tailored cold store catering for a range
                          of product requirements, included: Deep frozen,
                          Chilled, Air-conditioned, Dry
                        </li>
                        <li>Quality control & One-stop shopping service</li>
                        <li>
                          We are the Trend leader and have the Professional
                          Sales & Marketing team
                        </li>
                      </ul>

                      <div class="sub-heading text-dark">
                        OPERATIONAL SUPPORT
                      </div>
                      <ul>
                        <li>
                          Expertise in cold chain management and included the
                          temperature controlled loading area (8°C)
                        </li>
                        <li>
                          State-of-the-art logistics & warehousing and included
                          8,000MT cold store & over 30 vehicles
                        </li>
                        <li>Professional Food Processing Centre</li>
                      </ul>

                      <div class="sub-heading text-dark">
                        EXPERIENCE & NETWORK
                      </div>
                      <ul>
                        <li>
                          65 years’ experience as a food business in the Hong
                          Kong marketplace
                        </li>
                        <li>
                          Extensive distribution channels (wide customer base)
                          and geographic coverage
                        </li>
                        <li>Strong supplier network & sourcing ability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
              <td class="right-col img-col">
                <div class="about-content-img">
                  <img src="~/assets/images/about-section-img.jpg" alt="" />
                </div>
              </td>
            </tr>
          </table>

          <nuxt-link to="./quality-control" class="down-arrow"></nuxt-link>
        </div>
      </div>
      <!---->
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
      content: this.$route.params.about_info,
      show_af_detail: false,
      title: ""
    };
  },
  components: {
    Logo,
    Top,
    Footer,
    BreadCrumb
  },
  computed: {},
  methods: {},
  mounted: function() {
    function adjust_slide_height() {
      if ($(window).width() > 590) {
        var slide_h =
          $(window).height() -
          $(".top-outer").height() -
          $(".footer-div-outer").height();
        // console.log(slide_h);
        $(
          ".about-content-outer,.about-content-div,.about-content-div table,.affiliates-container"
        ).height(slide_h);
        $(".vuebar-element").height(slide_h - 150);

        // $(
        //   ".mobile .about-content-outer, .mobile  .about-content-div,.mobile .about-content-div table,.mobile .affiliates-container"
        // ).css({ height: "auto" });
        // $(".mobile .vuebar-element").height({ height: "auto" });
      }
    }

    adjust_slide_height();

    $(window).resize(function() {
      adjust_slide_height();
    });
  },
  head() {
    return {
      title: this.title
    };
  }
};

// Who-are-we
// What-do-we-do
// Quality-control
// Our-history
// Social responsibility
// Affiliates
</script>

<style scoped>
.about-content-div table td.left-col {
  padding-right: 50px;
}

.mobile .about-content-outer,
.mobile .about-content-div,
.mobile .about-content-div table,
.mobile .affiliates-container {
  height: auto !important;
}

.mobile .vuebar-element {
  height: auto !important;
}

.mobile .left-col .vuebar-element {
  padding: 0 0 0 0 !important;
}

@media screen and (max-width: 590px) {
  .mobile .left-col .vuebar-element {
    padding: 0 0 0 0 !important;
  }
}

@media screen and (max-width: 1024px) {
  .about-content-div table td.left-col {
    padding: 10px 20px;
  }
}
</style>
<style>
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
  padding: 0 0 0 0;
}

.left-col .vuebar-element {
  /* height: auto !important; */
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
</style>
