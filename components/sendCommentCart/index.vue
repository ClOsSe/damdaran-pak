<template>
    <div dir="rtl">
        <h3>پاسخ دهید</h3>
        <span>آدرس ایمیل شما منتشر نخواهد شد. قسمتهای مورد نیاز علامت گذاری شده اند *</span>
        <form>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label>نام*</label>
                        <input v-model="comments.name" type="text" class="form-control">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label>ایمیل*</label>
                        <input v-model="comments.email" type="email" class="form-control">
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label>نظر</label>
                        <textarea v-model="comments.message" id="your-comment" rows="10" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button @click="postUserComment(this.slug)" type="submit" class="btn cmn-btn">ارسال</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            slug:'asdasdas',
            comments:{
                name:'',
                email:'',
                message:''
            },
        }
    },
    methods:{
        // post user comments
        postUserComment(e,slug){
            e.preventDefault();
            let isFormComplet = false;
            if(this.comments.name.length > 3 && this.comments.message.length != ''){
                isFormComplet = true;
            }
            if(isFormComplet == true){
                console.log(isFormComplet)
                let formdata = new FormData();
                formdata.append('name',this.comments.name)
                formdata.append('email',this.comments.email)
                formdata.append('text',this.comments.message)
                formdata.append('parent',this.slug)
                formdata.append('user_id',this.userid)
                commentsAPI.postUserComment(slug,formdata).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            }
            else{
                alert('compete the form')
            }
        }
    }
}
</script>