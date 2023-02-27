import { Box, Text } from '@chakra-ui/layout';
import { FC } from 'react';
export const HomeScreen: FC = () => {
  return (
    <Box position="relative" display="flex" alignItems="center" justifyContent="center" height="100%">
      <Text fontSize="5xl" ml="8" color="" fontWeight="bold">
        Welcome to my Music App
      </Text>
    </Box>
  );
};
