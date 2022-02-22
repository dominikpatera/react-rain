import { useContext, useEffect } from 'react';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { GeolocationContext } from '../context/geolocation';
import { useWeather } from '../hooks';
import { Grid } from './Home.styles';

const Home = () => {
  const { coords } = useContext(GeolocationContext);
  const locationWeather = useWeather('forecast');

  const error = locationWeather.error;
  const loading = locationWeather.loading;

  // const { data: locationWeatherData } = locationWeather;
  const { getWeatherByCoords, getWeatherByCityName } = locationWeather.actions;

  // Load Weather for user's location
  useEffect(() => {
    if (coords.lat === 0 && coords.lon === 0) {
      getWeatherByCityName('London');
      return;
    }
    getWeatherByCoords(coords);
  }, [getWeatherByCoords, getWeatherByCityName, coords]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <Grid>
      <CurrentWeather
        data={locationWeather.data.list ? locationWeather.data.list[0] : {}}
      />
    </Grid>
  );
};

export default Home;
