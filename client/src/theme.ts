import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: '#ffefde',
      100: '#fdd5b4',
      200: '#f7ba88',
      300: '#f19e5a',
      400: '#ec832c',
      500: '#d36913',
      600: '#a5520d',
      700: '#763a07',
      800: '#482200',
      900: '#1d0a00',
    },

    secondary: {
      50: '#e5ecff',
      100: '#b7c7fe',
      200: '#89a1f8',
      300: '#5a7cf1',
      400: '#2c56ec',
      500: '#133dd3',
      600: '#0c2fa5',
      700: '#052277',
      800: '#01144a',
      900: '#00071e',
    },
  },
}

export default customTheme
