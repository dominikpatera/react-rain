import { useContext, useEffect, useState } from 'react';
import NoLocation from '../components/NoLocation/NoLocation';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { GeolocationContext } from '../context/geolocation';
import { useWeather } from '../hooks';
import { Wrapper, Row } from './Home.styles';

const Home = () => {
  const { coords } = useContext(GeolocationContext);
  const locationWeather = useWeather('forecast');

  const error = locationWeather.error;
  const loading = locationWeather.loading;
  const [noCoords, setNoCoords] = useState(true);

  // const { data: locationWeatherData } = locationWeather;
  const { getWeatherByCoords, getWeatherByCityName } = locationWeather.actions;

  // Load Weather for user's location
  useEffect(() => {
    if (coords.lat === 0 && coords.lon === 0) {
      getWeatherByCityName('London');
      setNoCoords(true);
      return;
    }
    setNoCoords(false);
    getWeatherByCoords(coords);
  }, [getWeatherByCoords, getWeatherByCityName, coords]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  let currentWeatherMarkup = <></>;

  if (noCoords) {
    currentWeatherMarkup = <NoLocation />;
  } else {
    if (Object.keys(locationWeather.data).length > 0) {
      const [curWeather] = locationWeather.data.list;
      currentWeatherMarkup = (
        <CurrentWeather
          icon=""
          cityName={locationWeather.data.city.name}
          country={locationWeather.data.city.country}
          weatherDescr={curWeather.weather[0].description}
          temperature={Math.round(+curWeather.main.temp)}
          pressure={curWeather.main.pressure}
          visibility={(curWeather.visibility / 1000).toFixed(1)}
          windDirection={curWeather.wind.deg}
        />
      );
    }
  }

  return (
    <Wrapper>
      <Row>{currentWeatherMarkup}</Row>
      <div>
        <h3>Other cities</h3>
      </div>
    </Wrapper>
  );
};

export default Home;
