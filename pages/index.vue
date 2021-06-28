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
    <Estimate :selected="sliderCommetns" />
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
import getCommentsForSlider from "@/API/asyncAPI/slider.js";

export default {
  layout: "dafault",
  async asyncData() {
    // slider
    let getBannerInformation = await GeneralAPI.getGeneralInformation()
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });

    let sliderCommetns = await getCommentsForSlider
      .getCommentsForSlider()
      .then(res => {
        return res.data.data;
      });
    return { getBannerInformation: getBannerInformation.data, sliderCommetns };
  },

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
