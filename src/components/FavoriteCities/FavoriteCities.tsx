import styled from 'styled-components';
import CityWeatherWidget from '../Weather/CityWeatherWidget/CityWeatherWidget';

const DUMMY_CITIES = [
  {
    name: 'Praha',
    temperature: 10,
    icon: '10n',
  },
  {
    name: 'Dubaj',
    temperature: 20,
    icon: '01d',
  },
  {
    name: 'LOL',
    temperature: 10,
    icon: '02n',
  },
];

const FavoriteCities: React.FC<FavoriteCitiesProps> = props => {
  // if (Object.keys(props.data).length <= 0) return <></>;
  // console.log(props.data);
  return (
    <Grid>
      {DUMMY_CITIES.map((city: any) => (
        <CityWeatherWidget
          name={city.name}
          icon={city.icon}
          temperature={city.temperature}
        />
      ))}
    </Grid>
  );
};

type FavoriteCitiesProps = {
  // data: any;
};

export default FavoriteCities;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
