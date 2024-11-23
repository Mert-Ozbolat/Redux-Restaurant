import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Types from '../redux/actionTypes'




const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({ type: Types.REST_LOADING })

        axios.get("http://localhost:3000/restaurants")
            .then((res) => dispatch({ type: Types.REST_SUCCESS, payload: res.data }))
            .catch((err) => dispatch({ type: Types.REST_ERROR, payload: err }))
    }, [])




    return (
        <div>Home</div>
    )
}

export default Home