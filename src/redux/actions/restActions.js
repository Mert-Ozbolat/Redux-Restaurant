import axios from "axios";
import ActionTypes from "../actionTypes";

export const setRestaurants = (payload) => ({
    type: ActionTypes.REST_LOADING,
    payload,
});

export const getRestaurants = () => {
    return (dispath) => {
        dispath({ type: ActionTypes.REST_LOADING });
        axios
            .get("http://localhost:3000/restaurants")
            .then((res) =>
                dispath({ type: ActionTypes.REST_SUCCESS, payload: res.data })
            )
            .catch((err) => dispath({
                type: ActionTypes.REST_ERROR,
                payload: err
            }));
    };

};