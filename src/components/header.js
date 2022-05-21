import { Flex, Image, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Flex justifyContent="center">
      <Link href="/">
        <Image src="./logo192.png" w="24" alt="Rick logo" />
      </Link>
    </Flex>
  );
}

export default Header;
