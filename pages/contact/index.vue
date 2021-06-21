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
           <Location />
        </div>
        <!-- End Location -->

        <!-- Contact -->
        <div class="contact-area pb-100">
            <ContactForm />
        </div>
        <!-- End Contact -->

        <!-- Map -->
        <div class="map-area pb-100">
           <Map />
        </div>
        <!-- End Map -->

        <!-- Subscribe -->
        <div class="subscribe-area">
                    <Subscribe />
        </div>
        <!-- End Subscribe -->

    
</div>
</template>
<script>
import Loader from '@/components/loader'
import Location from '@/components/locationCard'
import ContactForm from '@/components/contactForm'
import Map from '@/components/map'
import Subscribe from '@/components/subscribe'
export default {
    components:{
        Loader,
        Location,
        ContactForm,
        Map,
        Subscribe
    }
}
</script>