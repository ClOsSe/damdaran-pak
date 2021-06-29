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
                      `${$store.state.imageBaseUrl}/storage/settings/logo/${$store.state.AllSetting.data.logo_image}`
                    "
                    alt="Logo"
                  />
                </NuxtLink>
                <p
                  style="text-align:justify; max-width:280px"
                  v-html="$store.state.AllSetting.data.about_us"
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
                    <NuxtLink to="/aboutUs" target="_blank">درباره ما</NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/registerOrder" target="_blank"
                      >ثبت سفارش</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/blog" target="_blank">وبلاگ</NuxtLink>
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
                    <span>{{ $store.state.AllSetting.data.address }}</span>
                  </li>
                  <li>
                    <span>ایمیل:</span>
                    <a
                      :href="'mailto:' + $store.state.AllSetting.data.email"
                      target="_blank"
                      >{{ $store.state.AllSetting.data.email }}</a
                    >
                  </li>
                  <li>
                    <span>تلفن:</span>
                    <a
                      :href="'tel:' + $store.state.AllSetting.data.cell"
                      target="_blank"
                      >{{ $store.state.AllSetting.data.cell }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="footer-social">
                <ul>
                  <li>
                    <a
                      :href="$store.state.AllSetting.data.facebook"
                      target="_blank"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="$store.state.AllSetting.data.tweeter"
                      target="_blank"
                    >
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="$store.state.AllSetting.data.linkin"
                      target="_blank"
                    >
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="$store.state.AllSetting.data.instagram"
                      target="_blank"
                    >
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
