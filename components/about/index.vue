<template>
    <div dir="rtl">
        <section class="about-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <AboutUs />
                    </div>
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="@/assets/img/home-one/about-bg.jpg" alt="About">
                            <div class="video-wrap">
                                <a href="https://www.youtube.com/watch?v=Dviu-D3Fijo" class="popup-youtube">
                                    <i class='bx bx-play'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>    
</template>
<script>
import AboutUs from '@/components/cardWithCallToActions'
export default {
    components:{
        AboutUs
    }
}
</script>
