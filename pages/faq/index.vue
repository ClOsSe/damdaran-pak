<template>
    <div dir='rtl'>
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
                            <h2>سوالات متداول</h2>
                            <ul>
                                <li>
                                    <NuxtLink to="/">صفحه اصلی</NuxtLink>
                                </li>
                                <li>
                                    <i class='bx bx-chevrons-left'></i>
                                </li>
                                <li>
                                    <span>سوالات متداول</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Page Title -->

        <!-- FAQ -->
        <div class="faq-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="faq-content">
                            <ul class="accordion">
                                <li>
                                    <a>سوالات متداول 1</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                                <li>
                                    <a>سوالات متداول 2</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                                <li>
                                    <a>سوالات متداول 3</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                                <li>
                                    <a>سوالات متداول 4</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                                <li>
                                    <a>سوالات متداول 5</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                                <li>
                                    <a>سوالات متداول 6</a>
                                    <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="faq-img">
                            <img src="@/assets/img/home-two/faq.jpg" alt="FAQ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End FAQ -->

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