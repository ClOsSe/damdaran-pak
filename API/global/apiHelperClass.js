import axios from "axios";

class HelperClass{
    postRequest(url,data = null){
            return axios.post(`${store.state.BaseUrl}${url}`,data,{
            })
    }
    getRequest(url){
        return axios.get(`${store.state.BaseUrl}${url}`,{
        })
    }
    
}


export default new HelperClass()




