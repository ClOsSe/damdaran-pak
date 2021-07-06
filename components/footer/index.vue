<template>
  <div>
    <footer class="pt-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="footer-item">
              <div class="footer-logo">
                <NuxtLink to="/">
                  <img
                    style="max-width:60px"
                    :src="
                      `${$store.state.imageBaseUrl}/storage/settings/logo/${logoURL}`
                    "
                    alt="Logo"
                  />
                </NuxtLink>
                <p
                  style="text-align:justify; max-width:280px"
                  v-html="aboutUs"
                ></p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-item">
              <div class="footer-company">
                <h3>شرکت</h3>
                <ul>
                  <li>
                    <NuxtLink to="/aboutUs">درباره ما</NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/registerOrder">ثبت سفارش</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog">وبلاگ</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="footer-item">
              <div class="footer-contact">
                <h3>اطلاعات تماس</h3>
                <ul>
                  <li>
                    <span>{{ address }}</span>
                  </li>
                  <li>
                    <span>ایمیل:</span>
                    <a :href="'mailto:' + email" target="_blank">{{ email }}</a>
                  </li>
                  <li>
                    <span>تلفن:</span>
                    <a :href="'tel:' + cell" target="_blank">{{ cell }}</a>
                  </li>
                </ul>
              </div>
              <div class="footer-social">
                <ul>
                  <li>
                    <a :href="socialLink.facebook" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialLink.tweeter" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialLink.linkin" target="_blank">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="socialLink.instagram" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <p>
            طراحی و توسعه سایت توسط سلطان وب
            <a href="www.soltanweb.com" target="_blank">www.soltanweb.com</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  data() {
    return {
      sideBar: true,
      socialLink: {
        instagram: "",
        whatsapp: "",
        facebook: "",
        linkedin: "",
        telegram: "",
        tweeter: ""
      },
      logoURL: "",
      aboutUs: "",
      address: "",
      email: "",
      cell: "",
      footer_title: "",
      footer_description: ""
    };
  },
  created() {
    this.getAllSocialMediaLink();
  },
  methods: {
    getAllSocialMediaLink() {
      GeneralAPI.getGeneralInformation().then(res => {
        console.log(res.data.data);
        this.socialLink.instagram = res.data.data.instagram;
        this.socialLink.whatsapp = res.data.data.whatsapp;
        this.socialLink.facebook = res.data.data.facebook;
        this.socialLink.linkedin = res.data.data.linkin;
        this.socialLink.telegram = res.data.data.telegram;
        this.socialLink.tweeter = res.data.data.tweeter;
        this.logoURL = res.data.data.logo_image;
        this.address = res.data.data.address;
        this.email = res.data.data.email;
        this.cell = res.data.data.cell;
        this.footer_title = res.data.data.footer_title;
        this.footer_description = res.data.data.footer_description;
        this.aboutUs = `
        <h2>${this.footer_title}</h2>
        <p>${this.footer_description}</p>
        `;
      });
    }
  }
};
</script>
