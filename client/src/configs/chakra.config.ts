import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#e6e6e6',
      100: '#cccccc',
      200: '#b3b3b3',
      300: '#999999',
      400: '#808080',
      500: '#666666',
      600: '#4d4d4d',
      700: '#333333',
      800: '#1a1a1a',
      900: '#000000',
    },
  },
  Box: {
    baseStyle: {
      bg: 'brand.800',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'none',
      },
    },
    Text: {
      baseStyle: {
        color: 'brand.50',
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.50',
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.50',
      },
    },
    Input: {
      baseStyle: {
        bgColor: 'brand.900',
        color: 'brand.50',
      },
    },
  },
});

export default customTheme;
