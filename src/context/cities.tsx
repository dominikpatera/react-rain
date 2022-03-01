import React, { useCallback, useEffect, useState } from 'react';
import { CitiesContextType, City } from '../types/cities.types';

const initialCities: City[] = [];

/**
 * Context that handle user's geolocation data
 */
export const CitiesContext = React.createContext<CitiesContextType>({
  cities: initialCities,
  addCity: (name: string) => {},
  removeCity: (uuid: number) => {},
});

const Provider: React.FC = props => {
  const [cities, setCities] = useState(initialCities);

  /**
   * Helper function to withdraw data from local storage
   * and set them to context
   */
  const getLocalStorage = useCallback(() => {
    const rawData = localStorage.getItem('favorite-cities');

    if (rawData === null) return;

    const data: City[] = JSON.parse(rawData);
    setCities(data);
  }, []);

  // After first load
  useEffect(() => {
    getLocalStorage();
  }, [getLocalStorage]);

  useEffect(() => {
    setLocalStorage(cities);
  }, [cities]);

  /**
   * Helper function to save data into local storage
   *
   * @param {City[]} data - data to save in local storage
   */
  const setLocalStorage = (data: City[]) => {
    localStorage.setItem('favorite-cities', JSON.stringify(data));
  };

  const addCity = (name: string) => {
    setCities(prevCities => [
      ...prevCities,
      { name, uuid: +Date.now().toString().slice(-9) },
    ]);
  };

  const removeCity = (uuid: number) => {
    const index = cities.findIndex(city => city.uuid === uuid);
    if (index < 0) return;
    setCities(prevCities => prevCities.filter(c => c.uuid !== uuid));
  };

  return (
    <CitiesContext.Provider value={{ cities, addCity, removeCity }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default Provider;
