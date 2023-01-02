import http from "@/utils/request"


// 得到分类枚举值
export function GetTopCategory(result) {
    return {
        type: 'home/updateTopCategory',
        payload: result
    }
}
export function AsyncGetTopCategory() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: '/home/category/head'
            })
            dispatch(GetTopCategory(result))
        } catch (e) {

        }
    }
}
// 品牌相关的信息
export function SetBrand(result) {
    return {
        type: 'home/GetPinPai',
        payload: result
    }
}
export function AsyncGetBrand() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: '/home/brand?limit=9'
            })
            dispatch(SetBrand(result))
        } catch (e) {

        }
    }
}

// 轮播图数据
export function SetCarousel(result) {
    return {
        type: 'home/SetCarousel',
        payload: result
    }
}
export function AsyncGetCarousel() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: '/home/banner'
            })
            dispatch(SetCarousel(result))
        } catch (e) {

        }
    }
}


// 获取新鲜好物模块数据
export function SetNewgoods(result) {
    return {
        type: 'home/SetNewgoods',
        payload: result
    }
}
export function AsyncGetNewgoods() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: '/home/new'
            })
            dispatch(SetNewgoods(result))
        } catch (e) {

        }
    }
}

// 获取人气推荐模块数据
export function SetRecommend(result) {
    return {
        type: 'home/SetRecommend',
        payload: result
    }
}
export function AsyncRecommend() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: '/home/hot'
            })
            dispatch(SetRecommend(result))
        } catch (e) {

        }
    }
}
// 获取热门品牌模块数据
export function SetHotBrand(result) {
    return {
        type: 'home/SetHotBrand',
        payload: result
    }
}
export function AsyncHotBrand() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: 'home/brand?limit=10'
            })
            dispatch(SetHotBrand(result))
        } catch (e) {

        }
    }
}

// 获取商品列表模块数据
export function SetGoodsList(result) {
    return {
        type: 'home/SetGoodsList',
        payload: result
    }
}
export function AsyncGoodsList() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: 'home/goods'
            })
            dispatch(SetGoodsList(result))
        } catch (e) {

        }
    }
}
// 获取最新专题模块数据
export function SetLastest(result) {
    return {
        type: 'home/SetLastest',
        payload: result
    }
}
export function AsyncLastest() {
    return async (dispatch) => {
        try {
            let { result } = await http({
                method: 'GET',
                url: 'home/special'
            })
            dispatch(SetLastest(result))
        } catch (e) {

        }
    }
}