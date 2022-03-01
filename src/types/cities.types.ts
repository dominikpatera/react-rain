export type City = {
  name: string;
  uuid: number;
};

export type CitiesContextType = {
  cities: City[];
  addCity: (name: string) => void;
  removeCity: (uuid: number) => void;
};
