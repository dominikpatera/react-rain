import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import {
  CurrentWeatherCard,
  CurrentWeatherCardRow,
  CurrentWeatherIcon,
  CurrentWeatherTitle,
  CurrentWeatherDescription,
  CurrentWeatherMainInfo,
  CurrentWeatherOtherInfoWrapper,
} from './CurrentWeather.styles';

const CurrentWeather: React.FC<CurrentWeatherProps> = props => {
  const { data } = props;
  if (Object.keys(data).length === 0) return <></>;
  return (
    <CurrentWeatherCard>
      <CurrentWeatherCardRow>
        <div>
          <CurrentWeatherTitle>Weather</CurrentWeatherTitle>
          <CurrentWeatherDescription>
            Weather in Karlín.
          </CurrentWeatherDescription>
        </div>

        <div>
          <CurrentWeatherMainInfo>
            <div className="first">22°C</div>
            <div className="second">11°C</div>
          </CurrentWeatherMainInfo>
          <div>Partly cloudy</div>
        </div>
        <CurrentWeatherIcon>
          <FontAwesomeIcon icon={faCloudSun} />
        </CurrentWeatherIcon>
      </CurrentWeatherCardRow>
      <CurrentWeatherCardRow>
        <CurrentWeatherOtherInfoWrapper className="pressure">
          <div className="title">Pressure</div>
          <div className="info">800mb</div>
        </CurrentWeatherOtherInfoWrapper>
        <CurrentWeatherOtherInfoWrapper className="visibility">
          <div className="title">Visibility</div>
          <div className="info">4.2km</div>
        </CurrentWeatherOtherInfoWrapper>
        <CurrentWeatherOtherInfoWrapper className="winddirection">
          <div className="title">Wind direction</div>
          <div className="info"> {'->'} </div>
        </CurrentWeatherOtherInfoWrapper>
      </CurrentWeatherCardRow>
    </CurrentWeatherCard>
  );
};

type CurrentWeatherProps = {
  data: any;
};

export default CurrentWeather;
