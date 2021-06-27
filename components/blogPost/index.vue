<template>
  <div dir="rtl">
    <div v-if="selected !== undefined" class="blog-item">
      <NuxtLink :to="`/blogDetails/${encodeURIComponent(selected.slug)}`">
        <img :src="selected.image_url" alt="Blog" />
      </NuxtLink>
      <div class="blog-bottom">
        <h3>
          <NuxtLink :to="`/blogDetails/${encodeURIComponent(selected.slug)}`">{{
            selected.title
          }}</NuxtLink>
        </h3>
        <ul>
          <li>
            <span>توسط:</span>
            <a>{{ selected.writer }}</a>
          </li>
          <li>
            <span>{{ selected.comments_count }}</span>
            <a>نظرات</a>
          </li>
          <li>
            <span>{{ selected.hit }}</span>
            <a>مشاهده</a>
          </li>
        </ul>
        <p>
          {{ selected.short_description }}
        </p>
        <NuxtLink :to="`/blogDetails/${encodeURIComponent(selected.slug)}`">
          بیشتر بخوانید
          <i class="bx bx-left-arrow-alt"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
