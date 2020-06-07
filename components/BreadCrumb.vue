<template>
  <div class="breadcrumb-div position-relative">
    <div class="middle">
      <!-- (item, index) -->

      <span v-for="(path, index) in path_slug_arr" :key="path.id">
        <span v-if="index == 0">
          <nuxt-link to="../">
            <img class="house-icon" src="../assets/images/house-icon.png" alt />
          </nuxt-link>
        </span>

        <span v-if="index > 0">
          <img
            class="breadcrumb-arrow-icon"
            src="../assets/images/breadcrumb-arrow.png"
            alt
          />

          <nuxt-link :to="'..' + path_url_arr[index]">{{
            path_name_arr[index]
          }}</nuxt-link>
        </span>

        <!-- <img class="breadcrumb-arrow-icon" src="../assets/images/breadcrumb-arrow.png" alt /> -->
      </span>

      <!-- <img class="house-icon" src="../assets/images/house-icon.png" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      path_slug_arr: [],
      path_url_arr: [],
      path_name_arr: [""]
    };
  },
  mounted: function() {
    var path_name_arr = [""];
    var path_url_arr = [];

    var full_path = this.$route.fullPath;
    var tmp_arr = full_path.split("?");
    if (tmp_arr.length > 1) {
      full_path = tmp_arr[0];
    }
    var path_slug_arr = full_path.split("/");

    for (var i = 0; i < path_slug_arr.length; i++) {
      if (i == 0) {
        path_url_arr.push(path_slug_arr[i]);
      } else {
        path_url_arr.push(path_slug_arr[i - 1] + "/" + path_slug_arr[i]);
      }
    }

    path_url_arr[path_url_arr.length - 1] =
      "/" + path_url_arr[path_url_arr.length - 1];

    this.path_url_arr = path_url_arr;

    switch (path_slug_arr[1]) {
      case "about-us":
        path_name_arr.push("About us");
        break;
      case "products":
        path_name_arr.push("Products");
      case "media":
        path_name_arr.push("Media");
        break;
      case "contact-us":
        path_name_arr.push("Contact Us");
        break;
      case "wish-list":
        path_name_arr.push("Wish List");
        break;
    }

    this.path_slug_arr = path_slug_arr;

    // var slug = this.$route.params.about_info;
    var slug = path_slug_arr[path_slug_arr.length - 1];

    switch (slug) {
      case "who-are-we":
        this.title = "Who we are";
        break;
      case "what-do-we-do":
        this.title = "What do we do & provide";
        break;
      case "quality-control":
        this.title = "Quality Control";
        break;
      case "our-history":
        this.title = "Our history";
        break;
      case "social-responsibility":
        this.title = "Social Responsibility";
        break;
      case "affiliates":
        this.title = "Affiliates";
        break;
      case "event":
        this.title = "Event";
        break;
      case "foodtalk":
        this.title = "Foodtalk";
        break;
      case "video":
        this.title = "Video";
        break;
      case "catalogues":
        this.title = "Catalogues";
        break;

      case "edm":
        this.title = "Edm";
        break;
      case "careers":
        this.title = "Careers";
        break;
    }

    path_name_arr.push(this.title);
    this.path_name_arr = path_name_arr;
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style></style>
