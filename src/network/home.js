import {request} from "./request";

export function getHomeAllData() {
    return request({
        url: '/productinformation/list',
    })
}

export function getBanner() {
    
}