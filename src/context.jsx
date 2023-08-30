import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(allMealsUrl);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

//  CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext);
};
