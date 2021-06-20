<template>
  <div dir="rtl">
  
        <!-- Preloader -->
        <!-- <div class="loader">
            <div class="d-table">
                <div class="d-table-cell"> 
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                    </div>
                </div>
            </div>
        </div> -->
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

export default {
  components:{
      Banner,
      Counter,
      Choose,
      About,
      Estimate,
      RegisterOrder,
      Subscribe
  }
 }
</script>

<style>

</style>
