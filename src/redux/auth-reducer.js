const initialState = {
    id: 1111,
    token: "qwerweretwe214",
    name: "Vadim Fayrushin",
    avatar: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default authReducer;
