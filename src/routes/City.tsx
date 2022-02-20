import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWeather } from '../hooks';

const City = () => {
  const { cityName } = useParams();

  const { loading, error, actions } = useWeather('forecast');
  const { getWeatherByCityName } = actions;

  useEffect(() => {
    // getWeatherByCityName(cityName ? cityName : '').then(data => {
    //   setWeather(data);
    // });
  }, [cityName, getWeatherByCityName]);

  return (
    <>
      <div>{cityName}</div>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Something went wrong.</div>}
      {!loading && !error && <div></div>}
    </>
  );
};

export default City;
