<template>
  <Header />
  <Banner />
  <DevelopmentProcess />
  <CoreServices />
  <WeDeliver />
  <Technologies />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import DevelopmentProcess from "./components/DevelopmentProcess.vue";
import CoreServices from "./components/CoreServices.vue";
import WeDeliver from "./components/WeDeliver.vue";
import Technologies from "./components/Technologies.vue";

export default {
  components: {
    Header,
    Banner,
    DevelopmentProcess,
    CoreServices,
    WeDeliver,
    Technologies,
  },
};
</script>
