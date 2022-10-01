import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { Button, Input } from './components';

const fonts = {
  heading: `'SF Pro', ${base.fonts.heading}`,
  body: `'SF Pro', ${base.fonts.body}`,
  mono: `'SF Mono', ${base.fonts.body}`,
};

const theme = extendTheme(
  {
    components: {
      Button,
      Input,
    },
    styles: {
      global: (props) => ({
        body: {
          backgroundImage: mode(
            'url("/bg-dark.jpg")',
            'url("/bg-light.jpg")'
          )(props),
          backgroundPosition: 'center',
        },
      }),
    },
    semanticTokens: {
      colors: {
        'sender-bubble-background': 'gray.700',
        'recipient-bubble-background': {
          default: 'gray.100',
          _dark: 'gray.500',
        },
        border: {
          default: 'gray.200',
          _dark: 'gray.600',
        },
        placeholder: {
          default: 'gray.300',
          _dark: 'gray.500',
        },
        'text-primary': {
          default: 'gray.700',
          _dark: 'white',
        },
        'text-secondary': {
          default: 'gray.500',
          _dark: 'gray.400',
        },
      },
      radii: {},
    },
    colors: {
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      brand: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
    },
    fonts,
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Button', 'Input'],
  }),
  withDefaultVariant({
    variant: 'solid',
    components: ['Button'],
  })
);

export default theme;
