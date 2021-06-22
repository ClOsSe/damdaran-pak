import axios from "axios";


class HelperClass{
    postRequest(store,url,data = null){
            return axios.post(`${store.state.BaseUrl}${url}`,data,{
            })
    }
    getRequest(store,url){
        return axios.get(`${store.state.BaseUrl}${url}`,{
        })
    }
    
}


export default new HelperClass()




