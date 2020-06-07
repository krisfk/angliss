<template>
  <div class="container">
    <Top />
    <BreadCrumb />

    <!-- <div class="lightbox careers" v-show="show_lightbox">
      <div class="lightbox-content-div">
        <a href="javascript:void(0);" class="close-lightbox-btn" @click="show_lightbox=false"></a>
        <div class="big-heading gold">SALES MANAGER</div>
        <div class="vuebar-element" v-bar>
          <div>
            Responsibility:
            <br />．Customer Service Hotline Management
            <br />．Effectively Placing, preparing and following up customers daily orders
            <br />．Liaise and Maintain relationship with customer procurement team
            <br />．Support Senior management with periodic reports
            <br />．To effectively communicate latest information with relations to the departments'
            <br />developments, order and inventory status, as well as other customer-relative issues with divisional members such as sales team and logistic
            <br />
            <br />Requirement:
            <br />．Strong Customer Service skills to keep a good liaison with existing and future clients.
            <br />．Proactive, organized and forward thinking
            <br />．Self motivated and able to work under pressure
            <br />．Excellent interpersonal and communication skills in both English and Chinese.
            <br />．Knowledge in food and food science is a plus
            <br />．Good with MS Office and PC skills
            <br />．2 years working experience or Undergraduate and fresh Graduate in business admin and related equivalent are welcome
            <br />
            <br />
            <span class="remark">
              We offer competitive salary packages that include attractive target based commission, medical insurance, generous staff discount and more. Interested candidates please send your resume with salary expectation by email to:
              <br />Ms. Janice Cheung –
              <a href="mailto:janice.c@angliss.com.mo">Janice.c@angliss.com.mo</a>
            </span>
          </div>
        </div>
      </div>
    </div> -->

    <div class="google-map-div">
      <div style="width: 100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.9361245191953!2d113.55541341525539!3d22.204533651974877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017b27c93806f1%3A0xacaa48efcfa5f46d!2z5a6J5b6X5Yip5r6z6ZaA6aOy6aOf5pyN5YuZ5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2suk!4v1591323937934!5m2!1sen!2suk"
          width="100%"
          height="246"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <!-- google-map -->

      <!-- <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </gmap-map> -->
    </div>

    <div class="contact-us-content-outer">
      <div class="middle">
        <div class="left-col">
          <div class="big-heading">CONTACT US</div>

          <div class="company-name">ANGLISS MACAU FOOD SERVICE LIMITED.</div>

          <div class="contact-address">
            200 Rua dos Pescadores, Edf Industrial Ocean II Fase 4-Andar C and
            D, Macau
          </div>

          <div class="contact-info">
            <span class="gold">T</span> +853 2886 2886 <br />
            <span class="gold">F</span> +853 2886 2828 <br />
            <span class="gold">E</span>
            <a href="mailto:info@angliss.com.mo" class="mail"
              >info@angliss.com.mo</a
            >
          </div>
          <div class="gold-line"></div>

          <div class="contact-form-div">
            <form action="" @submit.prevent="submit">
              <table>
                <tr>
                  <td>TO</td>
                  <td class="form-right-col">ANGLISS MACAU</td>
                </tr>
                <tr>
                  <td>NAME</td>
                  <td class="form-right-col">
                    <input type="text" name="name" placeholder="NAME" />
                  </td>
                </tr>
                <tr>
                  <td>EMAIL</td>
                  <td class="form-right-col">
                    <input type="text" name="email" placeholder="EMAIL" />
                  </td>
                </tr>
                <tr>
                  <td>PHONE</td>
                  <td class="form-right-col">
                    <input type="text" name="phone" placeholder="PHONE" />
                  </td>
                </tr>
                <tr>
                  <td>MOBILE</td>
                  <td class="form-right-col">
                    <input type="text" name="mobile" placeholder="MOBILE" />
                  </td>
                </tr>
                <tr>
                  <td>MESSAGE</td>
                  <td class="form-right-col">
                    <input type="text" name="message" placeholder="MESSAGE" />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td class="form-right-col pt-4">
                    <span class="captcha-statement"
                      >PLEASE ENTER THE SECURITY CODE IN THE BOX</span
                    >
                    <br />
                    <span
                      ><img
                        src="http://angliss-layout.emo.com.hk/captcha/captcha-image.php"
                        alt=""
                    /></span>
                    <input
                      class="captcha-input d-inline"
                      type="text"
                      v-model="captcha_input"
                    />
                    <!-- {{ captcha_input }} -->
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
        </div>
        <div class="right-col">
          <div class="gold">BRANCHES CONTACT</div>

          <div>
            <ul class="braches-ul">
              <li class="gold region">CHINA</li>

              <li><a href="javascript:void(0);">Beijing</a></li>
              <li><a href="javascript:void(0);">Changsha</a></li>
              <li><a href="javascript:void(0);">Chengdu</a></li>
              <li><a href="javascript:void(0);">Guangzhou</a></li>
              <li><a href="javascript:void(0);">Haikou</a></li>
              <li><a href="javascript:void(0);">Hangzhou</a></li>
              <li><a href="javascript:void(0);">Hunan</a></li>
            </ul>

            <ul class="braches-ul">
              <li class="region">&nbsp;</li>
              <li><a href="javascript:void(0);">Sanya</a></li>
              <li><a href="javascript:void(0);">Shanghai</a></li>
              <li><a href="javascript:void(0);">Shenyang</a></li>
              <li><a href="javascript:void(0);">Shenzhen</a></li>
              <li><a href="javascript:void(0);">Tianjin</a></li>
              <li><a href="javascript:void(0);">Wuhan </a></li>
              <li><a href="javascript:void(0);">Xi’an </a></li>
            </ul>
          </div>

          <ul class="braches-ul">
            <li class="gold region">HONG KONG</li>
            <li><a href="">HONG KONG</a></li>
          </ul>

          <ul class="braches-ul">
            <li class="gold region">SINGAPORE</li>
            <li><a href="">SINGAPORE</a></li>
          </ul>
        </div>

        <!--product detail lightbox-->

        <!-- <table>
          <td class="left-col">
            <div class="big-heading">CAREER</div>

          </td>
          <td class="right-col col-lg-12">
            <ul v-for="item in 4" :key="item.id" class="team-list-ul list-inline col-lg-6">
              <li class="team-name">
                <a href="javascript:void(0)" @click="show_lightbox=true">SALES TEAM</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox=true">SALES MANAGER</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox=true">SALES SUPERVISOR</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox=true">SALES EXECUTIVE</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="show_lightbox=true">SALES TRAINEE</a>
              </li>
            </ul>
          </td>
        </table>-->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";
// import $ from "jquery";
import Vuebar from "vuebar";

// import MediaMenu from "~/components/MediaMenu.vue";

export default {
  // AIzaSyDmQBuuwSK9n3asNHJj4PMRV-cpzuqH7t8
  // https://snazzymaps.com/style/8306/calm-detailed-grayscale
  data() {
    return {
      captcha_input: ""
      // center: { lat: -3.350235, lng: 111.995865 },
      // mapTypeId: "terrain",
      // markers: [
      //   { position: { lat: -0.48585, lng: 117.1466 } },
      //   { position: { lat: -6.9127778, lng: 107.6205556 } }
      // ]
    };
  },
  methods: {
    submit() {
      //  http://angliss-layout.emo.com.hk/captcha/captcha-image.php
      const ip = this.$axios
        .$get("/api/captcha/check-input-captcha.php?c=" + this.captcha_input)
        .then(function(response) {
          // handle success
          console.log(response);
        });
      //  console.log(ip)
    }
  },
  components: {
    Top,
    Footer,
    BreadCrumb
    // MediaMenu,
  },
  async asyncData({ $axios }) {
    // const captcha = await $axios.$get(
    //   "http://angliss-layout.emo.com.hk/captcha/captcha-image.php"
    // );
    // console.log(55);
    // console.log(captcha);
    // return { ip };
  }
};
</script>
<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>
