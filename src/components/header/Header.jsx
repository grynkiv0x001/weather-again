import { useWeatherContext } from '@/providers/WeatherContext';

import SearchBar from '@/components/search-bar/SearchBar';

import style from './header.module.scss';

const Header = () => {
  const weatherContext = useWeatherContext();
  const { handleQueryChange } = weatherContext || {};

  return (
    <header className={style.header}>
      <SearchBar hasButton handleSearch={handleQueryChange} />
    </header>
  );
};

export default Header;
