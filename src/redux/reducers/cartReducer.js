import ActionTypes from "../actionTypes";


const initialState = {
    cart: [],
    isLaoding,
    error: null,
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CART_LOADING:
            return { ...state, isLaoding: true };
        case ActionTypes.CART_ERROR:
            return { ...state, isLaoding: false, error: payload?.message };
        case ActionTypes.CART_SUCCESS:
            return { ...state, isLaoding: false, error: null, cart: payload };
        case ActionTypes.CREATE_ITEM:
            return { ...state, cart: state.cart.concat(payload) };
        case ActionTypes.UPDATE_ITEM:
            const updated = state.cart.map((i) => i.id === payload.id ? payload : i)
            return { ...state, cart: updated };
        case ActionTypes.DELETE_ITEM:
            const filtered = state.cart.filter((i) => i.id !== payload)
            return { ...state, cart: filtered }
        default:
            return state;
    }
} 