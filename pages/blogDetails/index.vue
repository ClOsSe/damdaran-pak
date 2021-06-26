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
              <h2>جزئیات وبلاگ</h2>
              <ul>
                <li>
                  <NuxtLink to="/">صفحه اصلی</NuxtLink>
                </li>
                <li>
                  <i class="bx bx-chevrons-left"></i>
                </li>
                <li>
                  <span>جزئیات وبلاگ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                    توسط: <a href="#">مدیر</a>
                  </li>
                  <li>
                    <i class="bx bx-calendar-alt"></i>
                    20 دی 1398
                  </li>
                  <li>
                    <i class="bx bx-message-detail"></i>
                    <a href="#">نظرات (02)</a>
                  </li>
                </ul>
                <h2>آموزش نحوه رزرو آسان خدمات نظافتی شرکت لیکسی</h2>
                <p>
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                  سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40
                  سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و
                  متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
                  بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می
                  گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                  لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                </p>
                <p>
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                  سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40
                  سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و
                  متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
                  بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می
                  گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                  لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                </p>
                <blockquote>
                  "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                  سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40
                  سال استاندارد صنعت بوده است."
                  <span>جان اسمیت</span>
                </blockquote>
                <p>
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                  سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40
                  سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و
                  متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
                  بوده است.
                </p>
              </div>
              <!-- comment cart -->
              <div class="details-comments">
                <h3>نظرات</h3>
                <CommentCart
                  v-for="item in Comments"
                  :key="item.name"
                  v-bind="item"
                />
              </div>
              <!-- end comment cart -->

              <div class="details-form">
                <SendComment />
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
  async asyncData() {
    // fetch data
    getAllcomments();
    getSpecificArticle();
    // get one article with slug
    async function getSpecificArticle(slug) {
      let Details = await blogsAPI.getSpecificArticle(slug).then(Articel => {
        return Articel;
      });
      return { Details };
    }
    // get all comments based on slug
    async function getAllcomments(slug) {
      let Comments = await commentsAPI
        .getAllcomments(slug)
        .then(AllComments => {
          return AllComments;
        })
        .catch(error => {
          return error;
        });
      return { Comments };
    }
    let AllCategories = await blogsAPI
      .getArticleCategoriesLevelOne()
      .then(res => {
        return res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    return { AllCategories };
  },
  data() {
    return {
      slug: "test",
      userid: "test"
    };
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
      //  this.isUserVisitedBlog(data);
    }
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  },
  methods: {
    // isUserVisitedBlog(data){
    //     blogsAPI.addNewVisitToArticles(data).then((res)=>{
    //         console.log(res);
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
  }
};
</script>
