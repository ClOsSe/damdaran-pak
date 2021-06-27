<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Banner -->
    <Banner :selected="getBannerInformation" />
    <!-- end Banner -->

    <!-- Counter -->
    <Counter />
    <!-- End Counter -->

    <!-- Choose -->
    <Choose />
    <!-- End Choose -->

    <!-- About -->
    <About />
    <!-- End About -->

    <!-- Review -->
    <RegisterOrder />
    <!-- End Review -->

    <!-- Estimate -->
    <!-- <Estimate v-show="Comments" -->
    <!-- :selected="Comments" -->
    <!-- /> -->
    <!-- End Estimate -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Counter from "../components/counter";
import Choose from "../components/choose";
import About from "../components/about";
import Estimate from "../components/Estimate";
import RegisterOrder from "../components/registerOrderForm";
import Subscribe from "../components/subscribe";
import Loader from "../components/loader";
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  layout: "dafault",
  async asyncData() {
    // slider

    const getBannerInformation = await GeneralAPI.getGeneralInformation()
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });
    return { getBannerInformation: getBannerInformation.data };
  },
  data() {},
  components: {
    Banner,
    Loader,
    Counter,
    Choose,
    About,
    Estimate,
    RegisterOrder,
    Subscribe
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
