<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="title-item">
              <h2>وبلاگ</h2>
              <ul>
                <li>
                  <NuxtLink to="/">صفحه اصلی</NuxtLink>
                </li>
                <li>
                  <i class="bx bx-chevrons-left"></i>
                </li>
                <li>
                  <span>وبلاگ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Blog -->
    <section class="blog-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <BlogPost
              v-for="(item, index) in AllArticles"
              :key="index"
              :selected="item"
            />
          </div>
        </div>
        <div class="pagination-area">
          <ul>
            <li>
              <a @click="GetPreviousPageNummber()">قبلی</a>
            </li>
            <li v-for="value in lastPage" :key="value">
              <NuxtLink
                @click.native="GetCurrentPageNummber(value)"
                :to="`/blog/category/${$route.params.slug}?page=${value}`"
                >{{ value }}</NuxtLink
              >
            </li>
            <li>
              <a @click="GetNextPageNummber()">بعدی</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Blog -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
import BlogPost from "@/components/blogPost";
import blogsAPI from "@/API/asyncAPI/blogsAPI";

export default {
  async asyncData(context) {
    let page = context.route.query.page;
    if (!page) {
      page = 1;
    }
    let getAllArticles = await blogsAPI.getAllArticles(page).then(res => {
      return res.data.data;
    });
    let lastPage = getAllArticles.last_page;
    let AllArticles = getAllArticles.articles;

    return { lastPage, AllArticles };
  },

  watchQuery: ["page"],

  components: {
    Loader,
    Subscribe,
    BlogPost
  },
  data() {
    return {
      currentPage: 1
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },
  methods: {
    GetCurrentPageNummber(currentPage) {
      this.currentPage = currentPage;
    },
    GetPreviousPageNummber() {
      this.currentPage === 1 ? "" : (this.currentPage = this.currentPage - 1);
      this.$router.push(`/blog?page=${this.currentPage}`);
    },
    GetNextPageNummber() {
      this.currentPage === this.lastPage
        ? ""
        : (this.currentPage = this.currentPage + 1);
      this.$router.push(`/blog?page=${this.currentPage}`);
    }
  }
};
</script>
