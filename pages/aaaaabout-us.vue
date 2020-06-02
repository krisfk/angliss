<template>
  <div class="container">
    <Top />
    <div class="vuebar-element" v-bar>
      <div>
        Their study may one day allow a reconstruction of the history of the
        movement of Earth’s plates — and the processes linked to these movements
        over billions of years, like mass extinction events, diamond and oil
        deposits, and changes in climate. If you were to drill nearly 4,000
        miles into the Earth, you’d reach its core, a ball of solid iron
        surrounded by liquid that scientists estimate is hotter than the sun.
        Before making it there, you’d hit the mantle — an 1,800-mile-thick layer
        of solid rock that can flow like a liquid, just substantially slower.
        This mantle is the reason plates move across the surface. It’s why we
        have continents, earthquakes and volcanoes. The closest anyone ever got
        to the mantle was a seven-mile-deep hole drilled into the crust on a
        peninsula in western Russia. But now we can better understand what’s
        happening below by looking at Mauna Kea and Mauna Loa, said Mr. Jones.
        The prevailing hypothesis has been that volcanoes like these two in
        Hawaii are chemical fingerprints of the Earth’s composition at the deep
        mantle, just at the border of its core. Scientists have seismic evidence
        that the deep part of the mantle is a graveyard where long ago slabs of
        earth were subducted, or thrust underneath one another, creating
        separate regions with different chemical compositions that eventually
        made their way to the surface in a hot mantle plume, or upwelling, as
        the core heated the rock into magma. But that didn’t explain the
        separate tracks along which the volcanoes formed.
      </div>
    </div>
    <div class="vuebar-element" v-bar>
      <div>
        Their study may one day allow a reconstruction of the history of the
        movement of Earth’s plates — and the processes linked to these movements
        over billions of years, like mass extinction events, diamond and oil
        deposits, and changes in climate. If you were to drill nearly 4,000
        miles into the Earth, you’d reach its core, a ball of solid iron
        surrounded by liquid that scientists estimate is hotter than the sun.
        Before making it there, you’d hit the mantle — an 1,800-mile-thick layer
        of solid rock that can flow like a liquid, just substantially slower.
        This mantle is the reason plates move across the surface. It’s why we
        have continents, earthquakes and volcanoes. The closest anyone ever got
        to the mantle was a seven-mile-deep hole drilled into the crust on a
        peninsula in western Russia. But now we can better understand what’s
        happening below by looking at Mauna Kea and Mauna Loa, said Mr. Jones.
        The prevailing hypothesis has been that volcanoes like these two in
        Hawaii are chemical fingerprints of the Earth’s composition at the deep
        mantle, just at the border of its core. Scientists have seismic evidence
        that the deep part of the mantle is a graveyard where long ago slabs of
        earth were subducted, or thrust underneath one another, creating
        separate regions with different chemical compositions that eventually
        made their way to the surface in a hot mantle plume, or upwelling, as
        the core heated the rock into magma. But that didn’t explain the
        separate tracks along which the volcanoes formed.
      </div>
    </div>
    <div class="vuebar-element" v-bar>
      <div>
        Their study may one day allow a reconstruction of the history of the
        movement of Earth’s plates — and the processes linked to these movements
        over billions of years, like mass extinction events, diamond and oil
        deposits, and changes in climate. If you were to drill nearly 4,000
        miles into the Earth, you’d reach its core, a ball of solid iron
        surrounded by liquid that scientists estimate is hotter than the sun.
        Before making it there, you’d hit the mantle — an 1,800-mile-thick layer
        of solid rock that can flow like a liquid, just substantially slower.
        This mantle is the reason plates move across the surface. It’s why we
        have continents, earthquakes and volcanoes. The closest anyone ever got
        to the mantle was a seven-mile-deep hole drilled into the crust on a
        peninsula in western Russia. But now we can better understand what’s
        happening below by looking at Mauna Kea and Mauna Loa, said Mr. Jones.
        The prevailing hypothesis has been that volcanoes like these two in
        Hawaii are chemical fingerprints of the Earth’s composition at the deep
        mantle, just at the border of its core. Scientists have seismic evidence
        that the deep part of the mantle is a graveyard where long ago slabs of
        earth were subducted, or thrust underneath one another, creating
        separate regions with different chemical compositions that eventually
        made their way to the surface in a hot mantle plume, or upwelling, as
        the core heated the rock into magma. But that didn’t explain the
        separate tracks along which the volcanoes formed.
      </div>
    </div>
    <Footer />\
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
// import Slide from "~/components/Slide.vue";

import Vuebar from "vuebar";
// Vue.use(Vuebar);

export default {
  components: {
    Logo,
    Top,
    Footer
  }
};
</script>

<style>
.vuebar-element {
  height: 250px;
  width: 100%;
  max-width: 500px;
  background: #dfe9fe;
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  background-color: rgba(48, 121, 244, 0.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
}
</style>
