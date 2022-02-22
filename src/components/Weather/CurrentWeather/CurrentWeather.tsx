import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import {} from './CurrentWeather.styles';

const CurrentWeatherWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  & .info {
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: flex-end;

    & span {
      font-size: 1.25rem;
    }
  }
`;

const CurrentWeatherIcon = styled.div`
  display: flex;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  color: hsl(33, 100%, 67%);
`;

const CurrentWeatherTemperature = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & .temperature {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    &_now {
      font-size: 3rem;
    }

    &_12hours {
      font-size: 1.5rem;
      background-color: white;
      color: hsl(0, 0%, 13%);
      border-radius: 5px;
      padding: 0.25rem;
    }
  }
`;

const CurrentWeatherInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    margin: 0;
  }

  & .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background-color: green;
    width: 75%;

    &__pressure {
      background-color: #343434;
      color: white;
    }

    &__visibility {
      background-color: #cbe16a;
      color: hsl(0, 0%, 13%);
    }

    &__direction {
      background-color: #c0f4fb;
      color: hsl(0, 0%, 13%);
    }
  }
`;

const CurrentWeather: React.FC<CurrentWeatherProps> = props => {
  const { data } = props;

  if (Object.keys(data).length === 0) return <></>;

  return (
    <CurrentWeatherWrapper>
      <div className="info">
        <h2>Weather</h2>
        <span>📍 Karlín</span>
      </div>
      <CurrentWeatherIcon>
        <FontAwesomeIcon icon={faSun} />
      </CurrentWeatherIcon>
      <CurrentWeatherTemperature>
        <div className="temperature">
          <span className="temperature_now">12°C</span>
          <span className="temperature_12hours">2°C </span>
        </div>
        <div>Partly Cloudy</div>
      </CurrentWeatherTemperature>
      <CurrentWeatherInfoBox>
        <div className="box box__pressure">
          <h3>Pressure</h3>
          <span>800mb</span>
        </div>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox>
        <div className="box box__visibility">
          <h3>Visibility</h3>
          <span>3.2km</span>
        </div>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox>
        <div className="box box__direction">
          <h3>Wind direction</h3>
          <span>(N)</span>
        </div>
      </CurrentWeatherInfoBox>
    </CurrentWeatherWrapper>
  );
};

type CurrentWeatherProps = {
  data: any;
};

export default CurrentWeather;
