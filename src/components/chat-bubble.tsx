import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { Message } from '../data';
import icons from '../icons';

type Props = Pick<
  Message,
  'fileDate' | 'fileName' | 'fileSize' | 'fileType' | 'text' | 'type' | 'from'
>;

const ChatBubble = ({
  fileDate,
  fileName,
  fileSize,
  fileType,
  text,
  type,
  from,
}: Props) => {
  const TextBubble = (
    <Box
      rounded='lg'
      px={4}
      py={2}
      maxW='sm'
      bg={`${from}-bubble-background`}
      color={from === 'sender' ? 'white' : 'text-primary'}
      borderTopRightRadius={from === 'sender' ? 0 : 8}
      borderTopLeftRadius={from === 'recipient' ? 0 : 8}
    >
      {text}
    </Box>
  );

  const FileBubble = (
    <HStack
      rounded='lg'
      pl={2}
      pr={6}
      py={2}
      maxW='sm'
      border='1px'
      borderColor='border'
      color='text-primary'
      borderTopRightRadius={from === 'sender' ? 0 : 8}
      borderTopLeftRadius={from === 'recipient' ? 0 : 8}
      fontSize='sm'
    >
      <Icon boxSize={6} as={icons[fileType]} />
      <VStack alignItems='flex-start' spacing={0}>
        <Text fontWeight='bold'>{fileName}</Text>
        <HStack spacing={1} color='text-secondary'>
          <Text>{fileDate}</Text>
          <Text>•</Text>
          <Text>{fileSize}</Text>
        </HStack>
      </VStack>
    </HStack>
  );

  return type === 'text' ? TextBubble : FileBubble;
};

export default ChatBubble;
