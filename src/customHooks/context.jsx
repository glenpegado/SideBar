import { createContext, useContext, useState } from 'react';
// custom hooks
const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

function AppProvider({ children }) {
  // useState
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Body
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
