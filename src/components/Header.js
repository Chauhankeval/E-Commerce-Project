import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'
// cartContaxt 
import { CartContext } from '../contexts/CartContext';
//link
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'



const Header = () => {
  //header state
  const [isActive, SetIsActive] = useState(true)
  // destrucure value 
  const { setisOpen, isopen, handleClose } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  
  // event Listener 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? SetIsActive(true) : SetIsActive(false)
    })
  })


  return <div className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>

      <Link to={'/'}>
        {/* logo */}
        <div >
          <img className='w-[40px]' src={Logo} />
        </div>
      </Link>

      <div onClick={() => setisOpen(!isopen)}
        className='cursor-pointer flex relative'
      >
        <BsBag className='text-2xl' />
        <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
  </div>;
};

export default Header;
