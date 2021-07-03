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
import PageTitleArea from "@/components/pageTitleArea";

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
  },
  data() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "Description",
          content: this.pageDescription
        }
      ]
    };
  },
  head() {
    return {
      pageTitle: "خرید و سفارش انواع گوسفند و دام‌های گوشتی| دام سبز",
      pageDescription:
        "برای خرید و سفارش گوسفند با کیفیت و انواع دام گوشتی، با شماره‌های زیر در تماس باشید. شعبه‌ی ملاصدرا:02188699125 شعبه‌ی شهر زیبا: 02144749671"
    };
  }
};
</script>
