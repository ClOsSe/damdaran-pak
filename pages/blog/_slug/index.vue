<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea :selected="$route.params.slug" />
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
              <a href="#">قبلی</a>
            </li>
            <li v-for="value in lastPage" :key="value">
              <NuxtLink
                :to="
                  `/blog/${$route.params.slug}/${$route.params.slug}?page=${value}`
                "
                >{{ value }}</NuxtLink
              >
            </li>
            <li>
              <a href="#">بعدی</a>
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
import PageTitleArea from "@/components/pageTitleArea";

export default {
  async asyncData(context) {
    let allArticlesWithSlug = await blogsAPI
      .getCategoryArticels(context.params.slug)
      .then(res => {
        return res.data.data;
      });
    let lastPage = allArticlesWithSlug.last_page;
    let AllArticles = allArticlesWithSlug.articles;
    return { lastPage, AllArticles };
  },
  components: {
    Loader,
    Subscribe,
    BlogPost,
    PageTitleArea
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  }
};
</script>
