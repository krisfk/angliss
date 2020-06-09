<template>
  <div>
    <div class="media-menu mobile">
      <select @change="mobile_menu_onChange($event)">
        <option value="Event" data-url="event">Event</option>
        <option value="Event - Year : 2019" data-url="event"
          >- Year : 2019</option
        >
        <option value="Event - Year : 2018" data-url="event"
          >- Year : 2018</option
        >
        <option value="Event - Year : 2017" data-url="event"
          >- Year : 2017</option
        >
        <option value="Foodtalk" data-url="foodtalk">Foodtalk</option>
        <option value="Foodtalk - Year : 2019" data-url="foodtalk"
          >- Year : 2019</option
        >
        <option value="Foodtalk - Year : 2018" data-url="foodtalk"
          >- Year : 2018</option
        >
        <option value="Foodtalk - Year : 2017" data-url="foodtalk"
          >- Year : 2017</option
        >
        <option value="Video" data-url="video">Video</option>
        <option value="Video - Year : 2019" data-url="video"
          >- Video : 2019</option
        >
        <option value="Video - Year : 2018" data-url="video"
          >- Video : 2018</option
        >
        <option value="Video - Year : 2017" data-url="video"
          >- Video : 2017</option
        >
        <option value="Catalogues" data-url="catalogues">Catalogues</option>
        <option
          value="Catalogues - MEAT (CHILLED & FROZEN BEEF)"
          data-url="catalogues"
          >- MEAT (CHILLED & FROZEN BEEF)</option
        >
        <option
          value="Catalogues - MEAT (CHILLED & FROZEN BEEF)"
          data-url="catalogues"
          >- MEAT (CHILLED & FROZEN BEEF)</option
        >
        <option
          value="Catalogues - MEAT (CHILLED & FROZEN BEEF)"
          data-url="catalogues"
          >- MEAT (CHILLED & FROZEN BEEF)</option
        >

        <option value="Edm" data-url="edm">Edm</option>
        <option value="Edm - Year : 2019" data-url="edm">- Edm : 2019</option>
        <option value="Edm - Year : 2018" data-url="edm">- Edm : 2018</option>
        <option value="Edm - Year : 2017" data-url="edm">- Edm : 2017</option>
      </select>
    </div>
    <ul class="products-menu media-menu pc">
      <li>
        <nuxt-link to="event">
          <img
            class="point-arrow"
            src="../assets/images/product-menu-point.png"
            alt
          />
          EVENT
        </nuxt-link>
        <table
          class="left-menu-table"
          :class="{ active: content === 'media-event' }"
        >
          <tr>
            <td>YEAR</td>
            <td>
              <ul>
                <li class="active">
                  <img
                    class="point-arrow"
                    src="../assets/images/product-menu-point.png"
                    alt
                  />
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
          <img
            class="point-arrow"
            src="../assets/images/product-menu-point.png"
            alt
          />
          <img
            class="foodtalk-icon"
            src="../assets/images/foodtalk-icon.png"
            alt
          />
          <table
            class="left-menu-table"
            :class="{ active: content === 'media-foodtalk' }"
          >
            <tr>
              <td>YEAR</td>
              <td>
                <ul>
                  <li class="active">
                    <img
                      class="point-arrow"
                      src="../assets/images/product-menu-point.png"
                      alt
                    />
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
          <img
            class="point-arrow"
            src="../assets/images/product-menu-point.png"
            alt
          />
          VIDEO
          <table
            class="left-menu-table"
            :class="{ active: content === 'media-video' }"
          >
            <tr>
              <td>YEAR</td>
              <td>
                <ul>
                  <li class="active">
                    <img
                      class="point-arrow"
                      src="../assets/images/product-menu-point.png"
                      alt
                    />
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
          <img
            class="point-arrow"
            src="../assets/images/product-menu-point.png"
            alt
          />
          CATALOGUES
          <table
            class="left-menu-table catalogues"
            :class="{ active: content === 'media-catalogues' }"
          >
            <tr>
              <td>
                <ul style="list-style-type:disc">
                  <li class="active" v-for="item in 4" :key="item.id">
                    <nuxt-link to="#" class
                      >MEAT (CHILLED & FROZEN BEEF)</nuxt-link
                    >
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="edm">
          <img
            class="point-arrow"
            src="../assets/images/product-menu-point.png"
            alt
          />
          EDM
          <table
            class="left-menu-table"
            :class="{ active: content === 'media-edm' }"
          >
            <tr>
              <td>YEAR</td>
              <td>
                <ul>
                  <li class="active">
                    <img
                      class="point-arrow"
                      src="../assets/images/product-menu-point.png"
                      alt
                    />
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
  </div>
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
  },
  methods: {
    mobile_menu_onChange(event) {
      var data_url = event.target.selectedOptions[0].getAttribute("data-url");
      this.$router.push(data_url);
    }
  }
};
</script>

<style></style>
