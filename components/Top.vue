<template>
  <div class="top-outer position-relative">
    <div class="middle">
      <div class="top-div d-inline-block position-relative">
        <div class="lang-div float-left">
          <a href class="active">ENG</a> |
          <a href>繁中</a>
        </div>

        <ul class="right-icons float-right list-inline">
          <li class="d-inline-block">
            <a href="javascript:void(0);" class="heart-icon d-inline-block"></a>
          </li>
          <li class="d-inline-block">
            <a href="javascript:void(0);" class="search-icon d-inline-block"></a>
          </li>
        </ul>
      </div>

      <div class="nav-div text-center">
        <ul class="list-inline d-table" @mouseleave="show_submenu=false">
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <!-- <a href="">ABOUT US</a> -->
            <div class="submenu" v-show="show_submenu" @mouseleave="show_submenu=false">
              <div class="cover"></div>
              <div class="tri"></div>

              <ul>
                <li>
                  <nuxt-link to="/about-us/who-are-we">WHO ARE WE?</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us/what-do-we-do">WHAT DO WE DO & PROVIDE?</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us/quality-control">QUALITY CONTROL</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us/our-history">OUR HISTORY</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us/social-responsibility">SOCIAL RESPONSIBILITY</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us/affiliates">AFFILIATES</nuxt-link>
                </li>
              </ul>
            </div>
            <nuxt-link
              to="/about-us/who-are-we"
              class="about-us-link"
              @mouseenter.native="abc"
            >ABOUT US</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/products" @mouseenter.native="show_submenu=false">PRODUCTS</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <img class="logo" src="~assets/images/angliss-logo.png" alt />
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/media/event" @mouseenter.native="show_submenu=false">MEDIA</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/careers" @mouseenter.native="show_submenu=false">CAREERS</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="#" @mouseenter.native="show_submenu=false">CONTACT US</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      show_submenu: false
    };
  },
  methods: {
    abc() {
      this.show_submenu = true; // show_submenu = true;
    }
  }
};
</script>

