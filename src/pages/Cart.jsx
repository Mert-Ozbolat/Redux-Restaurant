import React from 'react'
import OrderBox from '../components/OrderBox'
import CartItem from '../components/CartItem'

const Cart = () => {
    return (
        <div className='container'>
            <h1 className='text-2xl font-bold mb-5'>Sepet</h1>

            <div className='grid md:grid-cols-[1fr_300px] gap-4'>
                <OrderBox />

                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

            </div>
        </div>
    )
}

export default Cart