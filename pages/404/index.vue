<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Error -->
    <div class="error-area">
      <div class="error-item">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="error-img">
                <img src="@/assets/NEWIMAGES/404-error.jpg" alt="Error" />
                <img src="@/assets/img/error-shape1.png" alt="Shape" />
                <img src="@/assets/img/error-shape2.png" alt="Shape" />
                <img src="@/assets/img/error-shape3.png" alt="Shape" />
              </div>
              <h1>404</h1>
              <p>صفحه یافت نشد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Error -->

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
  </div>
</template>
<script>
import Loader from "@/components/loader";
export default {
  components: {
    Loader
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
