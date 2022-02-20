import { useContext } from 'react';
import { UserSettingsContext } from '../../context/userSettings';
import { Main } from './Content.styles';

const Content: React.FC = props => {
  const { theme } = useContext(UserSettingsContext);
  return <Main theme={theme}>{props.children}</Main>;
};

export default Content;
