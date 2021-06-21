<template>
    <div dir="rtl">
        <section class="review-area ptb-100">
            <div class="review-shape">
                <img src="@/assets/img/home-one/banner-shape6.png" alt="Shape">
            </div>
            <client-only>
                <div class="container">
                    <div class="section-title">
                        <span class="sub-title">بازخورد مشتریان</span>
                        <h2>مشتریان ما چه می گویند</h2>
                    </div>
                    <div dir="ltr" id="review-slider" class="review-slider owl-theme owl-carousel">
                        <div class="review-item">
                            <img src="@/assets/img/home-one/review1.jpg" alt="Review">
                            <h3>جان اسمیت</h3>
                            <span>بازاریاب</span>
                            <ul>
                                <li>
                                    <i class='bx bxs-star checked'></i>
                                </li>
                                <li>
                                    <i class='bx bxs-star checked'></i>
                                </li>
                                <li>
                                    <i class='bx bxs-star checked'></i>
                                </li>
                                <li>
                                    <i class='bx bxs-star checked'></i>
                                </li>
                                <li>
                                    <i class='bx bxs-star checked'></i>
                                </li>
                            </ul>
                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                        
                    </div>
                </div>
            </client-only>
        </section>
        <div dir="ltr">
            <carousel  :perPageCustom="[[0, 1],[320, 1],[380, 1], [412, 1],[1199, 2]]">
              <slide
                  data-index="0"
                  data-name="MySlideName"
                  >
                <div class="review-slider">
                    <div class="review-item">
                        <div class="d-flex align-items-center flex-column p-3 content">
                        <img src="@/assets/img/home-one/review1.jpg" alt="Review">
                            <h3>جان اسمیت</h3>
                            <span>بازاریاب</span>
                           
                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                    </div>
                </div>
              </slide>
               <slide
                  data-index="1"
                  data-name="MySlideName"
                  >
                <div class="review-slider">
                    <div class="review-item">
                        <div class="d-flex align-items-center flex-column p-3 content">
                        <img src="@/assets/img/home-one/review1.jpg" alt="Review">
                            <h3>جان اسمیت</h3>
                            <span>بازاریاب</span>
                            
                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                    </div>
                </div>
              </slide>
               <slide
                  data-index="2"
                  data-name="MySlideName"
                  >
                <div class="review-slider">
                    <div class="review-item">
                        <div class="d-flex align-items-center flex-column p-3 content">
                        <img src="@/assets/img/home-one/review1.jpg" alt="Review">
                            <h3>جان اسمیت</h3>
                            <span>بازاریاب</span>
                            
                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                    </div>
                </div>
              </slide>
               <slide
                  data-index="3"
                  data-name="MySlideName"
                  >
                <div class="review-slider">
                    <div class="review-item">
                        <div class="d-flex align-items-center flex-column p-3 content">
                        <img src="@/assets/img/home-one/review1.jpg" alt="Review">
                            <h3>جان اسمیت</h3>
                            <span>بازاریاب</span>
                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                    </div>
                </div>
              </slide>
            </carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
};

</script>
<style  scoped>
.review-slider{
    overflow: visible;
    padding-top: 32px;
    max-width: 600px;
    max-height: 292px;
    margin:auto;
    box-shadow: 0 0 20px 0 #dddddd80;
    position: relative;
    justify-content: center;
}
.review-item img{
    position: absolute;
    max-width: 100px;
    border-radius: 10px;
    right: -32px;
    top: 5px;
    
}
.content{
    text-align: center;
}

.content h3{
    font-weight: 600;
    font-size: 20px;
    color: #4a686a;
    margin-bottom: 10px;
}


</style>