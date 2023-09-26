import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async url => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setMeals(data.meals);
      } catch (error) {
        console.log(error.response);
      }
      setLoading(false);
    };
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals, loading }}>
      {children}
    </AppContext.Provider>
  );
};

//  CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext);
};
