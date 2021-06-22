<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="title-item">
              <h2>سوالات متداول</h2>
              <ul>
                <li>
                  <NuxtLink to="/">صفحه اصلی</NuxtLink>
                </li>
                <li>
                  <i class="bx bx-chevrons-left"></i>
                </li>
                <li>
                  <span>سوالات متداول</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- End Page Title -->


    <!-- FAQ -->
    <div class="faq-area ptb-100">
      <Faq />
    </div>
    <!-- End FAQ -->


    <!-- Subscribe -->
    <div class="subscribe-area">
      <div class="subscribe-wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>در خبرنامه ما عضو شوید</h2>
              </div>
            </div>
            <div class="col-lg-6">
              <form class="newsletter-form" data-toggle="validator">
                <input
                  type="email"
                  class="form-control"
                  placeholder="آدرس ایمیل شما"
                  name="EMAIL"
                  required
                  autocomplete="off"
                />

                <button class="btn cmn-btn" type="submit">
                  مشترک شدن
                </button>
                <div id="validator-newsletter" class="form-result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";

import Faq from "@/components/faq";

 

export default {
  data() {
    return {
      activIndex:10
    };
  },

  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },

  components: {
    Loader,
    Faq
  },
 
};
</script>


<style scoped>
.block {
  display: block !important;
}
.none{
  display: none !important;
}
.ggg{
  display: block !important;
}
</style>

