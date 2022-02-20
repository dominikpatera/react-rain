import styled from 'styled-components';
import { InfoCard } from '../../Card/Card';

export const CurrentWeatherCard = styled(InfoCard)`
  display: flex;
  flex-direction: column;
  background: rgb(20, 188, 247);
  background: linear-gradient(
    121deg,
    rgba(20, 188, 247, 1) 0%,
    rgba(16, 105, 244, 1) 100%
  );
  color: #000;
`;

export const CurrentWeatherCardRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const CurrentWeatherIcon = styled.div`
  font-size: 4rem;
  background-color: white;
  padding: 2rem;
  border-radius: 9999px;
  color: hsl(33, 100%, 67%);
  box-shadow: 5px 2px 50px -14px rgba(0, 0, 0, 0.62);
  margin-left: auto;
`;

export const CurrentWeatherDescription = styled.div`
  padding: 0.5rem 0;
`;

export const CurrentWeatherTitle = styled(CurrentWeatherDescription)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CurrentWeatherMainInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CurrentWeatherMainInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & .first {
    font-size: 3rem;
    margin-right: 1.5rem;
  }

  & .second {
    font-size: 2rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 5px 2px 50px -14px rgba(0, 0, 0, 0.62);
  }
`;

export const CurrentWeatherOtherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: green;
  padding: 2rem 1rem;
  box-shadow: 5px 2px 50px -14px rgba(0, 0, 0, 0.62);

  &.pressure {
    background-color: black;
    color: white;
  }

  &.visibility {
    background-color: #cbe16a;
  }

  &.winddirection {
    background-color: white;
  }

  & .info {
    font-size: 2rem;
  }
`;
