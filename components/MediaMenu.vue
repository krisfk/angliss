<template>
  <ul class="products-menu media-menu">
    <li>
      <nuxt-link to="event">
        <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
        EVENT
      </nuxt-link>
      <table class="left-menu-table" :class="{active : content ==='media-event'}">
        <tr>
          <td>YEAR</td>
          <td>
            <ul>
              <li class="active">
                <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
                <nuxt-link to="#" class="active">2019</nuxt-link>
              </li>
              <li>
                <img
                  class="point-arrow opacity-zero"
                  src="../assets/images/product-menu-point.png"
                  alt
                />
                <nuxt-link to="#">2018</nuxt-link>
              </li>
              <li>
                <img
                  class="point-arrow opacity-zero"
                  src="../assets/images/product-menu-point.png"
                  alt
                />
                <nuxt-link to="#">2017</nuxt-link>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </li>
    <li>
      <nuxt-link to="foodtalk">
        <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
        <img class="foodtalk-icon" src="../assets/images/foodtalk-icon.png" alt />
        <table class="left-menu-table" :class="{active : content ==='media-foodtalk'}">
          <tr>
            <td>YEAR</td>
            <td>
              <ul>
                <li class="active">
                  <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
                  <nuxt-link to="#" class="active">2019</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2018</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2017</nuxt-link>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="video">
        <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
        VIDEO
        <table class="left-menu-table" :class="{active : content ==='media-video'}">
          <tr>
            <td>YEAR</td>
            <td>
              <ul>
                <li class="active">
                  <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
                  <nuxt-link to="#" class="active">2019</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2018</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2017</nuxt-link>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="catalogues">
        <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
        CATALOGUES
        <table class="left-menu-table catalogues" :class="{active : content ==='media-catalogues'}">
          <tr>
            <td>
              <ul style="list-style-type:disc">
                <li class="active" v-for="item in 4" :key="item.id">
                  <nuxt-link to="#" class>MEAT (CHILLED & FROZEN BEEF)</nuxt-link>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="edm">
        <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
        EDM
        <table class="left-menu-table" :class="{active : content ==='media-edm'}">
          <tr>
            <td>YEAR</td>
            <td>
              <ul>
                <li class="active">
                  <img class="point-arrow" src="../assets/images/product-menu-point.png" alt />
                  <nuxt-link to="#" class="active">2019</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2018</nuxt-link>
                </li>
                <li>
                  <img
                    class="point-arrow opacity-zero"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
                  <nuxt-link to="#">2017</nuxt-link>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      content: this.$route.name
    };
  },

  mounted() {
    // console.log(this.$route);
  }
};
</script>

<style>
</style>