import { Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex justifyContent="center">
      <Text color="gray.500" textAlign="center">
        Made with{' '}
        <Link href="https://chakra-ui.com/" color="gray.700" isExternal>
          Chakra UI
        </Link>{' '}
        &{' '}
        <Link href="https://rickandmortyapi.com/" color="gray.700" isExternal>
          Rick and Morty API
        </Link>{' '}
        by{' '}
        <Link href="https://oktaycolakoglu.com/" color="gray.700" isExternal>
          Oktay Çolakoğlu
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
