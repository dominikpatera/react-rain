export type GetWeatherCoords = {
  lat: number;
  lon: number;
};
export type GetWeatherDataTypes = 'forecast' | 'weather';
export type GetWeatherTypes = 'coords' | 'city_name';
export type GetWeatherOptions = {
  coords?: GetWeatherCoords;
  cityName?: string;
  data?: 'push' | 'replace';
};
