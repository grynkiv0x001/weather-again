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

      await get
        .query(endpoint, query)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          setError({
            code: error?.response?.status,
            message: error?.response?.data?.error?.message,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [endpoint, query, skip]);

  return { data, loading, error };
};

export default useQuery;
