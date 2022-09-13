let store = {
    bread: {}
}

export default function Detail(state = store, action) {
    switch (action.type) {
        case 'detail/setBread':
            return {
                ...state,
                bread: {
                    ...action.data
                }
            }
        default:
            return {...state}
    }
}