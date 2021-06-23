<template>
    <div dir="rtl">
        <ul>
            <li>
            <img src="assets/img/home-one/review1.jpg" alt="Details">
            <h4>{{name}}</h4>
            <span>{{date}}</span>
            <p>{{text}}</p>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    props:{
        name:{
            requerd:true
        },
        text:{
            requerd:true
        },
        date:{
            requerd:true
        }
    },
}
</script>