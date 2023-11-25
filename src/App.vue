<template>
  <div>
    new fixes 2
    <div class="container">
      <the-header />
    </div>
    
    <the-carousel />

    <div class="container" >
      <package-tabs />
    </div>

    <div class="container">
      <the-benefits />

      <the-history />  

      <the-partners />

    </div>

    <the-contacts />

    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/Header.vue";
import TheCarousel from "@/components/Carousel.vue";
import PackageTabs from "@/components/PackageTabs.vue";
import TheBenefits from "@/components/Benefits.vue";
import TheHistory from "@/components/History.vue";
import ThePartners from '@/components/Partners.vue'
import TheContacts from '@/components/Contacts.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    TheCarousel,
    PackageTabs,
    TheBenefits,
    TheHistory,
    ThePartners, 
    TheContacts,
    TheFooter
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

#app {
  font-family: "Mulish", sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
