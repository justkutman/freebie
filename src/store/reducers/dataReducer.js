let initialState = {
    data: [],
    avatar: null,
    account: 'bank'
};


const data = (state = initialState, action) => {
    console.log(state.data)
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case "GET_AVATAR":
            return {
                ...state,
                avatar: action.payload
            };
        case "SELECT_ACCOUNT":
            return {
                ...state,
                account: action.payload
            }
        default:
            return state;

    }
};


export default data;