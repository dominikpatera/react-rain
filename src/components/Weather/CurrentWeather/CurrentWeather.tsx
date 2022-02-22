import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import {} from './CurrentWeather.styles';
import { useContext } from 'react';
import { UserSettingsContext } from '../../../context/userSettings';
import { media } from '../../../styles/variables.styles';

const CurrentWeather: React.FC<CurrentWeatherProps> = props => {
  const { theme, units } = useContext(UserSettingsContext);
  const { data } = props;

  if (Object.keys(data).length === 0) return <></>;

  return (
    <CurrentWeatherWrapper theme={theme}>
      <CurrentWeatherIcon>
        <FontAwesomeIcon icon={faSun} />
      </CurrentWeatherIcon>
      <CurrentWeatherCity>
        <span className="city_name">Karlín</span>
        <div>Sunny</div>
      </CurrentWeatherCity>
      <CurrentWeatherTemperature>
        <span className="temperature_now">
          12°{units === 'metric' ? 'C' : 'F'}
        </span>
      </CurrentWeatherTemperature>
      <CurrentWeatherInfoBox className="pressure">
        <h3>Pressure</h3>
        <span>800mb</span>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox className="visibility">
        <h3>Visibility</h3>
        <span>3.2{units === 'metric' ? 'km' : 'mi'}</span>
      </CurrentWeatherInfoBox>
      <CurrentWeatherInfoBox className="wind_direction" rotate={0}>
        <h3>Wind direction</h3>
        <FontAwesomeIcon icon={faLocationArrow} />
      </CurrentWeatherInfoBox>
    </CurrentWeatherWrapper>
  );
};

type CurrentWeatherProps = {
  data: any;
};

export default CurrentWeather;

const CurrentWeatherWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 0.5rem;
  transition: all 0.3s;
  background-color: ${props =>
    props.theme === 'dark' ? '#343434' : '#e1e1e1'};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: -1px 3px 20px 0px rgb(114 99 99 / 46%);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 7px 10px 27px 0px rgb(114 99 99 / 46%);
  }

  & .city_name {
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (min-width: ${media.md}) {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: ${media.lg}) {
    width: 80%;
  }

  @media screen and (min-width: ${media.xl}) {
    width: 70%;
  }

  @media screen and (min-width: ${media.xxl}) {
    width: 60%;
  }
`;

const CurrentWeatherIcon = styled.div`
  display: flex;
  font-size: 3.5rem;
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
      font-size: 2rem;
      @media screen and (min-width: ${media.md}) {
        font-size: 2.5rem;
      }
    }
  }
`;

const CurrentWeatherInfoBox = styled.div<CurrentWeatherInfoBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.2rem;
  background-color: green;

  & h3 {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 1000;

    @media screen and (min-width: ${media.md}) {
      font-size: 1rem;
    }
  }

  &.pressure {
    background-color: white;
    color: #343434;
  }

  &.visibility {
    background-color: #cbe16a;
    color: hsl(0, 0%, 13%);
  }

  &.wind_direction {
    background-color: #c0f4fb;
    color: hsl(0, 0%, 13%);

    & svg {
      transform: rotate(calc(-45deg + ${props => props.rotate}deg));
    }
  }
`;

type CurrentWeatherInfoBoxProps = {
  rotate?: number;
};

const CurrentWeatherCity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
