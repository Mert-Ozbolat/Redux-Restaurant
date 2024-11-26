import ActionTypes from "../actionTypes"
import api from '../../utils/api';


export const getCart = (dispatch) => () => {
    dispatch({ type: ActionTypes.CART_LOADING });
    api
        .get('/cart')
        .then((res) => dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err }))
} 