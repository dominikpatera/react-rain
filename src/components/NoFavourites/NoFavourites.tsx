import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../ErrorBox/ErrorBox';

const NoLocation = () => {
  const clickHandler = () => {};

  return (
    <ErrorBox
      msg="You don't have a favorite city. Let's find one!"
      icon={faHeart}
      iconColor="#ff5a8f"
      onClick={clickHandler}
      cursor="unset"
    />
  );
};

export default NoLocation;
