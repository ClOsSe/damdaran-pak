
import HelperClass from '../global/apiHelperClass'
class AboutUs {
    //get 10 random articles
    getRandomArticle(){
        return HelperClass.getRequest(`/get-random-article`)
    };
    //get all articles
    getAllArticles(){
        return HelperClass.getRequest(`/get-articles`)
    };
    //get level one articleCategories
    getArticleCategoriesLevelOne(){
        return HelperClass.getRequest(`get-article-level-on-categories`)
    }
    //get specific article with slug
    getSpecificArticle(){
        return HelperClass.getRequest(`/article/{article}`)
    };
    //get popular articles
    getPopularArticles(){
        return HelperClass.getRequest(`/popular-articles`)
    };
    //get a category articles 
    getCategoryArticels(){
        return HelperClass.getRequest(`/categories/{articleCategory}/articles`)
    }
    //increment article visit so call this to increase a hit
    addNewVisitToArticles(data){
        return HelperClass.postRequest(`/article/hit/${data}`)
    }
}
export default new AboutUs()
