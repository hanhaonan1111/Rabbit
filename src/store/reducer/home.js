let store = {
    tabBarData: [],
    TabPinPai: [],
    swiperData: [],
    HomeNewGoods: [],
    Recommend: [],
    HotBrand: [],
    production: []
}

function HomeReducer(state = store, action) {
    switch (action.type) {
        case 'home/setTabBarData':
            return {
                ...state,
                tabBarData: [...action.data]
            }
        case '/home/SetPinPai':
            return {
                ...state,
                TabPinPai: [...action.data]
            }
        case 'home/swiperData':
            return {
                ...state,
                swiperData: [...action.data]
            }
        case 'home/setNewGoods':
            return {
                ...state,
                HomeNewGoods: [...action.data]
            }
        case 'home/setRecommend':
            return {
                ...state,
                Recommend: [...action.data]
            }
        case 'home/setHotReand':
            return {
                ...state,
                HotBrand: [...action.data]
            }
        case  'home/setHomeProduct':
            return {
                ...state,
                production: [...action.data]
            }
        default:
            return state;

    }
}

export default HomeReducer