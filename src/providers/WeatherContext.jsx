import { createContext, useContext } from 'react';

const WeatherContext = createContext({});

const useWeatherContext = () => useContext(WeatherContext);

const WeatherContextProvider = ({ children, value }) => {
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export { useWeatherContext, WeatherContextProvider };
