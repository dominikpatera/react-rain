import GeolocationProvider from './geolocation';
import UserSettingsProvider from './userSettings';

/**
 * Helper component to render all Providers
 */
const Providers: React.FC = props => {
	return (
		<GeolocationProvider>
			<UserSettingsProvider>{props.children}</UserSettingsProvider>
		</GeolocationProvider>
	);
};

export default Providers;
