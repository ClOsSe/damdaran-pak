

import HelperClass from '../global/apiHelperClass'
class AboutUs {
    getSettingInformation(){
        return HelperClass.getRequest('/settings')
    }
}
export default new AboutUs()
