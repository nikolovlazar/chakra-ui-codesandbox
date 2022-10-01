import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import type { Message as MessageType } from '../data';
import ChatBubble from './chat-bubble';

const Message = (props: MessageType) => {
  const {
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
  } = props;

  return (
    <HStack alignSelf={from === 'recipient' ? 'flex-start' : 'flex-end'}>
      {from === 'recipient' && (
        <Image
          src={`/${avatar}`}
          alt={name}
          boxSize={10}
          rounded='full'
          border='1px'
          borderColor='gray.200'
        />
      )}
      <VStack spacing={1} alignItems='flex-start'>
        <HStack spacing={1}>
          <Text
            fontSize='sm'
            fontWeight='bold'
            flexShrink={0}
            color='text-primary'
          >
            {from === 'recipient' ? name : 'You'}
          </Text>
          <Text fontSize='xs' flexShrink={0} color='text-secondary'>
            {date}
          </Text>
        </HStack>
        <ChatBubble
          from={from}
          type={type}
          text={text}
          fileType={fileType}
          fileName={fileName}
          fileSize={fileSize}
          fileDate={fileDate}
        />
      </VStack>
    </HStack>
  );
};

export default Message;
