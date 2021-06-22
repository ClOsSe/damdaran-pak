<template>
    <div>
       <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="faq-content">
              <ul class="accordion">
                <li @click="clickfaqItem(1)">
                  <a :class="activIndex === 1 ? 'active' : ''"
                    >سوالات متداول 1</a
                  >
                  <p :class="activIndex === 1 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
                  </p>
                </li>
                <li @click="clickfaqItem(2)">
                  <a :class="activIndex === 2 ? 'active' : ''"
                    >سوالات متداول 2</a
                  >
                  <p class="pclass" :class="activIndex === 2 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
                  </p>
                </li>
                <li @click="clickfaqItem(3)">
                  <a :class="activIndex === 3 ? 'active' : ''"
                    >سوالات متداول 3</a
                  >
                  <p class="pclass" :class="activIndex === 3 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
                  </p>
                </li>
                <li @click="clickfaqItem(4)">
                  <a :class="activIndex === 4 ? 'active' : ''"
                    >سوالات متداول 4</a
                  >
                  <p class="pclass" :class="activIndex === 4 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
                  </p>
                </li>
                <li @click="clickfaqItem(5)">
                  <a :class="activIndex === 5 ? 'active' : ''"
                    >سوالات متداول 5</a
                  >
                  <p class="pclass" :class="activIndex === 5 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
                  </p>
                </li>
                <li @click="clickfaqItem(6)">
                  <a :class="activIndex === 6 ? 'active' : ''"
                    >سوالات متداول 6</a
                  >
                  <p class="pclass" :class="activIndex === 6 ? 'active_p' : ''">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                    ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                    سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت
                    40 سال استاندارد صنعت بوده است.
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
  data() {
    return {
      activIndex: 10
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },
 
  methods: {
    clickfaqItem(index) {
      this.activIndex = index;
    }
  }
};
</script>
<style scoped>
.active_p {
  display: block !important;
}
</style>