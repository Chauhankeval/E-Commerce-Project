
import React, {useContext}from 'react';
import { Link } from 'react-router-dom';
import {BsPlus , BsEyeFill} from'react-icons/bs';
// cartContext 
import { CartContext } from '../contexts/CartContext';
const Product = ({product}) => {
  
  const {addToCart} = useContext(CartContext)
  // destrucure Product 
  const {id ,category, description ,image ,price ,rating ,title} = product;
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* image  */}
        <div className='w-[200px] flex justify-center items-center mx-auto'>
          <img className='max-w-[160px] group-hover:scale-110 transition-all duration-300' src={image}/>
        </div>
      </div>

      {/* buttons */}
      <div className='absolute top-5 -right-11 group-hover:right-5  p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={()=> addToCart(product,id)}><div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
          <BsPlus/>
          </div></button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill/></Link>
      </div>
    </div> 

    {/* Category &title & price*/}
    <div>
      <div className='text-sm capitalize text-gray-500'>{category}</div>
      <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-2'>{title}</h2>

      </Link>
      <h2 className='font-semibold'> ${price}</h2>


    </div>
  </div>;
};

export default Product;
