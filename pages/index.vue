<template>
  <div class="container">
    <Top />

    <Slide />

    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import Slide from "~/components/Slide.vue";

export default {
  components: {
    Logo,
    Top,
    Footer,
    Slide
  }
};
</script>
