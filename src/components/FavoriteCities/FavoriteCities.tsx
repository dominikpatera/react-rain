import { useContext } from 'react';
import styled from 'styled-components';
import { UserSettingsContext } from '../../context/userSettings';
import CityWeatherWidget from '../Weather/CityWeatherWidget/CityWeatherWidget';

import formatTemperature from '../../actions/formatTemperature';

const FavoriteCities: React.FC<FavoriteCitiesProps> = props => {
  const { units } = useContext(UserSettingsContext);
  if (Object.keys(props.data).length <= 0) return <></>;
  console.log(props.data);
  return (
    <Grid>
      {props.data.map((city: any) => (
        <CityWeatherWidget
          name={city.name}
          icon={city.weather[0].icon}
          temperature={formatTemperature(city.main.temp, units)}
        />
      ))}
    </Grid>
  );
};

type FavoriteCitiesProps = {
  data: any;
};

export default FavoriteCities;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
