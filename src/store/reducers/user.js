let store = {
    profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
    }
}

function userReducer(state = store, action) {
    switch (action.type) {
        default:
            return { ...state }
    }
}

export default userReducer