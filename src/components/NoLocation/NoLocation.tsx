import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { GeolocationContext } from '../../context/geolocation';
import ErrorBox from '../ErrorBox/ErrorBox';

const NoLocation = () => {
  const { setCoords } = useContext(GeolocationContext);
  const clickHandler = () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const localPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setCoords(localPosition);
    });
  };

  return (
    <ErrorBox
      msg="Share your location."
      icon={faLocationArrow}
      iconColor="#0045c3"
      onClick={clickHandler}
      cursor="pointer"
    />
  );
};

export default NoLocation;
