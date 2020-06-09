<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="lightbox wishlist" v-show="show_lightbox">
      <div class="lightbox-content-div text-left">
        <a
          href="javascript:void(0);"
          class="close-lightbox-btn"
          @click="show_lightbox = false"
        ></a>
        <div v-if="show_form == 'enquiry-form'">
          <div>
            Thank you for your enquiry! Please provide the following contact
            information for us. Our sales team will review your request and get
            back to you as soon as possible.
          </div>

          <form action="">
            <table class="lightbox-form-table">
              <tr>
                <td class="left-col">Contact Person</td>
                <td class="right-col"><input type="text" /></td>
              </tr>
              <tr>
                <td class="left-col">Email Address</td>
                <td class="right-col"><input type="text" /></td>
              </tr>
              <tr>
                <td class="left-col">Phone Number</td>
                <td class="right-col"><input type="text" name="" /></td>
              </tr>
              <tr>
                <td class="left-col">Message</td>
                <td class="right-col">
                  <textarea
                    class="textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" class="submit-btn" />
                </td>
              </tr>
            </table>
          </form>
        </div>

        <div v-if="show_form == 'email-form'">
          <div>Please provide your contact information as below:</div>
          <form action="">
            <table class="lightbox-form-table">
              <tr>
                <td class="left-col">Contact Person</td>
                <td class="right-col"><input type="text" /></td>
              </tr>
              <tr>
                <td class="left-col">Email Address</td>
                <td class="right-col"><input type="text" /></td>
              </tr>
              <tr>
                <td class="left-col">Phone Number</td>
                <td class="right-col"><input type="text" name="" /></td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input type="submit" class="submit-btn float-right" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>

    <div class="wishlist-content-outer">
      <div class="middle">
        <!--product detail lightbox-->
        <div class="big-heading">WISHLIST</div>

        <table class="order-table">
          <tr>
            <th>PRODUCT</th>
            <th>TYPE</th>
            <th>BRAND</th>
            <th>ORIGIN</th>
            <th>PRODUCT DETAIL</th>
            <th>QTY</th>

            <th>&nbsp;</th>
          </tr>
          <tr v-for="item in 5" :key="item.id">
            <td>
              <div>Guinea Fowl Supreme</div>
              <div>急凍珍珠雞胸</div>
            </td>
            <td>
              <div>Guinea Fowl</div>
              <div>珍珠雞</div>
            </td>
            <td>Savel</td>
            <td>Frane</td>
            <td>360/440g, 16packs</td>
            <td><input type="number" min="1" value="1" class="qty-input" /></td>
            <td><a href="" class="product-cancel-button"></a></td>
          </tr>
        </table>

        <div class="d-inline-block contact-form-buttons-div">
          <ul class="list-inline float-left mt-4">
            <li class="d-inline-block">
              <a
                @click="
                  show_form = 'enquiry-form';
                  show_lightbox = true;
                "
                class="wish-list-enquiry-btn"
                href="javascript:void(0);"
                >Wish List Enquiry</a
              >
            </li>
            <li class="d-inline-block">
              <a
                @click="
                  show_form = 'email-form';
                  show_lightbox = true;
                "
                class="email-wish-list-btn"
                href="javascript:void(0);"
                >Email Wish List</a
              >
            </li>
          </ul>

          <a href="javascript:void(0);" class="clear-list-btn float-right mt-4"
            >Clear list</a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";
import $ from "jquery";
import Vuebar from "vuebar";

// import MediaMenu from "~/components/MediaMenu.vue";

export default {
  data() {
    return {
      show_lightbox: false,
      show_form: "",
      event_id: ""
    };
  },
  components: {
    Top,
    Footer,
    BreadCrumb
    // MediaMenu
  },
  computed: {
    DetailView() {
      if (!this.$route.query.e) {
        this.show_detail_view = false;
        return this.show_detail_view;
      } else {
        this.show_detail_view = true;
        return this.show_detail_view;
      }
    }
  },
  methods: {},
  mounted() {
    if (!this.content) {
      //   this.$router.push("about-us/who-are-we");
    }

    function adjust_slide_height() {
      // var slide_h =
      //   $(window).height() -
      //   $(".top-outer").height() -
      //   $(".footer-div-outer").height();
      // $(".wishlist-content-outer").height(slide_h - 40);
      // $(".careers.lightbox .lightbox-content-div").height(slide_h - 200);
      // $(".vuebar-element").height(slide_h - 250);
    }

    adjust_slide_height();

    $(window).resize(function() {
      adjust_slide_height();
    });
  }
};
</script>

<style scope>
/* .af-logo {
  width: 224px;
} */
.vuebar-element {
  text-align: left;

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
  /* padding: 0 0 0 35px; */
}
.right-col .vuebar-element {
  /* padding: 0 35px 0 0; */
}

.lightbox.careers .vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
  left: auto;
}
/* .left-col .vuebar-element .vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  left: 0;
} */
.vb > .vb-dragger {
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
