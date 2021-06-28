<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="تماس با ما" />
    <!-- End Page Title -->

    <!-- Location -->
    <div class="location-area pt-100 pb-70">
      <Location />
    </div>
    <!-- End Location -->

    <!-- Contact -->
    <div class="contact-area pb-100">
      <ContactForm />
    </div>
    <!-- End Contact -->

    <!-- Map -->
    <div class="map-area pb-100">
      <Map />
    </div>
    <!-- End Map -->

    <!-- Subscribe -->
    <div class="subscribe-area">
      <Subscribe />
    </div>
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Location from "@/components/locationCard";
import ContactForm from "@/components/contactForm";
import Map from "@/components/map";
import Subscribe from "@/components/subscribe";
import PageTitleArea from "@/components/PageTitleArea";

export default {
  components: {
    PageTitleArea,
    Loader,
    Location,
    ContactForm,
    Map,
    Subscribe
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
