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

    <!-- Blog Details -->
    <div class="blog-details-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="details-item">
              <div class="details-img">
                <img src="assets/img/service-details3.jpg" alt="Details" />
                <ul>
                  <li>
                    <i class="bx bx-user"></i>
                    توسط: <a href="#">{{ Details.writer }}</a>
                  </li>
                  <li>
                    <i class="bx bx-calendar-alt"></i>
                    {{
                      new Date(Details.created_at).toLocaleDateString("fa-IR")
                    }}
                  </li>
                  <li>
                    <i class="bx bx-message-detail"></i>
                    <a v-if="Comments" href="#"
                      >نظرات ({{ Comments.length }})</a
                    >
                    <a v-else href="#">نظرات (0)</a>
                  </li>
                </ul>
                <h2>{{ Details.title }}</h2>
                <p v-html="Details.title"></p>
              </div>
              <!-- comment cart -->
              <div v-if="Comments" class="details-comments">
                <h3>نظرات</h3>
                <CommentCart
                  v-for="item in Comments"
                  :key="item"
                  v-bind="item"
                />
              </div>
              <!-- end comment cart -->

              <div class="details-form">
                <SendComment :selected="Details.id" />
              </div>
            </div>
          </div>
          <!-- side bar -->

          <div class="col-lg-3">
            <SideColumn :selected="AllCategories" />
          </div>
        </div>
      </div>
    </div>
    <!-- End Blog Details -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
import SideColumn from "@/components/blogSidepanel";
import CommentCart from "@/components/commentCart";
import blogsAPI from "@/API/asyncAPI/blogsAPI";
import commentsAPI from "@/API/API/commentsAPI";
import SendComment from "@/components/sendCommentCart";

export default {
  // fetch data
  async asyncData(context) {
    // get one article with slug
    let Details = await blogsAPI
      .getSpecificArticle(encodeURIComponent(context.params.slug))
      .then(Articel => {
        return Articel.data.data.article;
      });

    // get all comments based on slug
    let Comments = await commentsAPI
      .getAllcomments(encodeURIComponent(context.params.slug))
      .then(AllComments => {
        let res;
        if (AllComments.data != "") {
          res = AllComments.data.data.data;
          return res;
        } else {
          return 0;
        }
      });

    // // get all category
    let AllCategories = await blogsAPI
      .getArticleCategoriesLevelOne()
      .then(res => {
        return res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    return { AllCategories, Details, Comments };
  },
  components: {
    Loader,
    Subscribe,
    SideColumn,
    CommentCart,
    SendComment
  },
  mounted() {
    if (!localStorage.getItem("userVisited")) {
      //  data = id or slug
      this.isUserVisitedBlog(this.Details.id);
    }
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },
  methods: {
    isUserVisitedBlog(id) {
      blogsAPI.addNewVisitToArticles(id).then(() => {});
    }
  }
};
</script>
