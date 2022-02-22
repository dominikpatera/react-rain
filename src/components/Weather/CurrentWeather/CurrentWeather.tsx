import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import {} from './CurrentWeather.styles';

const CurrentWeather: React.FC<CurrentWeatherProps> = props => {
  const { data } = props;

  if (Object.keys(data).length === 0) return <></>;

  return <div></div>;
};

type CurrentWeatherProps = {
  data: any;
};

export default CurrentWeather;
