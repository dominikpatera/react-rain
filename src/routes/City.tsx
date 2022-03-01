import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CitiesContext } from '../context/cities';
import { useWeather } from '../hooks';
import { City } from '../types/cities.types';

const CityComponent = () => {
  const { cities, addCity, removeCity } = useContext(CitiesContext);
  const [isFavorite, setIsFavorite] = useState<City>();
  const { cityName } = useParams();

  const { data, loading, error, actions } = useWeather('forecast');
  const { getWeatherByCityName } = actions;

  const checkIfFavorite = useCallback(() => {
    if (Object.keys(data).length === 0) return;
    const city = cities.find(
      c => c.name === `${data.city.name},${data.city.country}`
    );
    setIsFavorite(city);
  }, [cities, data]);

  useEffect(() => {
    getWeatherByCityName(cityName ? cityName : '');
  }, [cityName, getWeatherByCityName]);

  useEffect(() => {
    checkIfFavorite();
  }, [data, checkIfFavorite]);

  const toggleFavorite = () => {
    const setFav = !(isFavorite && Object.keys(isFavorite).length > 0);
    if (setFav) {
      addCity(`${data.city.name},${data.city.country}`);
      return;
    }

    removeCity(isFavorite.uuid);
  };

  return (
    <>
      <div>{cityName}</div>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Something went wrong.</div>}
      {!loading && !error && (
        <div>
          <div>
            <button onClick={toggleFavorite}>
              {isFavorite
                ? Object.keys(isFavorite).length > 0
                  ? 'Fav'
                  : 'Not Fav'
                : 'Not Fav'}
            </button>
          </div>
          <div>{JSON.stringify(data)}</div>
        </div>
      )}
    </>
  );
};

export default CityComponent;
