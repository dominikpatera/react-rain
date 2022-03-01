import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import {
  CurrentWeatherWrapper,
  CurrentWeatherIcon,
  CurrentWeatherCity,
  CurrentWeatherTemperature,
  CurrentWeatherInfoBox,
} from './CurrentWeather.styles';
import { useContext } from 'react';
import { UserSettingsContext } from '../../../context/userSettings';

const CurrentWeather: React.FC<CurrentWeatherProps> = props => {
  const { theme, units } = useContext(UserSettingsContext);

  if (Object.keys(props).length === 0) return <></>;

  return (
    <CurrentWeatherWrapper
      to={`/city/${props.cityName},${props.country}`}
      theme={theme}
    >
      <CurrentWeatherIcon>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.weatherDescr}
        />
      </CurrentWeatherIcon>
      <CurrentWeatherCity>
        <span className="city_name">{props.cityName}</span>
        <div>{props.weatherDescr}</div>
      </CurrentWeatherCity>
      <CurrentWeatherTemperature>
        <span className="temperature_now">
          {props.temperature}°{units === 'metric' ? 'C' : 'F'}
        </span>
      </CurrentWeatherTemperature>
      <CurrentWeatherInfoBox className="pressure">
        <h3>Pressure</h3>
        <span>{props.pressure}mb</span>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox className="visibility">
        <h3>Visibility</h3>
        <span>{props.visibility}km</span>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox
        className="wind_direction"
        rotate={props.windDirection}
      >
        <h3>Wind direction</h3>
        <FontAwesomeIcon icon={faLocationArrow} />
      </CurrentWeatherInfoBox>
    </CurrentWeatherWrapper>
  );
};

type CurrentWeatherProps = {
  icon: string;
  cityName: string;
  country: string;
  weatherDescr: string;
  temperature: number;
  pressure: number;
  visibility: string;
  windDirection: number;
};

export default CurrentWeather;
