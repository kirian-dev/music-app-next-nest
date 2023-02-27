import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SongItem } from './SongItemt';
import { useRouter } from 'next/router';
const tracks = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'Track 1',
    artist: 'Artist 1',
    duration: '3:30',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Track 2',
    artist: 'Artist 2',
    duration: '4:20',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Track 3',
    artist: 'Artist 3',
    duration: '2:45',
  },
];
export const SongScreens: FC = () => {
  const router = useRouter()
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="5xl" ml="8" color="" fontWeight="bold" textAlign="center">
          List of songs
        </Text>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="cyan" variant="solid" borderRadius="2xl" onClick={() => router.push('/songs/create')}>
            Upload song
          </Button>
        </Stack>
      </Box>
      {tracks.map((track, index) => (
        <SongItem key={index} {...track} />
      ))}
    </Box>
  );
};
