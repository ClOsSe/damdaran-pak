<template>
	<div dir="rtl">	
         <!-- Preloader -->
        <!-- <div class="loader"> -->
            <!-- <Loader /> -->
        <!-- </div> -->
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
                                    <i class='bx bx-chevrons-left'></i>
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
                        <BlogPost />
                    </div>
                </div>
                <div class="pagination-area">
                    <ul>
                        <li>
                            <a href="#">قبلی</a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
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
// import Loader from '@/components/loader'
import Subscribe from '@/components/subscribe'
import BlogPost from '@/components/blogPost'

export default {
    components:{
        // Loader,
        Subscribe,
        BlogPost
    }
}
</script>