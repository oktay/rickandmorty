import { Box, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Box pt="8">
      <Link href="/" fontSize="2xl" fontWeight="bold">
        rickandmorty
      </Link>
    </Box>
  );
}

export default Header;
