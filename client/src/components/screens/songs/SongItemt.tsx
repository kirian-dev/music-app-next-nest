import { FC } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaPause, FaPlay, FaTrash } from 'react-icons/fa';
import { ISong } from '@/src/types/song.interface';

export const SongItem: FC<ISong & { active?: string; onDelete: () => void }> = ({
  picture,
  name,
  artist,
  duration,
  active,
  _id,
  onDelete,
}) => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="gray.200"
      onClick={() => router.push(`/songs/${_id}`)}
    >
      <Box display="flex" alignItems="center">
        <Button onClick={(e) => e.stopPropagation()}>
          {active ? <FaPause color="gray.600" size={24} /> : <FaPlay color="gray.600" size={24} />}
        </Button>

        <Box as="img" src={picture} alt="Album Cover" width={12} height={12} borderRadius="md" mr={4} />
        <Box>
          <Text fontSize="xl"  color="">
            {name}
          </Text>
          <Text fontSize="md" color="gray.900">
            Artist: {artist}
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Text fontSize="md" color="gray.800" ml={1}>
          {duration}
        </Text>
        <Button variant="outline" size="sm" ml={4} onClick={onDelete} _hover={{ bg: 'red.500', color: 'white' }}>
          <FaTrash />
        </Button>
      </Box>
    </Box>
  );
};
