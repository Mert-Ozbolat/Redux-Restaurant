import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteItem, updateItem } from '../redux/actions/basketActions';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(updateItem(item.id, item.amount + 1))
    }

    const handleDelete = () => {
        item.amount > 1
            ? dispatch(updateItem(item.id, item.amount - 1))
            : dispatch(deleteItem(item.id))
    }

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
                            item.amount > 1 ? <FaMinus onClick={handleDelete} /> : <FaTrash />
                        }
                    </button>

                    <span className='p-3'>{item.amount}</span>

                    <button onClick={handleAdd} className='btn'><FaPlus /></button>
                </div>

            </div>
        </div>
    )
}

export default CartItem