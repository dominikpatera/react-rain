import { useContext, useEffect, useState } from 'react';
import NoFavourites from '../components/NoFavourites/NoFavourites';
import NoLocation from '../components/NoLocation/NoLocation';
import CurrentWeather from '../components/Weather/CurrentWeather/CurrentWeather';
import { CitiesContext } from '../context/cities';
import { GeolocationContext } from '../context/geolocation';
import { useWeather } from '../hooks';
import { Wrapper, Row } from './Home.styles';
import FavoriteCities from '../components/FavoriteCities/FavoriteCities';

const Home = () => {
  const [noCoords, setNoCoords] = useState(true);

  const { coords } = useContext(GeolocationContext);
  const { cities } = useContext(CitiesContext);
  const locationWeather = useWeather('forecast');
  const citiesWeather = useWeather('weather');

  const error = locationWeather.error || citiesWeather.error;
  const loading = locationWeather.loading || citiesWeather.loading;

  const { getWeatherByCoords, getWeatherByCityName } = locationWeather.actions;
  // Load Weather for user's location
  useEffect(() => {
    if (coords.lat === 0 && coords.lon === 0) {
      setNoCoords(true);
      return;
    }
    setNoCoords(false);
    getWeatherByCoords(coords);
  }, [getWeatherByCoords, getWeatherByCityName, coords]);

  const { getWeatherByCityNames } = citiesWeather.actions;
  // Load weather for fav cities
  useEffect(() => {
    if (cities.length > 0) getWeatherByCityNames(cities.map(c => c.name));
  }, [getWeatherByCityNames, cities]);

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
          icon={curWeather.weather[0].icon}
          cityName={locationWeather.data.city.name}
          country={locationWeather.data.city.country}
          weatherDescr={curWeather.weather[0].description}
          temperature={+curWeather.main.temp}
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
        <h3>Your cities</h3>
        {cities.length <= 0 && (
          <Row>
            <NoFavourites />
          </Row>
        )}
        {cities.length > 0 && <FavoriteCities data={citiesWeather.data} />}
      </div>
    </Wrapper>
  );
};

export default Home;
