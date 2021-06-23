<template>
    <div dir="rtl">
        <div class="container" style="text-aligh:right">
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
</template>
<style scoped>
.form-group{
    text-align: right !important;
}

</style>