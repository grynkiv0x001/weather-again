import { useEffect, useState } from 'react';

import useQuery from '@/api/resolve';
import { WeatherContextProvider } from '@/providers/WeatherContext';

import Header from '@/components/header/Header';
import Location from '@/components/location/Location';

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [position, setPosition] = useState(null);

  const { data, loading, error } = useQuery('current', {
    query: query || `${position?.lat},${position?.long}`,
    skip: !position,
  });

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        setPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      }
    });
  }, []);

  return (
    <WeatherContextProvider
      value={{
        handleQueryChange,
        current: data,
      }}
    >
      <div className="app">
        <Header />

        {loading && <div>Loading...</div>}

        {error && <div>Error: {JSON.stringify(error)}</div>}

        {data && <Location />}
      </div>
    </WeatherContextProvider>
  );
};

export default App;
