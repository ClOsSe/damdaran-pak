<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="faq-content">
            <ul
              v-for="(item, index) in selected"
              :key="index"
              class="accordion"
            >
              <li @click="clickfaqItem($event, item.id)">
                <a id="title" :class="activIndex === item.id ? 'active' : ''">{{
                  item.title
                }}</a>
                <p
                  id="description"
                  :class="['p-3', activIndex === item.id ? 'active_p' : '']"
                >
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="faq-img">
            <img src="@/assets/img/home-two/faq.jpg" alt="FAQ" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"],

  data() {
    return {
      activIndex: 0,
      tempActiveIndex: ""
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },

  methods: {
    clickfaqItem(e, index) {
      console.log(e.target.attributes);
      this.activIndex = index;

      // if (e.target.attributes[3] == "active") {
      //   console.log("fire");
      // }

      // let title = document.querySelector("#title");
      // let description = document.querySelector("#description");

      // title.classList.contains("active")
      //   ? title.classList.remove("active")
      //   : "";

      // description.classList.contains("active_p")
      //   ? description.classList.remove("active_p")
      //   : description.classList.add("display-none");
    }
  }
};
</script>
<style scoped>
.active_p {
  display: block !important;
}
.display-none {
  display: none !important;
}
.display-block {
  display: block !important;
}
</style>
