<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="lightbox careers" v-show="show_lightbox">
      <div class="lightbox-content-div">
        <a
          href="javascript:void(0);"
          class="close-lightbox-btn"
          @click="show_lightbox = false"
        ></a>
        <div class="big-heading gold">SALES MANAGER</div>
        <div class="vuebar-element" v-bar>
          <div>
            Responsibility:
            <br />．Customer Service Hotline Management <br />．Effectively
            Placing, preparing and following up customers daily orders
            <br />．Liaise and Maintain relationship with customer procurement
            team <br />．Support Senior management with periodic reports
            <br />．To effectively communicate latest information with relations
            to the departments' <br />developments, order and inventory status,
            as well as other customer-relative issues with divisional members
            such as sales team and logistic
            <br />
            <br />Requirement: <br />．Strong Customer Service skills to keep a
            good liaison with existing and future clients. <br />．Proactive,
            organized and forward thinking <br />．Self motivated and able to
            work under pressure <br />．Excellent interpersonal and
            communication skills in both English and Chinese. <br />．Knowledge
            in food and food science is a plus <br />．Good with MS Office and
            PC skills <br />．2 years working experience or Undergraduate and
            fresh Graduate in business admin and related equivalent are welcome
            <br />
            <br />
            <span class="remark">
              We offer competitive salary packages that include attractive
              target based commission, medical insurance, generous staff
              discount and more. Interested candidates please send your resume
              with salary expectation by email to:
              <br />Ms. Janice Cheung –
              <a href="mailto:janice.c@angliss.com.mo"
                >Janice.c@angliss.com.mo</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="careers-content-outer">
      <div class="middle">
        <!--product detail lightbox-->

        <table>
          <td class="left-col">
            <div class="big-heading">CAREER</div>

            <!-- <MediaMenu /> -->
          </td>
          <td class="right-col col-lg-12">
            <ul
              v-for="item in 4"
              :key="item.id"
              class="team-list-ul list-inline col-lg-6"
            >
              <li class="team-name">
                <a href="javascript:void(0)" @click="show_lightbox = true"
                  >SALES TEAM</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox = true"
                  >SALES MANAGER</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox = true"
                  >SALES SUPERVISOR</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox = true"
                  >SALES EXECUTIVE</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox = true"
                  >SALES TRAINEE</a
                >
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
import $ from "jquery";
import Vuebar from "vuebar";

// import MediaMenu from "~/components/MediaMenu.vue";

export default {
  data() {
    return {
      show_lightbox: false,
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
      var slide_h =
        $(window).height() -
        $(".top-outer").height() -
        $(".footer-div-outer").height();

      $(".careers-content-outer table").height(slide_h - 40);
      $(".careers.lightbox .lightbox-content-div").height(slide_h - 200);
      $(".vuebar-element").height(slide_h - 250);
    }

    adjust_slide_height();

    $(window).resize(function() {
      adjust_slide_height();
    });
  }
};
</script>

<style scope>
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
