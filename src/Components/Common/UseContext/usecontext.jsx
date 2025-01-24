import React, { createContext, use, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <UserContext.Provider
      value={{
        isSidebarOpen, toggleSidebar
      }}
     
    >
      {children}
    </UserContext.Provider>
  );
};
