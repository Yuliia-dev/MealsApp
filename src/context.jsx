import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async url => {
      try {
        const { data } = await axios.get(url);
        setMeals(data.meals);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals }}>{children}</AppContext.Provider>
  );
};

//  CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext);
};
