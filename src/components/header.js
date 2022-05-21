import { Box, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Box>
      <Link href="/" fontSize="2xl" fontWeight="bold">
        rickandmorty
      </Link>
    </Box>
  );
}

export default Header;
