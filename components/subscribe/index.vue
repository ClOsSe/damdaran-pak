<template>
  <div dir="rtl">
    <div class="subscribe-area">
      <div class="subscribe-wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-title" style="text-align:right">
                <h2>در خبرنامه ما عضو شوید</h2>
              </div>
            </div>
            <div class="col-lg-6">
              <form
                @submit.prevent="subscribe()"
                class="newsletter-form"
                data-toggle="validator"
              >
                <input
                  style="text-align:left !important;"
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="آدرس ایمیل شما"
                  name="EMAIL"
                  required
                  autocomplete="off"
                />

                <button
                  @click.prevent="subscribe($event, email)"
                  class="btn cmn-btn"
                  type="submit"
                >
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
import membership from "@/API/API/membership";
// import HelperClass from '@/API/global/HelperClass'
export default {
  data() {
    return {
      email: ""
    };
  },
  mounted() {
    console.log(this.$noty);
  },
  methods: {
    // send email
    subscribe(e, email) {
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("email", email);
      membership
        .requestToJoinMagazine(formdata)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          error.response
            ? this.$noty.warning(error.response.data.errors.email)
            : "";
          console.log(error.response.data.errors);
          e.preventDefault();
          // HelperClass.showErrors(error,this.$noty)
        });
    }
  }
};
</script>
