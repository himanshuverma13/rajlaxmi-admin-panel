import React, { createContext, use, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [UserLogins ,setUserLogin] = useState();
  
  const [CurrentProductDetails, setCurrentProductDetails] = useState();
  const [TokenContext, setTokenContext] = useState();

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <UserContext.Provider
      value={{
        isSidebarOpen, toggleSidebar,CurrentProductDetails, setCurrentProductDetails,UserLogins ,setUserLogin,TokenContext, setTokenContext
      }}
     
    >
      {children}
    </UserContext.Provider>
  );
};
