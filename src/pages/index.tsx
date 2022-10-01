import {
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Message from '../components/message';

import { messages } from '../data';

const Index = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <VStack
      w='full'
      h='100vh'
      p={{ base: 4, sm: 10 }}
      spacing={6}
      alignItems='center'
      justifyContent='center'
    >
      <VStack
        w='full'
        maxW='600px'
        h='500px'
        overflow='hidden'
        bg='white'
        _dark={{ bg: 'gray.800' }}
        spacing={0}
        borderRadius='base'
        shadow='md'
      >
        <Stack
          overflowY='auto'
          direction='column-reverse'
          spacing={4}
          p={4}
          w='full'
        >
          {messages.map(
            ({
              id,
              from,
              type,
              name,
              avatar,
              date,
              text,
              fileType,
              fileName,
              fileSize,
              fileDate,
            }) => (
              <Message
                key={id}
                id={id}
                from={from}
                type={type}
                name={name}
                avatar={avatar}
                date={date}
                text={text}
                fileType={fileType}
                fileName={fileName}
                fileSize={fileSize}
                fileDate={fileDate}
              />
            )
          )}
        </Stack>
        <HStack
          p={4}
          spacing={2}
          borderTop='1px'
          borderTopColor='border'
          w='full'
        >
          <Input placeholder='Content' />
          <Button>Send</Button>
        </HStack>
      </VStack>
      <Button
        colorScheme='gray'
        leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      >
        Change theme
      </Button>
    </VStack>
  );
};

export default Index;
