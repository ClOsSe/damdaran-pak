<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="ثبت سفارش" />
    <!-- End Page Title -->
    <div>
      <RegisterOrderForm />
    </div>

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import RegisterOrderForm from "@/components/registerOrderForm";
import Subscribe from "@/components/subscribe";
import PageTitleArea from "@/components/PageTitleArea";

export default {
  components: {
    PageTitleArea,
    Loader,
    RegisterOrderForm,
    Subscribe
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
