import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// product Provider 
import ProductProvider from './contexts/ProductContext';
//sidebar Provider
import SidebarProvider from './contexts/SidebarContext';
// CArdProvder
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>


    </CartProvider>
  </SidebarProvider>
);
