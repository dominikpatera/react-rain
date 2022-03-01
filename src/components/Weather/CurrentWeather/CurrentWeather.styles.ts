import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../../styles/variables.styles';

export const CurrentWeatherWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
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

export const CurrentWeatherIcon = styled.div`
  display: flex;
  font-size: 3.5rem;
  justify-content: center;
  align-items: center;
  color: hsl(33, 100%, 67%);
`;

export const CurrentWeatherTemperature = styled.div`
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

export const CurrentWeatherInfoBox = styled.div<CurrentWeatherInfoBoxProps>`
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

export const CurrentWeatherCity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
