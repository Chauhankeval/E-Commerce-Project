import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  //Product State
  const [product, setProduct] = useState([])
  // fetch product 
  useEffect(() => {
    const fetchProduct = async () => {
      const Responce = await fetch("https://fakestoreapi.com/products")
      const data = await Responce.json()
      setProduct(data)
    }
    fetchProduct()
  }, [])
  return <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
