<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Banner -->
    <Banner />
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
import generalAPI from "@/API/asyncAPI/generalAPI";
// import commentsAPI from '@/API/API/commentsAPI.js'

export default {
  layout: "dafault",
  async asyncData() {
    // getAllcomments();
    // async function getAllcomments (slug) {
    // let Comments = await commentsAPI.getAllcomments('').then((AllComments)=>{
    // console.log(AllComments)
    // this.AllComments = AllComments;
    // return AllComments
    // })
    // return {Comments}
    // }
  },
  data() {
    return {};
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
    this.getSocialMediaLink();
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },
  methods: {
    // getSocialMedia Link
    getSocialMediaLink() {
      generalAPI
        .getGeneralInformation()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
