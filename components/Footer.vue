<template>
  <div class="footer-div-outer" :class="is_home">
    <div class="footer-div d-block">
      <div class="middle">
        <ul class="list-inline text-center">
          <li>
            <a href class="fb-icon d-inline-block">
              <img src="~/assets/images/footer-icon-1.png" alt />
            </a>
          </li>
          <li>
            <a href class="yt-icon d-inline-block">
              <img src="~/assets/images/footer-icon-2.png" alt />
            </a>
          </li>
          <li>
            <a href class="ig-icon d-inline-block">
              <img src="~/assets/images/footer-icon-3.png" alt />
            </a>
          </li>
          <li>
            <a href class="ln-icon d-inline-block">
              <img src="~/assets/images/footer-icon-4.png" alt />
            </a>
          </li>
        </ul>

        <ul class="additional-info list-inline text-center">
          <li>
            <img class="phone-icon mr-2" src="~/assets/images/phone-icon.png" alt />+853 2886 2886
          </li>
          <li>
            <img class="mail-icon mr-2" src="~/assets/images/mail-icon.png" alt />info@angliss.com.mo
          </li>
        </ul>

        <div class="copyright-sentence text-center">
          COPYRIGHT©2019 ANGLISS MACAU FOOD SERVICE LIMITED. ALL RIGHTS
          RESERVED.｜TERMS OF USE｜PRIVACY POLICY
        </div>

        <nuxt-link to="#" class="bidcorp-logo-a">
          <img class="bidcorp-logo" src="~/assets/images/bidcorp-logo.png" alt />
        </nuxt-link>
      </div>
    </div>
    <div class="bottom-div d-block text-center position-relative">
      <div class="grey-overlay position-absolute"></div>

      <nuxt-link to="#" class="bidcorp-logo-a position-relative d-block">
        <img class="bidcorp-logo" src="~/assets/images/bidcorp-logo.png" alt />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: this.$route.name
    };
  },
  computed: {
    is_home() {
      return this.$route.name == "index" ? "is_home" : "not_home";
    }
  },
  created: function() {}
};
</script>
