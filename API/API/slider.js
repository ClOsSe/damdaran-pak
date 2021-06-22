

import HelperClass from `../global/apiHelperClass`
class Comments {
    //get active sliders to show user
    getSample(){
        return HelperClass.getRequest(`/get-sliders`)
    }
}
export default new Comments()

