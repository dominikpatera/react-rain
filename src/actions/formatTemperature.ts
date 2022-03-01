import { UserSettingsUnitsType } from '../types/userSettings.types';

const formatTemperature = (temperature: number, to: UserSettingsUnitsType) => {
  let temp = temperature;
  const toMetric = to === 'metric';

  if (toMetric) temp = convertTemperatureToCelsius(temperature);

  return `${Math.round(temp)}°${toMetric ? 'C' : 'F'}`;
};

const convertTemperatureToCelsius = (temperature: number) => {
  return (temperature - 32) / 1.8;
};

export default formatTemperature;
