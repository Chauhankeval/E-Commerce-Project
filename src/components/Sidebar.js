import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
//Cart item section
import CartItem from '../components/CartItem'
// SidebarContext 
import { SidebarContext } from '../contexts/SidebarContext';
// CartContext 
import { CartContext } from '../contexts/CartContext'



const Sidebar = () => {

  const { setisOpen, isopen, handleClose } = useContext(SidebarContext)
  const { cart, cleancart,totalPrice,itemAmount } = useContext(CartContext)

  return <div className={`overflow-y-auto ${isopen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>

    <div className='flex items-center justify-between py-5 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag({itemAmount})</div>

      {/* icons  */}
      <div onClick={handleClose} className='cursor-pointer flex justify-center w-8 h-8 items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex flex-col gap-y-2'>
      {
        cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })

      }
    </div>
    {/* sidebar bottom  */}
    <div className='flex justify-between gap-y-3 py-3 flex-col mt-4' >
      <div className='flex w-full justify-between items-center'>
        {/* total  */}
        <div className='flex uppercase font-semibold text-black'>
          <span className='mr-2'>Total :</span>${parseFloat(totalPrice).toFixed(2)}
        </div>
        <div className='bg-red-500 text-xl h-12 w-12 cursor-pointer flex justify-center items-center py-4 text-white'>
          <FiTrash2 onDoubleClick={() => cleancart()} />
        </div>
      </div>
    <Link className='bg-gray-200 flex justify-center items-center p-3 text-primary w-full font-medium' to={'/'}> View Cart</Link>
    <Link className='bg-primary text-white flex justify-center items-center p-3  w-full font-medium' to={'/'}>Check Out</Link>

    </div>
  </div>;
};

export default Sidebar;
