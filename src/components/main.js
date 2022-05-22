import { Grid, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../App';
import Card from './card';
import Pagination from './pagination';

function Main() {
  const { results } = useContext(AppContext);

  return (
    <Stack spacing="8">
      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap="8"
      >
        {results.map(result => (
          <Card key={result.id} character={result} />
        ))}
      </Grid>
      <Pagination />
    </Stack>
  );
}

export default Main;
