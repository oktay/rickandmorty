import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AppContext } from '../App';

function Filters() {
  const { status, setStatus, gender, setGender, setPage, loading } =
    useContext(AppContext);

  function handleStatus(val) {
    setStatus(val);
    setPage(1);
  }

  function handleGender(val) {
    setGender(val);
    setPage(1);
  }

  function handleClear() {
    handleStatus('');
    handleGender('');
  }

  return (
    <Stack>
      <Stack bg="gray.50" rounded="md" p="6" direction="row">
        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            isDisabled={loading}
            as={Stack}
            spacing="4"
            value={status}
            onChange={handleStatus}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Radio value="">All</Radio>
            <Radio value="alive">Alive</Radio>
            <Radio value="dead">Dead</Radio>
            <Radio value="unknown">Unknown</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            isDisabled={loading}
            as={Stack}
            spacing="4"
            value={gender}
            onChange={handleGender}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Radio value="">All</Radio>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="genderless">Genderless</Radio>
            <Radio value="unknown">Unknown</Radio>
          </RadioGroup>
        </FormControl>
      </Stack>
      <Button
        hidden={!status && !gender}
        onClick={handleClear}
        leftIcon={<FaTrashAlt />}
        flexShrink="0"
        variant="ghost"
        colorScheme="red"
        isLoading={loading}
      >
        Clear Filters
      </Button>
    </Stack>
  );
}

export default Filters;
