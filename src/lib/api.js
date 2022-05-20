import { useEffect, useState } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export function useApi({ page, name, status, gender }) {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const currentURL = new URL(window.location.href);
    const requestURL = new URL(BASE_URL);
    const params = { page, name, status, gender };

    Object.keys(params).forEach(key => {
      currentURL.searchParams.delete(key);

      if (params[key]) {
        currentURL.searchParams.append(key, params[key]);
        requestURL.searchParams.append(key, params[key]);
      }
    });

    fetch(requestURL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setLoading(false);
          setError(data.error);
          return;
        }

        setResults(data.results);
        setInfo(data.info);
        setLoading(false);
        setError(false);
      })
      .catch(err => setError(err.message));

    window.history.pushState(null, null, currentURL.href);
    window.scrollTo(0, 0);
  }, [page, name, status, gender]);

  return {
    loading,
    error,
    results,
    info,
  };
}
