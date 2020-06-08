<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <div class="media-content-outer">
      <div class="middle">
        <!--product detail lightbox-->

        <table>
          <td class="left-col">
            <div class="big-heading">MEDIA</div>

            <MediaMenu />
          </td>
          <td class="right-col">
            <ul class="list-inline issue-list-ul col-lg-12">
              <li v-for="item in 12" :key="item.id" class="col-lg-3">
                <a href="#">
                  <div>catalogue title</div>
                  <img
                    class="issue-book-cover"
                    src="~/assets/images/issue-book-cover.jpg"
                    alt
                  />
                </a>
              </li>
            </ul>

            <!-- <ul v-if="!DetailView" class="list-inline">
              
            </ul>

            <div v-if="DetailView" class="event-detail-div">
              <div class="big-heading">GALAXY MACAU 8TH ANNIVERSARY WITH WCF</div>
              <img src="../../../assets/images/event-photo-detail.jpg" alt />
              <div
                class="detail-description"
              >Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.Angliss Macau is a branch of Angliss Hong Kong Food Service Ltd. One of the Asia Pacific Region Market Leaders on food import.</div>
            </div>-->
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
import MediaMenu from "~/components/MediaMenu.vue";

export default {
  data() {
    return {
      show_detail_view: false,
      event_id: ""
    };
  },
  components: {
    Top,
    Footer,
    BreadCrumb,
    MediaMenu
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
  mounted() {}
};
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
</style>
