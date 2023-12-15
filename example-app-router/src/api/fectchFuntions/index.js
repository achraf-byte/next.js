

import fetchMethod from "../axios/axiosInstance"
import { GET_BRANDS_URL , GET_SEARCH_RESULT_URL , GET_CATEGORIES } from "../consts"


export async function getSeachVhData(params) {
    var res = fetchMethod({
        action: 'getDataSearchVH',
        url: GET_BRANDS_URL , 
        method:"POST",
        data: params
    })
    return res
}


export async function getSeachResult(params) {
    var res = fetchMethod({
        action: 'getSeachResult',
        url: GET_SEARCH_RESULT_URL , 
        method:"POST",
        data: params
    })
    return await res
}
export async function getCategories(params) {
    var res = fetchMethod({
        action: 'getCategories',
        url: GET_CATEGORIES , 
        method:"POST",
        data: params
    })
    return await res
}