import React from 'react'
import OrderBox from '../components/OrderBox'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { Warning } from 'postcss'

const Cart = () => {

    const { cart, error, isLoading } = useSelector((store) => store.cartReducer)

    return (
        <div className='container'>
            <h1 className='text-2xl font-bold mb-5'>Sepet</h1>

            <div className='grid md:grid-cols-[1fr_300px] gap-4'>
                <div>
                    {
                        isLoading ? (
                            <Loader />
                        ) : error ? (
                            <Error />
                        ) : cart.length === 0 ? (
                            <Warning />
                        ) : (
                            cart.map((item) => <CartItem key={item.id} item={item} />)
                        )
                    }
                </div>

                <OrderBox cart={cart} />
            </div>
        </div>
    )
}

export default Cart