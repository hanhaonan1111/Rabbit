let store = {
    tabBarData: []
}

function HomeReducer(state = store, action) {
    switch (action.type) {
        case 'home/setTabBarData':
            return {
                ...state,
                tabBarData: [...action.data]
            }
        default:
            return state;

    }
}

export default HomeReducer