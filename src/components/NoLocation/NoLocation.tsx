import { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { UserSettingsContext } from '../../context/userSettings';
import { media } from '../../styles/variables.styles';
import { GeolocationContext } from '../../context/geolocation';

const NoLocation = () => {
  const { theme } = useContext(UserSettingsContext);
  const { setCoords } = useContext(GeolocationContext);

  const shareLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const localPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setCoords(localPosition);
    });
  };

  return (
    <NoLocationWrapper onClick={shareLocationHandler} theme={theme}>
      <Row>
        <IconWrapper>
          <FontAwesomeIcon icon={faLocationArrow} />
        </IconWrapper>
      </Row>
      <Row>Share location</Row>
    </NoLocationWrapper>
  );
};

export default NoLocation;

const IconWrapper = styled.div`
  color: #0000c3;
  background-color: white;
  font-size: 2rem;
  padding: 1.5rem;
  border-radius: 9999rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  color: inherit;

  font-size: 1.5rem;
`;

const NoLocationWrapper = styled.div`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  flex-direction: column;
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
