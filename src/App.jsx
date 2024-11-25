import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'
import { useDispatch } from 'react-redux'
import { getRestaurants } from './redux/actions/restActions'



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);


  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App