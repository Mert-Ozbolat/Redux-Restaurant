import React from 'react'
import { BsBasket } from 'react-icons/bs'
import { IoRestaurant } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Header = () => {

    const { restaurants } = useSelector((store) => store.restaurantReducer);
    const { cart } = useSelector((store) => store.cartReducer)
    const totalAmount = cart.reduce((total, i) => total + i.amount, 0)

    return (
        <div className='shadow'>
            <div className='container flex justify-between items-center'>
                <Link to={"/"} className="text-red-500 font-[900] text-2xl font-mono md:text-3xl" />
                Thunk Sepet
            </div>

            <div className='flex gap-5'>
                <Link
                    className='flex items-center gap-1 hover:underline cursor-pointer'
                    to="/">Yakininizda {restaurants?.length} <IoRestaurant className='text-red-500' /><span className='max-md:hidden'> Restorant var</span></Link>

                <button className='button'>Giriş Yap</button>
                <button className='button'>Kayıt Ol</button>

                <Link to="/cart"
                    className='flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded-full'
                >
                    <BsBasket />
                    <span>{totalAmount}</span>
                </Link>

            </div>
        </div>
    )
}

export default Header