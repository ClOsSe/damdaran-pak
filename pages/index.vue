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

        <!-- Estimate -->
        <div class="estimate-area ptb-100 mt-5">
            <div class="container">
                <div class="estimate-content">
                    <div class="section-title">
                        <h2>ثبت سفارش</h2>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="نام شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="شماره شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="آدرس شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="موضوع">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea id="your-message" rows="6" class="form-control" placeholder="پیام شما"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="btn cmn-btn">دریافت برنامه</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Estimate -->

        <!-- Review -->
        <RegisterOrder />
        <!-- End Review -->

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
import RegisterOrder from '../components/registerOrder'
import Subscribe from '../components/subscribe'

export default {
  components:{
      Banner,
      Counter,
      Choose,
      About,
      RegisterOrder,
      Subscribe
  }
 }
</script>

<style>

</style>
