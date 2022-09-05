let store = {
    CurrentCatagoryList: {}
}

export default function Category(state = store, action) {
    switch (action.type) {
        case 'category/setCatagoryList':
            return {
                ...state,
                CurrentCatagoryList: {...action.data}
            }
        default:
            return {...state}

    }
}