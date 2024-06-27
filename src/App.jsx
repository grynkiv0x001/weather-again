import { useEffect, useState } from 'react';

import useQuery from '@/api/resolve';
import { WeatherContextProvider } from '@/providers/WeatherContext';

import Error from '@/components/error/Error';
import Loader from '@/components/loader/Loader';
import Header from '@/components/header/Header';
import Location from '@/components/location/Location';
import Forecast from '@/components/forecast/Forecast';

import style from './app.module.scss';

const App = () => {
  const [query, setQuery] = useState('');
  const [position, setPosition] = useState(null);
  const [showForecast, setShowForecast] = useState(false);

  const { data, loading, error } = useQuery('current', {
    query: query || `${position?.lat},${position?.long}`,
    skip: !position,
  });

  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
  } = useQuery('forecast', {
    query: query || `${position?.lat},${position?.long}`,
    skip: !showForecast,
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

          {!forecastLoading && !forecastError && forecastData && <Forecast />}

          <button onClick={() => setShowForecast(!showForecast)}>
            {showForecast ? 'Less' : 'More'}
          </button>
        </main>
      </div>
    </WeatherContextProvider>
  );
};

export default App;
