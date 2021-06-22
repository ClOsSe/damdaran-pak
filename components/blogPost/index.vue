<template>
    <div dir="rtl">
        <div class="blog-item">
            <NuxtLink to="/blogDetails">
                <img src="@/assets/img/home-three/blog1.jpg" alt="Blog">
            </NuxtLink>
            <div class="blog-bottom">
                <h3>
                    <NuxtLink to="/blogDetails">آموزش نحوه رزرو آسان خدمات نظافتی شرکت لیکسی</NuxtLink>
                </h3>
                <ul>
                    <li>
                        <span>توسط:</span>
                        <a href="#">مدیر</a>
                    </li>
                    <li>
                        <span>20</span>
                        <a href="#">نظرات</a>
                    </li>
                    <li>
                        <span>11</span>
                        <a href="#">مشاهده</a>
                    </li>
                </ul>
                <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                <a href="blog-details.html">
                    بیشتر بخوانید
                    <i class='bx bx-left-arrow-alt'></i>
                </a>
            </div>
        </div>
    </div>    
</template>
<script>
    import blogsAPI from '@/API/API/blogsAPI'

export default {
    mounted(){
        // this.getRandomBlogs();
    },
    methods:{
        // getRandomBlogs(){
        //     blogsAPI.getRandomArticle().then((res)=>{
        //         console.log(res)
        //     })
        // }
    }
}
</script>