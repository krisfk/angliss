
<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="about-content-outer mr-auto ml-auto d-block position-relative">
      <div class="about-content-div" v-if="content =='who-are-we' || !content  ">
        <!-- <nuxt-link to="#" class="up-arrow"></nuxt-link> -->
        <table>
          <tr>
            <td class="left-col img-col">
              <div class="about-content-img"></div>
            </td>
            <td class="right-col">
              <div class="vuebar-element" v-bar>
                <div>
                  <div class="big-heading">WHO ARE WE?</div>
                  <div class="description">
                    Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.
                    <br />
                    <br />Our everyday goal is to provide a wide choice of high quality, nutritious and well-balanced food to meet our client’s needs in Macau. To be our customers' most valued and trusted business partner.
                    <br />
                    <br />We have the global reach and capability to achieve these goals and deliver world-class food and support services in the most efficient way, consistently, daily and, above all, with high quality and safely.
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <nuxt-link to="./what-do-we-do" class="down-arrow"></nuxt-link>
      </div>

      <!---->
      <div v-else-if="content =='what-do-we-do'">
        <div class="about-content-div">
          <nuxt-link to="./who-are-we" class="up-arrow"></nuxt-link>
          <table>
            <tr>
              <td class="left-col">
                <div class="vuebar-element" v-bar>
                  <div>
                    <div class="big-heading">
                      WHAT DO WE DO &
                      PROVIDE?
                    </div>
                    <div class="description">
                      65 years in the food trading business has taught us that staying relevant to our customers is as important as supplying them with fresh food. With a rising demand for quality customer service, we recognize that we have to reposition ourselves to lead that change in the food trade.
                      <br />
                      <br />
                      <div class="sub-heading">SERVING THOSE WHO SERVE GREAT FOOD</div>We love food and the people who serve food. Angliss Macau wants to be that reliable ‘extra pair of hands’ committed to serving the people who serve others.
                      <br />
                      <br />
                      <div class="sub-heading">
                        WE DON’T JUST SERVE FOOD
                        WE SERVE PEOPLE.
                      </div>Our wide range of service solutions was created to support any format and size of business. We thrive everyday to improve our services and clients’ needs by:
                      <br />

                      <table class="provide-icon-table">
                        <tr>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="../../assets/images/provide-icon-1.png"
                              alt
                            />
                            <div>Reducing potential costs and improving quality.</div>
                          </td>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="../../assets/images/provide-icon-2.png"
                              alt
                            />
                            <div>Implement the highest Safety, Environmental and Safety standards.</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="../../assets/images/provide-icon-3.png"
                              alt
                            />
                            <div>Taking advantage of our market leading innovation and practices from the world.</div>
                          </td>
                          <td class="text-center">
                            <img
                              class="provide-icon"
                              src="../../assets/images/provide-icon-4.png"
                              alt
                            />
                            <div>Access to the latest food leading brands and food concepts.</div>
                          </td>
                        </tr>
                      </table>

                      <div class="sub-heading gold">OUR SERVICES</div>

                      <div class="sub-heading text-dark">GOODS & SERVICES</div>

                      <ul>
                        <li>Stock of over 2,000 individual SKUs</li>
                        <li>Temperature-tailored cold store catering for a range of product requirements, included: Deep frozen, Chilled, Air-conditioned, Dry</li>
                        <li>Quality control & One-stop shopping service</li>
                        <li>We are the Trend leader and have the Professional Sales & Marketing team</li>
                      </ul>

                      <div class="sub-heading text-dark">OPERATIONAL SUPPORT</div>
                      <ul>
                        <li>Expertise in cold chain management and included the temperature controlled loading area (8°C)</li>
                        <li>State-of-the-art logistics & warehousing and included 8,000MT cold store & over 30 vehicles</li>
                        <li>Professional Food Processing Centre</li>
                      </ul>

                      <div class="sub-heading text-dark">EXPERIENCE & NETWORK</div>
                      <ul>
                        <li>65 years’ experience as a food business in the Hong Kong marketplace</li>
                        <li>Extensive distribution channels (wide customer base) and geographic coverage</li>
                        <li>Strong supplier network & sourcing ability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
              <td class="right-col img-col">
                <div class="about-content-img"></div>
              </td>
            </tr>
          </table>
          <nuxt-link to="./quality-control" class="down-arrow"></nuxt-link>
        </div>
      </div>
      <!---->
      <div v-else-if="content =='quality-control'">
        <div class="about-content-div">
          <nuxt-link to="./what-do-we-do" class="up-arrow"></nuxt-link>
          <table>
            <tr>
              <td class="left-col img-col">
                <div class="about-content-img"></div>
              </td>
              <td class="right-col">
                <div class="big-heading">Quality Control</div>
                <div class="description">
                  Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.
                  <br />
                  <br />Our everyday goal is to provide a wide choice of high quality, nutritious and well-balanced food to meet our client’s needs in Macau. To be our customers' most valued and trusted business partner.
                  <br />
                  <br />We have the global reach and capability to achieve these goals and deliver world-class food and support services in the most efficient way, consistently, daily and, above all, with high quality and safely.
                </div>
              </td>
            </tr>
          </table>
          <nuxt-link to="./our-history" class="down-arrow"></nuxt-link>
        </div>
      </div>
      <!---->
      <div v-else-if="content =='our-history'">
        <div class="about-content-div">
          <nuxt-link to="./quality-control" class="up-arrow"></nuxt-link>
          <table>
            <tr>
              <td class="left-col">
                <div class="big-heading">Our History</div>
                <div class="description">
                  Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.
                  <br />
                  <br />Our everyday goal is to provide a wide choice of high quality, nutritious and well-balanced food to meet our client’s needs in Macau. To be our customers' most valued and trusted business partner.
                  <br />
                  <br />We have the global reach and capability to achieve these goals and deliver world-class food and support services in the most efficient way, consistently, daily and, above all, with high quality and safely.
                </div>
              </td>
              <td class="right-col img-col">
                <div class="about-content-img"></div>
              </td>
            </tr>
          </table>
          <nuxt-link to="./social-responsibility" class="down-arrow"></nuxt-link>
        </div>
      </div>
      <!---->
      <div v-else-if="content =='social-responsibility'">
        <div class="about-content-div">
          <nuxt-link to="./our-history" class="up-arrow"></nuxt-link>
          <table>
            <tr>
              <td class="left-col img-col">
                <div class="about-content-img"></div>
              </td>
              <td class="right-col">
                <div class="big-heading">Social Responsibility</div>
                <div class="description">
                  Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.
                  <br />
                  <br />Our everyday goal is to provide a wide choice of high quality, nutritious and well-balanced food to meet our client’s needs in Macau. To be our customers' most valued and trusted business partner.
                  <br />
                  <br />We have the global reach and capability to achieve these goals and deliver world-class food and support services in the most efficient way, consistently, daily and, above all, with high quality and safely.
                </div>
              </td>
            </tr>
          </table>
          <nuxt-link to="./affiliates" class="down-arrow"></nuxt-link>
        </div>
      </div>
      <!---->
      <div v-else-if="content =='affiliates'">
        <div class="about-content-div">
          <nuxt-link to="./social-responsibility" class="up-arrow"></nuxt-link>

          <div class="affiliates-container">
            <div class="lightbox" v-show="show_af_detail">
              <div class="lightbox-content-div">
                <a href="javascript:void(0);" class="close-lightbox-btn" @click="close_detail"></a>

                <table>
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
                </table>
              </div>
            </div>
            <div class="big-heading">Affiliates</div>

            <ul class="list-inline">
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
              <li class>
                <a href="javascript:void(0);" @click="toggle_lightbox">
                  <img class="af-logo" src="../../assets/images/af-logo-1.png" alt />

                  <span class="read-more-txt gold">READ MORE</span>
                  <img class="more-dots" src="../../assets/images/more-dots.png" alt />
                </a>
              </li>
            </ul>
          </div>

          <!-- <table>
            <tr>
              <td class="left-col">
                <div class="big-heading">Affiliates</div>
                <div class="description">
                  Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.
                  <br />
                  <br />Our everyday goal is to provide a wide choice of high quality, nutritious and well-balanced food to meet our client’s needs in Macau. To be our customers' most valued and trusted business partner.
                  <br />
                  <br />We have the global reach and capability to achieve these goals and deliver world-class food and support services in the most efficient way, consistently, daily and, above all, with high quality and safely.
                </div>
              </td>
              <td class="right-col img-col">
                <div class="about-content-img"></div>
              </td>
            </tr>
          </table>-->
          <!-- <nuxt-link to="#" class="down-arrow"></nuxt-link> -->
        </div>
      </div>

      <div v-else>not found</div>
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
  computed: {
    detail_description_height() {
      // const vuebar_div = document.querySelector(".vuebar-element");
      // var lightbox = document.querySelector(".lightbox-content-div");
      // var lightbox_H = lightbox.offsetHeight;
      // vuebar_div.style.visibility = "visible";
      // return lightbox_H;
    }
  },
  methods: {
    toggle_lightbox() {
      this.show_af_detail = !this.show_af_detail;
      const vuebar_div = document.querySelector(".vuebar-element");

      var middle_container_h = document.querySelector(".affiliates-container")
        .offsetHeight;
      vuebar_div.style.height = middle_container_h - 100 + "px !important";
      document.querySelector(".vuebar-element div").scrollTop = 0;
    },
    close_detail() {
      this.show_af_detail = false;
    }
  },
  mounted: function() {
    if (!this.content) {
      this.$router.push("about-us/who-are-we");
    }

    function adjust_slide_height() {
      var slide_h =
        $(window).height() -
        $(".top-outer").height() -
        $(".footer-div-outer").height();

      $(
        ".about-content-outer,.about-content-div,.about-content-div table,.affiliates-container"
      ).height(slide_h);
      $(".vuebar-element").height(slide_h - 150);
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
