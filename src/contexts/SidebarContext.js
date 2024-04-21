import React, { createContext, useState } from 'react';

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {

  const [isopen, setisOpen] = useState(false)

  const handleClose = () => {
    setisOpen(false)
  }
  return <SidebarContext.Provider value={{ setisOpen, isopen, handleClose }}>
    {children}
  </SidebarContext.Provider>
};

export default SidebarProvider;
