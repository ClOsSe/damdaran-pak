<template>
  <div dir="rtl">
        <!-- Preloader -->
        <div class="loader" >
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
        <Estimate />
        <!-- End Estimate -->
        
        <!-- Subscribe -->
        <Subscribe />
        <!-- End Subscribe -->
  </div>
</template>

<script>
import Banner from "../components/Banner"
import Counter from '../components/counter'
import Choose from '../components/choose'
import About from '../components/about'
import Estimate from '../components/Estimate'
import RegisterOrder from '../components/registerOrderForm'
import Subscribe from '../components/subscribe'
import Loader from '../components/loader'

export default {
  components:{
      Banner,
      Loader,
      Counter,
      Choose,
      About,
      Estimate,
      RegisterOrder,
      Subscribe
  }, mounted(){
        setTimeout(() => {
            document.querySelector(".loader").style.display="none"
        }, 1000);
    }
 

 }
</script>

<style>

</style>
