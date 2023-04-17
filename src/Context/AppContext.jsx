import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <AppContext.Provider value={{isOpen,setIsOpen}}>{children}</AppContext.Provider>;
};
