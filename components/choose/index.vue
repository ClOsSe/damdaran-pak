<template>
  <div>
    <div class="choose-area pt-100 pb-70">
      <div class="choose-shape">
        <img src="@/assets/img/home-one/choose1.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape3.png" alt="Shape" />
        <img src="@/assets/img/home-one/choose2.png" alt="Shape" />
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="choose-content">
              <div class="row align-items-center">
                <div class="col-sm-6 col-lg-6">
                  <div class="col-lg-12 p-0">
                    <Card :selected="CardInfo[0]" />
                  </div>
                  <div class="col-lg-12 p-0">
                    <Card :selected="CardInfo[1]" />
                  </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <Card :selected="CardInfo[2]" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <WhyYouChooseUs v-bind="WhyUs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./card";
import WhyYouChooseUs from "../cardWithCallToActions";
export default {
  components: {
    Card,
    WhyYouChooseUs
  },
  data() {
    return {
      CardInfo: [
        {
          icon: "bx bx-network-chart",
          title: "ما به شما خدمات با کیفیتی ارائه می دهیم",
          message:
            "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است"
        },
        {
          icon: "bx bx-paper-plane",
          title: "پاسخ سریع و پشتیبانی 24/7",
          message:
            "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است"
        },
        {
          icon: "bx bx-wrench",
          title: "بکارگیری از تجهیزات مدرن و بروز دنیا",
          message:
            "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است"
        }
      ],
      WhyUs: [
        {
          title: "چرا باید ما را انتخاب کنید",
          titr: "دامداران پاک با با بیش از 5 سال تجربه",
          message:
            "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
        }
      ]
    };
  }
};
</script>
