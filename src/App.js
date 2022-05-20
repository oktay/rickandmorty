import React, { createContext, useEffect, useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { useApi } from './lib/api';
import Loading from './components/loading';
import Error from './components/error';
import Main from './components/main';
import Search from './components/search';

export const AppContext = createContext();

function App() {
  const [page, setPage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const currentURL = new URL(window.location.href);

    setPage(currentURL.searchParams.get('page') || 1);
    setName(currentURL.searchParams.get('name') || '');
    setStatus(currentURL.searchParams.get('status') || '');
    setGender(currentURL.searchParams.get('gender') || '');
  }, []);

  const { loading, error, info, results } = useApi({
    page,
    name,
    status,
    gender,
  });

  const contextValue = {
    page,
    setPage,
    name,
    setName,
    status,
    setStatus,
    gender,
    setGender,
    loading,
    info,
    results,
  };

  return (
    <ChakraProvider>
      <AppContext.Provider value={contextValue}>
        <Container maxW="container.xl">
          <Search />
          {loading && <Loading />}
          {error && <Error message={error} />}
          {!loading && !error && <Main />}
        </Container>
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
