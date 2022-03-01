import GeolocationProvider from './geolocation';
import UserSettingsProvider from './userSettings';
import CitiesProvidcer from './cities';

/**
 * Helper component to render all Providers
 */
const Providers: React.FC = props => {
  return (
    <CitiesProvidcer>
      <GeolocationProvider>
        <UserSettingsProvider>{props.children}</UserSettingsProvider>
      </GeolocationProvider>
    </CitiesProvidcer>
  );
};

export default Providers;
