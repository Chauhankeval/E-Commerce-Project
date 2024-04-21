import React, { useContext } from 'react';
// params 
import { useParams } from 'react-router-dom'
// card Context 
import { CartContext } from '../contexts/CartContext'
// product Context 
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  //get the is from url
  const { id } = useParams()

  const { product } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  // get the single Product based on id 
  const getproduct = product.find((item) => {
    return item.id === parseInt(id)
  })

  // if product is not found 
  if (!getproduct) {
    return <section className='h-screen flex justify-center items-center'>Loading.....</section>
  }

  // destructure Product 
  const { description, image, price, title } = getproduct; // Fix here, changed from 'product' to 'getproduct'
  console.log(getproduct)

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* image & text of section */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
          </div>
          {/* text */}
          <div className="flex flex-col lg:mx-0 flex-1 text-center lg:text-left">
            <h2 className="text-[26px] font-medium mb-2 max-w-[450px]">{title}</h2>
           <div className='text-xl text-red-500 font-medium mb-6 '>
            {price}
           </div>
           <p className='mb-8'>{description}</p>
           <button onClick={()=> addToCart(getproduct,getproduct.id)} className='bg-primary py-4 px-8 text-white'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
