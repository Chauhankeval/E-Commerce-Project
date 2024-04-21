import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  // card state 
  const [cart, setCard] = useState([])
  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
  //Total price state
  const [totalPrice, setTotalPrice] = useState(0)

  //update Total price update
  useEffect(() => {
    const total = cart.reduce((accumalator, currentItem) => {
      return accumalator + currentItem.price * currentItem.amount
    }, 0)
    setTotalPrice(total)
  })

  // update item amount on the top of the icon bag 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumalator, currentItem) => {
        return accumalator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // add item in the cart 
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // check if the item alredy in the cart 
    const cartItem = cart.find((item) => {
      return item.id == id
    })

    // if item alredy in the cart 
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      })
      setCard(newCart)
    } else {
      setCard([...cart, newItem])
    }
  }



  // Remove From cart item
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCard(newCart)
  }


  //clear Cart 
  const cleancart = () => {
    setCard([])
  }


  //amount inc
  const amountInc = (id) => {
    const cartitem = cart.find((item) => item.id == id)
    addToCart(cartitem, id)
  }

  //dec amount
  const amountDec = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    //minus amount when click
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCard(newCart)
    }
    if (cartItem.amount < 1) {
      removeFromCart(id)
    }


  }

  return <CartContext.Provider value={{ cart, addToCart, totalPrice,removeFromCart, cleancart, amountInc, amountDec, itemAmount }}>{children}</CartContext.Provider>
};

export default CartProvider;
