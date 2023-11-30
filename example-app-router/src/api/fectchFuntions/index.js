import fetchMethod from "../axios/axiosInstance"
import { GET_BRANDS_URL } from "../consts"
export async function getBrandes() {

    var loginResult = fetchMethod({
        action: 'getBrandes',
        url: GET_BRANDS_URL , 
        method:"POST",
        data: {}
    })
    return loginResult
}