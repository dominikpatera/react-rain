import { useContext } from 'react';
import { UserSettingsContext } from '../../context/userSettings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { StyledFooter, Link } from './Footer.styles';

const Footer = () => {
  const { theme } = useContext(UserSettingsContext);
  return (
    <StyledFooter theme={theme}>
      <Link
        href="https://github.com/dominikpatera"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/dominikpatera/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link
        href="https://twitter.com/dominikpatera"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </StyledFooter>
  );
};

export default Footer;
