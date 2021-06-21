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
            <FAQ />
        </div>
        <!-- End FAQ -->

        <!-- Subscribe -->
        <Subscribe />
        <!-- End Subscribe -->

</div>    
</template>
<script>
import Loader from '@/components/loader'
import Subscribe from '@/components/subscribe'
import FAQ from '@/components/faq'
export default {
    mounted(){
    setTimeout(() => {
        document.querySelector(".loader").style.display="none";
    }, 1000);
    },
    components:{
        Loader,
        Subscribe,
        FAQ
    }
}
</script>