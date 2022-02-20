import React, { useState } from 'react';
import {
  GeolocationContextType,
  GeolocationCoords,
} from '../types/geolocation.types';

const initialCoords: GeolocationCoords = { lat: 0, lon: 0 };

/**
 * Context that handle user's geolocation data
 */
export const GeolocationContext = React.createContext<GeolocationContextType>({
  coords: initialCoords,
  setCoords: coords => {},
});

const Provider: React.FC = props => {
  const [coords, setCoords] = useState(initialCoords);

  return (
    <GeolocationContext.Provider value={{ coords, setCoords }}>
      {props.children}
    </GeolocationContext.Provider>
  );
};

export default Provider;
