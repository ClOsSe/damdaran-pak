<template>
  <div dir="rtl">
        <!-- Preloader -->
           <div class="loader" >
            <Loader />
        </div>
        <!-- End Preloader -->

        <!-- Banner -->
        <Banner />
        <!-- end Banner -->

        <!-- Counter -->
        <Counter />
        <!-- End Counter -->

        <!-- Choose -->
        <Choose />
        <!-- End Choose -->

        <!-- About -->
        <About />
        <!-- End About -->

        <!-- Review -->
        <RegisterOrder />
        <!-- End Review -->

        <!-- Estimate -->
        <Estimate />
        <!-- End Estimate -->
        
        <!-- Subscribe -->
        <Subscribe />
        <!-- End Subscribe -->
        <div style="background:black">
        </div>
  </div>
</template>

<script>
import Banner from "../components/Banner"
import Counter from '../components/counter'
import Choose from '../components/choose'
import About from '../components/about'
import Estimate from '../components/Estimate'
import RegisterOrder from '../components/registerOrderForm'
import Subscribe from '../components/subscribe'
import Loader from '../components/loader'

export default {
    // async asyncData(context){
        // let error=context.error;
        // error({message:'error',statusCode:503})
        // let store=context.store;

        // let axios=context.$axios;
        // let articles=await axios.get('/settings').then((result)=>{
            // return  result.data.data
        // });
        // return{
            // articles:articles
        // }
       
    // },
    // head(){
    //   return {
    //       title:this.articles,
    //       meta:[
    //           {name:'description',content:''}
    //       ]
    //   }  
    // },
    data(){
        return{
            
        }
    },
    components:{
      Banner,
      Loader,
      Counter,
      Choose,
      About,
      Estimate,
      RegisterOrder,
      Subscribe
  }, 
  mounted(){
        setTimeout(() => {
            document.querySelector(".loader").style.display="none"
        }, 1000);
    },
   
   
}
</script>
