import { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';

import { UserSettingsContext } from '../../context/userSettings';
import {
  StyledHeader,
  Logo,
  Settings,
  SettingsItem,
  SearchItem,
} from './Header.styles';
import Search from '../../components/Search/Search';
import UnitsPicker from '../../components/UnitsPicker/UnitsPicker';
import { UserSettingsUnitsType } from '../../types/userSettings.types';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { theme, setTheme, units, setUnits } = useContext(UserSettingsContext);

  const unitsChangeHandler = (setUnitsTo: UserSettingsUnitsType) => {
    setUnits(setUnitsTo);
  };

  const themeClickHandler = () => {
    const setThemeTo = theme === 'dark' ? 'light' : 'dark';
    setTheme(setThemeTo);
  };

  const toggleShowSearch = () => {
    setShowSearch(prevState => !prevState);
  };

  const searchSubmitHandler = () => setShowSearch(false);

  return (
    <StyledHeader theme={theme}>
      <Logo to="/" theme={theme}>
        react-rain
      </Logo>
      <Search onSubmit={searchSubmitHandler} show={showSearch} theme={theme} />
      <Settings show={!showSearch}>
        <SettingsItem
          onClick={themeClickHandler}
          themeChanger={true}
          theme={theme}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
        </SettingsItem>
        <UnitsPicker
          selectedUnits={units}
          onUnitsChange={unitsChangeHandler}
          theme={theme}
        />
        <SearchItem onClick={toggleShowSearch} show={!showSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchItem>
      </Settings>
    </StyledHeader>
  );
};

export default Header;
