import ActionTypes from "../actionTypes";




const initialState = {
    cart: [],
    isLaoding,
    error: null,
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CART_LOADING:
            return { ...state, isLaoding: true };
        case ActionTypes.CART_ERROR:
            return { ...state, isLaoding: false, error: action.payload?.message };
        case ActionTypes.CART_SUCCESS:
            return { ...state, isLaoding: false, error: null, cart: action.payload };
        default:
            return state;
    }
} 