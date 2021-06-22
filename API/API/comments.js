
import HelperClass from `../global/apiHelperClass`
class Comments {
    //store new comment for specific article(base on slug}
    addComment(slug){
        return HelperClass.postRequest(`/articles/${slug}/comment/store`)
    };
    //get all comments of the specific articles with their children
    getAllcomment(slug){
        return HelperClass.getRequest(`/articles/comments/${slug}`)
    }
}
export default new Comments()
