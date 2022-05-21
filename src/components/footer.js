import { Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex justifyContent="center" pb="8">
      <Text color="gray.500" textAlign="center">
        Made with{' '}
        <Link href="https://chakra-ui.com/" color="gray.700">
          Chakra UI
        </Link>{' '}
        &{' '}
        <Link href="https://rickandmortyapi.com/" color="gray.700">
          Rick and Morty API
        </Link>{' '}
        by{' '}
        <Link href="https://oktaycolakoglu.com/" color="gray.700">
          Oktay Çolakoğlu
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
