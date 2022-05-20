import { Badge, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function Error({ message }) {
  return (
    <Flex
      direction="column"
      h={{ base: '100px', md: '300px', lg: '600px' }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack alignItems="center" spacing="8">
        <Icon boxSize="12" as={FaSearch} />
        <Badge>{message}</Badge>
        <Text>Try clear your filters or search terms</Text>
      </Stack>
    </Flex>
  );
}

export default Error;
