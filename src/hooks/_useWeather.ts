import axios from 'axios';
import { useCallback, useState } from 'react';
import {
  GetWeatherCoords,
  GetWeatherDataTypes,
  GetWeatherOptions,
  GetWeatherTypes,
} from '../types/useWeather.types';

/**
 * @typedef {Object} UseHookActions
 * @property {function} getWeatherByCoords
 * @property {function} getWeatherByCityName
 */
/**
 * @typedef {Object} UseHook
 * @property {boolean} loading - state of loading
 * @property {(boolean | string)} error - state of error
 * @property {UseHookActions} actions
 */
/**
 * A custom hook that works with OpenWeather API and returns corresponding data
 * @param {GetWeatherDataTypes} typeOfData
 * @returns {UseHook}
 */
export const useWeather = (typeOfData: GetWeatherDataTypes = 'weather') => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | any[]>({});
  const [error, setError] = useState<string | boolean>(false);

  /**
   * Main function that calls API and returns its response data
   *
   * @param type
   * @param options
   * @returns {Object} OpenWeather API response data
   */
  const getWeather = useCallback(
    async (type: GetWeatherTypes, options: GetWeatherOptions) => {
      setError(false);
      // Creating url for API call
      const url = `${process.env.REACT_APP_OPENWEATHER_URL}${typeOfData}?${
        type === 'coords'
          ? `lat=${options!.coords!.lat}&lon=${options!.coords!.lon}`
          : `q=${options.cityName}`
      }&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
      setLoading(true);

      try {
        const response = await axios(url);
        if (response.statusText !== 'OK')
          throw new Error(
            `Unable to get weather for ${JSON.stringify(options)}`
          );

        setLoading(false);
        if (options.data === 'push') return response.data;

        setData(response.data);
      } catch (err: unknown) {
        setLoading(false);

        if (err instanceof Error) setError(err.message);

        setData({});
      }
    },
    [typeOfData]
  );

  /**
   * Returns a weather data by coords
   *
   * @param {GetWeatherCoords} coords - Coordinates of place for which we wants to fetch a weather
   */
  const getWeatherByCoords = useCallback(
    (coords: GetWeatherCoords) => {
      getWeather('coords', { coords, data: 'replace' });
    },
    [getWeather]
  );
  /**
   * Returns a weather data by City Name
   *
   * @param {string} cityName - City name of place for which we wants to fetch a weather
   */
  const getWeatherByCityName = useCallback(
    (cityName: string) => {
      getWeather('city_name', { cityName, data: 'replace' });
    },
    [getWeather]
  );

  /**
   * Returns a weather data by City Name
   *
   * @param {string[]} cityNames - City name of place for which we wants to fetch a weather
   */
  const getWeatherByCityNames = useCallback(
    async (cityNames: string[]) => {
      const res = await Promise.all(
        cityNames.map(cityn =>
          getWeather('city_name', { cityName: cityn, data: 'push' })
        )
      );
      setData(res);
    },
    [getWeather]
  );

  return {
    data,
    loading,
    error,
    actions: {
      getWeatherByCoords,
      getWeatherByCityName,
      getWeatherByCityNames,
    },
  };
};
