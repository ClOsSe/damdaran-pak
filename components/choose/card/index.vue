<template>
  <div dir="rtl">
    <div class="choose-item">
      <i :class="selected.icon"></i>
      <h3>{{ selected.title }}</h3>
      <p>{{ selected.message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
