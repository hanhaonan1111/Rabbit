import http from "@/utils/request";

export function setCatagoryList(data) {
    return {
        type: 'category/setCatagoryList',
        data
    }
}

export function AsyncCatagoryList(id) {
    return async dispatch => {
        let res = await http({
            url: '/category?id=' + id
        })
        dispatch(setCatagoryList(res.result))
    }
}

export function setSubCategory(data) {
    return {
        type: 'category/setSubCategory',
        data
    }
}

export function AsyncSubCategory(id) {
    return async dispatch => {
        let {result} = await http({
            url: '/category/sub/filter?id=' + id
        })
        dispatch(setSubCategory(result))
    }
}

export function setFilterdGoods(data) {
    return {
        type: 'category/setFilterdGoods',
        data
    }
}


export function AsyncGetFilterdGoods(data) {
    let request = {
        ...data,
    }
    return async dispatch => {
        let {result} = await http({
            url: '/category/goods/temporary',
            method: 'POST',
            data: request
        })
        dispatch(setFilterdGoods(result))
    }
}

export function ClearGoods() {
    return {
        type: 'category/clearGoods',
    }
}

export function setFilterOption(data) {
    return {
        type: 'category/setFilterOption',
        data
    }
}