import { useState } from 'react';
import useQuery from './api/resolve';

import SearchBar from './components/search-bar/SearchBar';

import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const { data, loading, error } = useQuery('current', {
    query,
    skip: !query,
  });

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery(search);
  };

  return (
    <div className="app">
      <div>
        <SearchBar
          onChange={onChange}
          value={search}
          handleSearch={handleSearch}
          hasButton
        />
      </div>

      {query && loading && <div>Loading...</div>}

      {query && error && <div>Error: {error}</div>}

      {data && JSON.stringify(data)}
    </div>
  );
};

export default App;
