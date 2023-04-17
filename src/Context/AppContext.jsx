import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ sidebarIsOpen, setSidebarIsOpen,modalIsOpen,setModalIsOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};
