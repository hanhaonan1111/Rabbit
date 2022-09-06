let store = {
    CurrentCatagoryList: {},
    SubCatagoryList: {},

}

export default function Category(state = store, action) {
    switch (action.type) {
        case 'category/setCatagoryList':
            return {
                ...state,
                CurrentCatagoryList: {...action.data}
            }
        case 'category/setSubCategory':
            return {
                ...state,
                SubCatagoryList: {...action.data}
            }
        default:
            return {...state}

    }
}