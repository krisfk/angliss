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
        <ul class="list-inline d-table">
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <!-- <a href="">ABOUT US</a> -->
            <nuxt-link to="/about-us/who-are-we">ABOUT US</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <nuxt-link to="/products">PRODUCTS</nuxt-link>
          </li>
          <li class="d-inline-block align-bottom">
            <img class="logo" src="~assets/images/angliss-logo.png" alt />
          </li>
          <li class="d-inline-block align-bottom">
            <a href>MEDIA</a>
          </li>
          <li class="d-inline-block align-bottom">
            <a href>CAREERS</a>
          </li>
          <li class="d-inline-block align-bottom">
            <a href>CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
