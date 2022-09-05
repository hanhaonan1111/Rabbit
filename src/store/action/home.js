import http from "@/utils/request";

export function HomeAction(data) {
    return {
        type: 'home/setTabBarData',
        data
    }
}


export function AsyncGetTabBaData() {
    return async (dispatch) => {
        let res = await http({
            url: '/home/category/head'
        })
        dispatch(HomeAction(res.result))
    }
}


export function SetPinPai(data) {
    return {
        type: '/home/SetPinPai',
        data
    }
}

export function AsyncGetPanPai() {
    return async (dispatch) => {
        let res = await http({
            url: '/home/brand'
        })
        dispatch(SetPinPai(res.result))
    }
}

function SetSwiperData(data) {
    return {
        type: 'home/swiperData',
        data
    }
}

export function AsyncGetSwipr() {
    return async dispatch => {
        let res = await http({
            url: '/home/banner'
        })
        dispatch(SetSwiperData(res.result))
    }
}

export function setNewGoods(data) {
    return {
        type: 'home/setNewGoods',
        data
    }
}

export function AsyncGetNewGoods() {
    return async dispatch => {
        let res = await http({
            url: '/home/new'
        })
        dispatch(setNewGoods(res.result))
    }
}


export function setRecommend(data) {
    return {
        type: 'home/setRecommend',
        data
    }
}

export function AsyncGetRecommend() {
    return async dispatch => {
        let res = await http({
            url: '/home/hot'
        })
        dispatch(setRecommend(res.result))
    }
}


export function HotReand(data) {
    return {
        type: 'home/setHotReand',
        data
    }
}

export function AsyncGetHotReand() {
    return async dispatch => {
        let res = await http({
            url: 'home/brand?limit=10'
        })
        dispatch(HotReand(res.result))
    }
}


export function setHomeProduct(data) {
    return {
        type: 'home/setHomeProduct',
        data
    }
}

export function AsyncGetHomeProduct() {
    return async dispatch => {
        let res = await http({
            url: 'home/goods'
        })
        dispatch(setHomeProduct(res.result))
    }
}

