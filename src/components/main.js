import { Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../App';
import Card from './card';
import Pagination from './pagination';

function Main() {
  const { results } = useContext(AppContext);

  return (
    <>
      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap="8"
      >
        {results.map(result => (
          <Card key={result.id} character={result} />
        ))}
      </Grid>
      <Pagination />
    </>
  );
}

export default Main;
