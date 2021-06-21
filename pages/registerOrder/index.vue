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
        <div>
            <RegisterOrderForm />
        </div>
        

        <!-- Subscribe -->
        <Subscribe />
        <!-- End Subscribe -->

   
    </div>    
</template>
<script>
import Loader from '@/components/loader'
import RegisterOrderForm from '@/components/registerOrderForm'
import Subscribe from '@/components/subscribe'
export default {
    components:{
        Loader,
        RegisterOrderForm,
        Subscribe
    },
     mounted(){
        setTimeout(() => {
            document.querySelector(".loader").style.display="none"
        }, 1000);
    }
}
</script>