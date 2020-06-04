
<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="about-content-outer mr-auto ml-auto d-block position-relative">
      <!---->

      <div>
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
      //   this.$router.push("about-us/who-are-we");
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
  background: url(~assets/images/about-section-img.jpg) no-repeat;
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
