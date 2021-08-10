<template>
  <div dir="rtl">
    <ul>
      <li class="comment-box" v-if="parent == null">
        <div>
          <h4>{{ name }}</h4>
          <span class="date">{{
            new Date(created_at).toLocaleDateString("fa-IR")
          }}</span>
          <p>{{ text }}</p>
        </div>
        <div class="comment-box-childe">
          <template v-for="(item, index) in children">
            <div :key="index">
              <span class="adminName"> ادمین دام سبز</span>
              <span class="date">
                {{ new Date(created_at).toLocaleDateString("fa-IR") }}
              </span>
              <p>{{ item.text }}</p>
            </div>
          </template>
        </div>
        <hr />
        <!-- <img src="assets/img/home-one/review1.jpg" alt="Details"> -->

        <!-- 
        <p>{{ parent }}</p>
        <p>{{ id }}</p> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      requerd: true
    },
    text: {
      requerd: true
    },
    created_at: {
      requerd: true
    },
    parent: {
      requerd: true
    },
    id: {
      required: true
    },
    children: {
      requerd: true
    }
  }
};
</script>
<style scoped>
.comment-box-childe {
  box-shadow: 0px 0px 3px rgba(200, 200, 200, 0.8);
  border-radius: 5px;
  padding: 10px 10px 0px 0px;
  margin: 10px;
}
.date {
  color: #fdb139;
}
.adminName {
  color: green;
}
@media only screen and (max-width: 767px) {
  .comment-box {
    padding: 0 !important;
  }
}
</style>
