import {
  AspectRatio,
  Badge,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

function Card({ character }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const statusColor =
    character.status === 'Alive'
      ? 'green'
      : character.status === 'Dead'
      ? 'red'
      : 'gray';

  return (
    <Stack
      boxShadow="sm"
      rounded="md"
      spacing="0"
      direction={{ base: 'row', sm: 'column' }}
    >
      <AspectRatio ratio={1 / 1} w={{ base: '32', sm: 'full' }}>
        <Skeleton
          isLoaded={imgLoaded}
          roundedTopLeft={{ base: 'md', sm: 'md' }}
          roundedTopRight={{ base: 'none', sm: 'md' }}
          roundedBottomLeft={{ base: 'md', sm: 'none' }}
          minW={{ base: '32', sm: 'full' }}
        >
          <Image
            w={{ base: '32', sm: 'full' }}
            h={{ base: 'full', sm: 'auto' }}
            src={character.image}
            onLoad={() => setImgLoaded(true)}
          />
        </Skeleton>
      </AspectRatio>
      <Stack px="4" py="2">
        <HStack>
          <Heading size="sm" noOfLines={1}>
            {character.name}
          </Heading>
          <Badge colorScheme={statusColor}>{character.status}</Badge>
        </HStack>
        <Stack>
          <Tooltip label="Species & Gender" placement="left-start" hasArrow>
            <Text color="gray.500" textTransform="capitalize">
              {character.species} {character.gender}
            </Text>
          </Tooltip>
          <Tooltip label="Location" placement="left-start" hasArrow>
            <HStack fontSize="sm">
              <Icon as={FaMapMarkerAlt} />
              <Text
                textTransform="capitalize"
                noOfLines={1}
                title={character?.location?.name}
              >
                {character?.location?.name}
              </Text>
            </HStack>
          </Tooltip>
          <Tooltip label="Origin" placement="left-start" hasArrow>
            <HStack fontSize="sm">
              <Icon as={FaGlobe} />
              <Text
                textTransform="capitalize"
                noOfLines={1}
                title={character?.origin?.name}
              >
                {character?.origin?.name}
              </Text>
            </HStack>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Card;
