export type GeolocationCoords = {
  lat: number;
  lon: number;
};

export type GeolocationContextType = {
  coords: GeolocationCoords;
  setCoords: (coords: GeolocationCoords) => void;
};
