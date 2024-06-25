import { useEffect, useState } from 'react';

import endpoints from './endpoints';

const { get } = endpoints;

const useQuery = (endpoint, params) => {
  const { query, skip } = params || {};

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (skip) {
        return;
      }

      const result = await get.query(endpoint, query);

      if (result) {
        setData(result);
      } else {
        setError('Failed to fetch data');
      }

      setLoading(false);
    };

    fetchData();
  }, [endpoint, query, skip]);

  return { data, loading, error };
};

export default useQuery;
