import React, { useCallback, useEffect, useState } from 'react';
import {
  UserSettings,
  UserSettingsContextType,
  UserSettingsThemeType,
  UserSettingsUnitsType,
} from '../types/userSettings.types';

const initialUserSettings: UserSettings = {
  theme: 'dark',
  units: 'metric',
};

/**
 * Context that handle user's settings that includes theme and units
 */
export const UserSettingsContext = React.createContext<UserSettingsContextType>(
  {
    ...initialUserSettings,
    setTheme: (theme: UserSettingsThemeType) => {},
    setUnits: (units: UserSettingsUnitsType) => {},
  }
);

const Provider: React.FC = props => {
  const [theme, setThemeState] = useState(initialUserSettings.theme);
  const [units, setUnitsState] = useState(initialUserSettings.units);

  /**
   * Helper function to withdraw data from local storage
   * and set them to context
   */
  const getLocalStorage = useCallback(() => {
    const rawData = localStorage.getItem('user-settings');

    if (rawData === null) return;

    const data: UserSettings = JSON.parse(rawData);
    setThemeState(data.theme);
    setUnitsState(data.units);
  }, []);

  // After first load
  useEffect(() => {
    getLocalStorage();
  }, [getLocalStorage]);

  /**
   * Helper function to save data into local storage
   *
   * @param {UserSettings} data - data to save in local storage
   */
  const setLocalStorage = (data: UserSettings) => {
    localStorage.setItem('user-settings', JSON.stringify(data));
  };

  /**
   * Setting function for theme that is available throw provider
   *
   * @param {UserSettingsThemeType} newTheme
   */
  const setTheme = (newTheme: UserSettingsThemeType) => {
    setThemeState(newTheme);
    setLocalStorage({
      theme: newTheme,
      units,
    });
  };

  /**
   * Setting function for units that is available throw provider
   *
   * @param {UserSettingsUnitsType} newUnits
   */
  const setUnits = (newUnits: UserSettingsUnitsType) => {
    setUnitsState(newUnits);
    setLocalStorage({
      theme,
      units: newUnits,
    });
  };

  return (
    <UserSettingsContext.Provider value={{ theme, units, setTheme, setUnits }}>
      {props.children}
    </UserSettingsContext.Provider>
  );
};

export default Provider;
