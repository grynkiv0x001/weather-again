import React from 'react';

import SearchIcon from '../../assets/icons/search.svg';

import style from './search-bar.module.scss';

const SearchBar = ({
  value,
  onChange,
  hasButton,
  handleSearch,
  placeholder = 'Search',
}) => {
  return (
    <div className={style.searchBar__wrapper}>
      <input
        className={style.searchBar}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {hasButton && (
        <button
          className={style.searchBar__btn}
          onClick={handleSearch}
          disabled={!value}
        >
          <SearchIcon />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
