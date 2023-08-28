import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log('fatch data here');
  }, []);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

//  CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext);
};
