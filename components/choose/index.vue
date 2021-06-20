<template>
    <div >
        <div class="choose-area pt-100 pb-70">
            <div class="choose-shape">
                <img src="@/assets/img/home-one/choose1.png" alt="Shape">
                <img src="@/assets/img/home-one/banner-shape3.png" alt="Shape">
                <img src="@/assets/img/home-one/choose2.png" alt="Shape">
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="choose-content">
                            <div class="row align-items-center">
                                <div class="col-sm-6 col-lg-6">
                                    <div class="col-lg-12 p-0">
                                        <Card />
                                    </div>
                                    <div class="col-lg-12 p-0">
                                        <!-- <div class="choose-item">
                                            <i class='bx bx-paper-plane'></i>
                                            <h3>پاسخ سریع و پشتیبانی 24/7</h3>
                                            <p>لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است.</p>
                                        </div> -->
                                        <Card />

                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-6">
                                    <!-- <div class="choose-item">
                                        <i class='bx bx-wrench'></i>
                                        <h3>بکارگیری از تجهیزات مدرن و بروز دنیا</h3>
                                        <p>لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است.</p>
                                    </div> -->
                                        <Card />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" >
                        <WhyUs />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from "./card"
import WhyUs from "./whyus"
export default {
 components:{
     Card,
     WhyUs
 }   
}
</script>
