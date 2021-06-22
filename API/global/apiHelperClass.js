import axios from "axios";
import store from '@/store'


class HelperClass{
    postRequest(url,data = null){
        let token = localStorage.getItem('Bearer')
        token !== null ? token = token.split(' ')[1] : '';
        if(data){
            return axios.post(`${store.state.BaseUrl}${url}`,data,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
        }
        return axios.post(`${store.state.BaseUrl}${url}`,{},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    getRequest(url){
        let token = localStorage.getItem('Bearer')
        token !== null ? token = token.split(' ')[1] : '';
        return axios.get(`${store.state.BaseUrl}${url}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    // helperclass import
    // getSomething(){
        // helperclass.postRequest().then((res)=>{
            // function(res)
        // }).catch((err)=>{
            // helperclass.showError(err)
        // })
        // helperclass.getRequest().then((res)=>{
            // function(res)
        // }).catch((err)=>{
            // helperclass.showError(err)
        // })
    // }
}


export default new HelperClass()




