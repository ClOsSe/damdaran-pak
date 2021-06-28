<template>
  <div dir="rtl">
    <section class="about-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 ">
            <AboutUs v-bind="AboutUsInfo" />
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img src="\NEWIMAGES\about-us.jpg" alt="About" />
              <!-- <div class="video-wrap"> -->
              <!-- <a
                  href="https://www.youtube.com/watch?v=Dviu-D3Fijo"
                  class="popup-youtube"
                >
                  <i class="bx bx-play"></i>
                </a> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutUs from "@/components/cardWithCallToActions";
export default {
  components: {
    AboutUs
  },
  data() {
    return {
      AboutUsInfo: {
        title: "درباره ما بیشتر بدانید",
        titr: "دامداران تیتر",
        message:
          "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
      }
    };
  }
};
</script>
