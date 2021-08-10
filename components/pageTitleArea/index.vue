<template>
  <div dir="rtl">
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="title-item">
              <h1 class="headtitleBlogs">{{ selected }}</h1>
              <ul>
                <li>
                  <NuxtLink to="/">صفحه اصلی</NuxtLink>
                </li>
                <li>
                  <i class="bx bx-chevrons-left"></i>
                </li>
                <li>
                  <span>{{ selected }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
<style >
.headtitleBlogs{
  font-size: 50px;
    color: #fdb139 !important;
    margin-bottom: 10px;
}
</style>
