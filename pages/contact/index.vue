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
                            <h2>تماس با ما</h2>
                            <ul>
                                <li>
                                    <NuxtLink to="/">صفحه اصلی</NuxtLink>
                                </li>
                                <li>
                                    <i class='bx bx-chevrons-left'></i>
                                </li>
                                <li>
                                    <span>تماس با ما</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Page Title -->

        <!-- Location -->
        <div class="location-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-4">
                        <div class="location-item">
                            <i class='bx bx-phone-call'></i>
                            <h3>تلفن</h3>
                            <span>با ما تماس بگیرید:</span>
                            <a href="tel:021-12345678">021-12345678</a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="location-item">
                            <i class='bx bx-location-plus'></i>
                            <h3>موقعیت</h3>
                            <span>موقعیت شرکت ما:</span>
                            <span>ایران ، استان تهران ، میدان آزادی</span>
                        </div>
                    </div>
                    <div class="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div class="location-item">
                            <i class='bx bx-mail-send'></i>
                            <h3>ایمیل</h3>
                            <span>ایمیل شرکت ما:</span>
                            <a href="mailto:info@lixi.com">info@lixi.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Location -->

        <!-- Contact -->
        <div class="contact-area pb-100">
            <div class="container">
                <div class="section-title">
                    <h2>با ما در ارتباط باشید</h2>
                </div>
                <form id="contactForm">
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label>نام</label>
                                <input type="text" name="name" id="name" class="form-control" required data-error="لطفا نام خود را وارد کنید">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label>ایمیل</label>
                                <input type="email" name="email" id="email" class="form-control" required data-error="لطفا ایمیل خود را وارد کنید">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label>تلفن</label>
                                <input type="text" name="phone_number" id="phone_number" required data-error="لطفا تلفن خود را وارد کنید" class="form-control">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label>موضوع</label>
                                <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="لطفا موضوع خود را وارد کنید">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-12">
                            <div class="form-group">
                                <label>پیام</label>
                                <textarea name="message" class="form-control" id="message" cols="30" rows="8" required data-error="پیام خود را بنویسید"></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-12">
                            <button type="submit" class="cmn-btn btn">
                                ارسال پیام
                            </button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Contact -->

        <!-- Map -->
        <div class="map-area pb-100">
            <div class="container-fluid">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59843174.53779284!2d62.17507173408573!3d23.728204508550373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sbd!4v1598214277553!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
        <!-- End Map -->

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