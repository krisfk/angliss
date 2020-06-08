<template>
  <div id="main-container" :class="{ mobile: mobile_version }">
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
export default {
  data() {
    return {
      mobile_version: false,
      browser: ""
    };
  },
  methods: {
    onResize() {
      if (process.client) {
        let width = window.innerWidth;
        const deviceType = this.$ua.deviceType();
        // if(smartphone=='smartphone')

        this.mobile_version =
          width <= 590 && deviceType == "smartphone" ? true : false;
        // if (width > 590) {
        //   this.mobile_version = false;
        // } else {

        //   this.mobile_version = true;
        // }
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
    // this.switch_mobile_menu();
    // this.deviceType = deviceType;

    // console.log(this.checkBrowser);
  }
};
</script>
