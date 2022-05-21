import {
  Box,
  Circle,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import Filters from './filters';

function Search() {
  const { name, setName, setPage, loading, gender, status } =
    useContext(AppContext);
  const [value, setValue] = useState(name);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setValue(name);
  }, [name]);

  useEffect(() => {
    setShowFilters(value => (gender || status ? true : value));
  }, [gender, status]);

  function handleSubmit(e) {
    setPage(1);
    setName(value);
    e.preventDefault();
  }

  function handleClear() {
    setPage(1);
    setName('');
    setValue('');
  }

  return (
    <Stack spacing="8">
      <HStack>
        <FormControl as="form" onSubmit={handleSubmit}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={FaSearch} color="gray.500" />
            </InputLeftElement>
            <Input
              value={value}
              isDisabled={loading}
              onChange={e => setValue(e.target.value)}
              placeholder="Search character name..."
            />
            <InputRightElement hidden={!value}>
              <IconButton
                variant="ghost"
                onClick={handleClear}
                icon={<FaTimes />}
                size="sm"
                isLoading={loading}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box position="relative">
          <IconButton
            variant={showFilters ? 'solid' : 'outline'}
            onClick={() => setShowFilters(!showFilters)}
            icon={<FaFilter />}
            isLoading={loading}
          />
          {(gender || status) && !showFilters && (
            <Circle
              position="absolute"
              top="-1"
              right="-1"
              bg="red.600"
              size="3"
            />
          )}
        </Box>
      </HStack>
      {showFilters && <Filters />}
    </Stack>
  );
}

export default Search;
