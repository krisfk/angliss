<template>
  <div class="top-outer position-relative">
    <div class="middle">
      <nuxt-link to="/" class="mobile-logo">
        <img class="logo" src="~assets/images/angliss-logo.png" alt />
      </nuxt-link>

      <div class="top-div d-inline-block position-relative">
        <div class="ham-container" @click="switch_mobile_menu" :class="{mobile : show_menu}">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        <div class="lang-div float-left">
          <a href class="active">ENG</a> |
          <a href>繁中</a>
        </div>

        <ul class="right-icons float-right list-inline">
          <li class="d-inline-block">
            <nuxt-link to="/wish-list" class="heart-icon d-inline-block"></nuxt-link>
          </li>
          <li class="d-inline-block">
            <nuxt-link to="/products" class="search-icon d-inline-block"></nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-div text-center" v-show="show_menu">
        <a href="javascript:void(0);" class="mobile-cross-icon" @click="show_menu=false"></a>
        <ul class="list-inline d-table" @mouseleave="show_submenu = false">
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom about-us-menu-outer-li">
            <!-- <a href="">ABOUT US</a> -->
            <nuxt-link to="/about-us/who-are-we" @mouseenter.native="show_submenu=true">ABOUT US</nuxt-link>

            <div class="submenu" v-show="show_submenu" @mouseleave="show_submenu = false">
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
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/products" @mouseenter.native="show_submenu = false">PRODUCTS</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom logo-li">
            <nuxt-link to="/">
              <img class="logo" src="~assets/images/angliss-logo.png" alt />
            </nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/media/event" @mouseenter.native="show_submenu = false">MEDIA</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/careers" @mouseenter.native="show_submenu = false">CAREERS</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/contact-us" @mouseenter.native="show_submenu = false">CONTACT US</nuxt-link>
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
      show_submenu: false,
      show_menu: false
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
    this.switch_mobile_menu();
  },
  computed: {
    // show_nav() {
    //   if (process.client) { //     let width = window.innerWidth;
    //     console.log(width);
    //     return true;
    //   }
    // }
  },
  methods: {
    switch_mobile_menu() {
      if (process.client) {
        let width = window.innerWidth;
        if (width > 590) {
          this.show_menu = true;
        } else {
          this.show_menu = !this.show_menu;
        }
      }
    },
    onResize() {
      if (process.client) {
        let width = window.innerWidth;

        if (width > 590) {
          this.show_menu = true;
        } else {
          this.show_menu = false;
        }
      }
    }
    // abc() {
    //   this.show_submenu = true; // show_submenu = true;
    // }
    // toggleMenu() {}
  }
};

// function myFunction(x) {
//     x.classList.toggle("change");
//  }
</script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          