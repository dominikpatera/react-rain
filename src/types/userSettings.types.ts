export type UserSettingsContextType = {
	theme: UserSettingsThemeType;
	units: UserSettingsUnitsType;
	setTheme: (theme: UserSettingsThemeType) => void;
	setUnits: (units: UserSettingsUnitsType) => void;
};
export type UserSettings = {
	theme: UserSettingsThemeType;
	units: UserSettingsUnitsType;
};
export type UserSettingsThemeType = 'dark' | 'light';
export type UserSettingsUnitsType = 'metric' | 'imperial';
