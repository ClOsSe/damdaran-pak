<template>
  <div>
    <div class="widget-area">
      <div class="search widget-item">
        <!-- <form>
          <input type="text" class="form-control" placeholder="جستجو..." />
          <button type="submit" class="btn">
            <i class="bx bx-search"></i>
          </button>
        </form> -->
      </div>
      <div class="cat widget-item">
        <h3>دسته بندی ها</h3>
        <ul v-for="(item, index) in selected" :key="index">
          <li>
            <NuxtLink to="/blog/category">
              <!-- <i class="bx bxs-car-wash"></i> -->
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- <div class="related widget-item">
        <h3>پست های مرتبط</h3>
        <div class="related-inner">
          <ul class="align-items-center">
            <li>
              <img src="assets/img/service-details12.jpg" alt="Details" />
            </li>
            <li>
              <a href="#">نظافت محل کار</a>
              <span>20 دی</span>
            </li>
          </ul>
        </div>
        <div class="related-inner">
          <ul class="align-items-center">
            <li>
              <img src="assets/img/service-details13.jpg" alt="Details" />
            </li>
            <li>
              <a href="#">نظافت منزل</a>
              <span>21 دی</span>
            </li>
          </ul>
        </div>
        <div class="related-inner">
          <ul class="align-items-center">
            <li>
              <img src="assets/img/service-details14.jpg" alt="Details" />
            </li>
            <li>
              <a href="#">شستشوی پنجره</a>
              <span>22 دی</span>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="newsletter widget-item">
        <h3>خبرنامه</h3>
        <form @submit.prevent="subscribe()">
          <input
            type="email"
            class="form-control"
            placeholder="آدرس ایمیل شما"
            v-model="email"
          />
          <button
            @click.prevent="subscribe($event, email)"
            type="submit"
            class="btn cmn-btn"
          >
            مشترک شدن
          </button>
        </form>
      </div>
      <div class="tags widget-item">
        <h3>برچسب ها</h3>
        <ul>
          <li v-for="(item, index) in selected" :key="index">
            <!-- <NuxtLink to="/">{{ item.slug }}</NuxtLink> -->
            <a>{{ item.slug }}</a>
          </li>
        </ul>
      </div>
      <div class="call widget-item">
        <h3>تماس بگیرید</h3>
        <a href="tel:021-12345678">021-12345678</a>
      </div>
    </div>
  </div>
</template>
<script>
import membership from "@/API/API/membership";
import HelperClass from "@/API/global/HelperClass.js";

export default {
  props: ["selected"],
  data() {
    return {
      email: ""
    };
  },
  mounted() {
    // console.log(this.selected);
  },
  methods: {
    subscribe(e, email) {
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("email", email);
      membership
        .requestToJoinMagazine(formdata)
        .then(() => {
          this.$noty.success("ایمیل شما با موفقیت در خبرنامه ثبت شد");
        })
        .catch(error => {
          e.preventDefault();
          HelperClass.showErrors(error, this.$noty);
        });
    }
  }
};
</script>
