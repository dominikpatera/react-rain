import axios from 'axios';
import { useCallback, useContext, useState } from 'react';
import {
  GetWeatherCoords,
  GetWeatherDataTypes,
  GetWeatherOptions,
  GetWeatherTypes,
} from '../types/useWeather.types';

import { UserSettingsContext } from '../context/userSettings';

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
  const { units } = useContext(UserSettingsContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
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
      // Creating url for API call
      const url = `${process.env.REACT_APP_OPENWEATHER_URL}${typeOfData}?${
        type === 'coords'
          ? `lat=${options!.coords!.lat}&lon=${options!.coords!.lon}`
          : `q=${options.cityName}`
      }&units=${units}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

      setLoading(true);

      try {
        const response = await axios(url);
        if (response.statusText !== 'OK')
          throw new Error(
            `Unable to get weather for ${JSON.stringify(options)}`
          );

        setLoading(false);
        setData(response.data);
      } catch (err: unknown) {
        setLoading(false);

        if (err instanceof Error) setError(err.message);

        setData({});
      }
    },
    [typeOfData, units]
  );

  /**
   * Returns a weather data by coords
   *
   * @param {GetWeatherCoords} coords - Coordinates of place for which we wants to fetch a weather
   * @returns {(type:GetWeatherTypes, options: GetWeatherOptions) => Object}
   */
  const getWeatherByCoords = useCallback(
    (coords: GetWeatherCoords) => {
      getWeather('coords', { coords });
    },
    [getWeather]
  );
  /**
   * Returns a weather data by City Name
   *
   * @param {string} cityName - City name of place for which we wants to fetch a weather
   * @returns {(type:GetWeatherTypes, options: GetWeatherOptions) => Object}
   */
  const getWeatherByCityName = useCallback(
    (cityName: string) => {
      getWeather('city_name', { cityName });
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
    },
  };
};
