import http from "@/utils/request";

export function setBread(data) {
    return {
        type: 'detail/setBread',
        data
    }
}

export function AsyncGetBread(id) {
    return async diapatch => {
        let {result} = await http({
            url: '/goods?id=' + id
        })
        diapatch(setBread(result))
    }
}





