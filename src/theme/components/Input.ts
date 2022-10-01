import { ComponentMultiStyleConfig } from '@chakra-ui/react';

export const Input: ComponentMultiStyleConfig = {
  parts: ['field', 'addon'],
  sizes: {
    md: {
      field: {
        borderRadius: 'sm',
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'border',
        paddingInlineStart: 2,
        paddingInlineEnd: 2,
        _focusVisible: {
          borderColor: 'blue.500',
        },
        _placeholder: {
          color: 'placeholder',
        },
      },
    },
  },
};
