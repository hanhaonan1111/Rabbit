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