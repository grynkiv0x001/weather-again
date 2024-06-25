import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import SearchIcon from '@/static/icons/search.svg?react';

import style from './search-bar.module.scss';

const SearchBar = ({ hasButton, handleSearch, placeholder = 'Search' }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useLayoutEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    const isMac = navigator.userAgent.toLowerCase().includes('mac');

    const handleKeyDown = (event) => {
      const shortcutPressed = isMac
        ? event.metaKey && event.key === 'k'
        : event.ctrlKey && event.key === 'k';

      if (shortcutPressed) {
        event.preventDefault();
        inputRef?.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={style.searchBar_wrapper}>
      <input
        className={style.searchBar}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref={inputRef}
      />
      {hasButton && value && (
        <button
          className={style.searchBar_btn}
          onClick={() => handleSearch(value)}
        >
          <SearchIcon />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
