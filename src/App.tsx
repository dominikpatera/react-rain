import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GeolocationContext } from './context/geolocation';

import Layout from './Layout/Layout';
import City from './routes/City';
import Home from './routes/Home';

const App = () => {
  const { setCoords } = useContext(GeolocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      const localPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setCoords(localPosition);
    });
  }, [setCoords]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityName" element={<City />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
