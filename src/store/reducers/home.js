import { topCategory } from "../constants/constants"
let store = {
    topNav: [...topCategory],
    brandRelative: [],
    carousal: [],
    Newgoods: [],
    Recommend: [],
    Lastest: [],
    HotBrand: [],
    GoodsList: []
}

function Home(state = store, actions) {
    switch (actions.type) {
        case 'home/updateTopCategory':
            return {
                ...state,
                topNav: [...actions.payload]
            };
        case 'home/GetPinPai':
            return {
                ...state, brandRelative: [...actions.payload],
            }
        case 'home/SetCarousel':
            return {
                ...state,
                carousal: [...actions.payload]
            }
        case 'home/SetNewgoods':
            return { ...state, Newgoods: [...actions.payload] }
        case 'home/SetRecommend':
            return { ...state, Recommend: [...actions.payload] }
        case 'home/SetLastest':
            return { ...state, Lastest: [...actions.payload] }
        case 'home/SetHotBrand':
            return { ...state, HotBrand: [...actions.payload] }
        case 'home/SetGoodsList':
            return { ...state, GoodsList: [...actions.payload] }
        default:
            return { ...state }
    }

}

export default Home