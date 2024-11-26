import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {
    return (
        <div className='flex gap-4 border mb-10 rounded-lg p-4'>
            <img className='w-[115px] rounded-lg' src={item.photo} />

            <div className='w-full flex flex-col justify-between'>
                <h3 className='text-xl font-semibold text-red-500'>{item.title}</h3>

                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg'>{item.price}$</p>
                </div>

                <div className='border text-xl rounded-lg'>
                    <button className='btn'>
                        {
                            item.amount > 1 ? <FaMinus /> : <FaTrash />
                        }
                    </button>

                    <span className='p-3'>{item.amount}</span>

                    <button className='btn'><FaPlus /></button>
                </div>

            </div>
        </div>
    )
}

export default CartItem