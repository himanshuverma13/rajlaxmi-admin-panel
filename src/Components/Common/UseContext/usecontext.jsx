import React, { createContext, use, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [CurrentProductDetails, setCurrentProductDetails] = useState();

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <UserContext.Provider
      value={{
        isSidebarOpen, toggleSidebar,CurrentProductDetails, setCurrentProductDetails
      }}
     
    >
      {children}
    </UserContext.Provider>
  );
};
