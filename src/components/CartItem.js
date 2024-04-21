import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
// cartContext 
import { CartContext } from '../contexts/CartContext';
import { FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item }) => {

  const { id, title, price, amount, image } = item
  const { removeFromCart, amountInc, amountDec } = useContext(CartContext)
  return (


    <>
      <div className='flex gap-x-4 py-2 lg:px-6 border-b'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4 border-gray-200 font-light text-gray-500'>
          {/* image  */}
          <Link to={`/product/${id}`}>
            <img className='max-w-[80px]' src={image} />

          </Link>
          <div className='w-full flex flex-col'>
            {/* title & Remove Icon  */}
            <div className='flex justify-between mb-2 '>
              {/* title  */}
              <div>
                <Link to={`/product/${id}`}>{title}</Link>
              </div>
              {/* Remove icon  */}
              <div className='text-xl cursor-pointer'>
                <IoMdClose onClick={() => removeFromCart(id)} className='text-gray-500 hover:text-red-400 transition' />
              </div>
            </div>

            {/* quantity */}
            <div className=' flex gap-x-3 h-[36px] text-sm'>

              <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
                <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                  <IoMdRemove onClick={() => amountDec(id)} />
                </div>
                <div className='h-full flex justify-center items-center px-2'>
                  {amount}
                </div>
                <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                  <IoMdAdd onClick={() => amountInc(id)} />
                </div>
              </div>


              {/* price  */}
              <div className='flex flex-1 justify-around items-center'>${price}</div>
              {/* final Price  */}
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>${`${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>

        </div>


      </div>

    </>
  )
};

export default CartItem;
