let store = {
    CurrentCatagoryList: {},
    SubCatagoryList: {},
    FilterdGoods: {},
    FilterOption: {}

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
        case 'category/clearGoods':
            return {
                ...state,
                FilterdGoods: {}
            }
        case  'category/setFilterdGoods':
            let origin = state.FilterdGoods.items || []
            return {
                ...state,
                FilterdGoods: {
                    ...action.data,
                    items: [
                        ...origin,
                        ...action.data.items
                    ],
                    pages: action.data.pages,
                }

            }
        case  'category/setFilterOption':
            return {
                ...state,
                FilterOption: {...action.data}

            }
        default:
            return {...state}

    }
}




















