import {request} from "./request";
import qs from 'qs';

export function register(data) {
    return request({
        url: '/fa/user/register',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function login(data) {
    return request({
        url: '/fa/user/login',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function getLoginStatus() {
    return request({
        url: '/user/user-status',
        method: 'get'
    })
}

export function getUserInfo() {
    return request({
        url: '/fa/user/user-info',
        method: 'get'
    })
}

export function editUser(userInfo) {
    return request({
        url: "fa/user/edit",
        method: "post",
        data: userInfo,
        contentType: "multipart/form-data",
        // processData: false,
    })

}
