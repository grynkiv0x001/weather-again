import { useEffect, useState } from 'react';

import useQuery from '@/api/resolve';
import { WeatherContextProvider } from '@/providers/WeatherContext';

import Error from '@/components/error/Error';
import Loader from '@/components/loader/Loader';
import Header from '@/components/header/Header';
import Location from '@/components/location/Location';

import style from './app.module.scss';

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
        currentLoading: loading,
      }}
    >
      <div>
        <Header />

        <main className={style.main}>
          {loading && <Loader />}

          {error && <Error error={error} />}

          {!loading && !error && data && <Location />}
        </main>
      </div>
    </WeatherContextProvider>
  );
};

export default App;
