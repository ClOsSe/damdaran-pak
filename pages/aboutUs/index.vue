<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="در باره ما" />
    <!-- End Page Title -->

    <!--  aboutUs content -->
    <section v-html="getBannerInformation"></section>
    <!-- end aboutUs content -->

    <!-- Counter -->
    <Counter />
    <!-- End Counter -->

    <!-- Watch -->
    <!-- <section class="watch-area ptb-100">
      <div class="container">
        <div class="section-title">
          <h2>برای آشنایی بیشتر با ما ، ویدیو را مشاهده کنید</h2>
        </div>
        <div class="watch-item">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="video-wrap">
                <a
                  href="https://www.youtube.com/watch?v=Dviu-D3Fijo"
                  class="popup-youtube"
                >
                  <i class="bx bx-play"></i>
                </a>
              </div>
              <div class="watch-content">
                <h3>ما کارمان را دوست داریم</h3>
                <p>
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Watch -->

    <!-- Love -->
    <!-- <section class="love-area pb-100">
      <div class="container">
        <div class="love-item">
          <div class="section-title" style="text-align:right">
            <h2>چگونه کار می کند</h2>
          </div>
          <p>
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
            بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
            لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
            سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
            استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در
            بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم
            ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به
            مدت 40 سال استاندارد صنعت بوده است.
          </p>
          <p>
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
            بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
            لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
          </p>
          <ul>
            <li>
              <i class="bx bx-check"></i>
              کارکنان با تجربه و حرفه ای
            </li>
            <li>
              <i class="bx bx-check"></i>
              رضایت 100% مشتریان
            </li>
            <li>
              <i class="bx bx-check"></i>
              پاسخ سریع و پشیبانی 24/7
            </li>
            <li>
              <i class="bx bx-check"></i>
              صرفه جویی در زمان
            </li>
          </ul>
        </div>
      </div>
    </section> -->
    <!-- End Love -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import PageTitleArea from "@/components/PageTitleArea";
import Loader from "@/components/loader";
import Counter from "@/components/counter";
import Subscribe from "@/components/subscribe";

export default {
  async asyncData(context) {
    let getBannerInformation = context.store.state.AllSetting.data.about_us;
    return { getBannerInformation };
  },
  components: {
    PageTitleArea,
    Loader,
    Counter,
    Subscribe
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
