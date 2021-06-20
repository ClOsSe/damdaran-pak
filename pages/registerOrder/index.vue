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
                            <h2>ثبت سفارش</h2>
                            <ul>
                                <li>
                                    <NuxtLink to="/">صفحه اصلی</NuxtLink>
                                </li>
                                <li>
                                    <i class='bx bx-chevrons-left'></i>
                                </li>
                                <li>
                                    <span>ثبت سفارش</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Page Title -->

        <div class="estimate-area ptb-100 mt-5">
            <div class="container">
                <div class="estimate-content">
                    
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="نام شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="شماره شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="آدرس شما">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="موضوع">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea id="your-message" rows="6" class="form-control" placeholder="پیام شما"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="btn cmn-btn">دریافت برنامه</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Subscribe -->
        <div class="subscribe-area">
            <div class="subscribe-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h2>در خبرنامه ما عضو شوید</h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form class="newsletter-form" data-toggle="validator">
                                <input type="email" class="form-control" placeholder="آدرس ایمیل شما" name="EMAIL" required autocomplete="off">
        
                                <button class="btn cmn-btn" type="submit">
                                    مشترک شدن
                                </button>
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Subscribe -->

   
    </div>    
</template>
<script>
import Loader from '@/components/loader'
export default {
    components:{
        Loader
    }
}
</script>