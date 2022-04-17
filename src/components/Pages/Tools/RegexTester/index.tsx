import { Flex, Text } from '@chakra-ui/react';
import { InputWithCopy, Textarea } from 'components/Form';
import { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  const [testString, setTestString] = useState('');
  return (
    <Flex direction="column" gap="5">
      <Flex direction="column" gap="2">
        <Text>Regular Expression</Text>
        <InputWithCopy value={input} onChange={(value) => setInput(value)} />
      </Flex>
      <Flex direction="column" gap="2">
        <Text>Test String</Text>
        <Textarea
          value={testString}
          onChange={(value) => setTestString(value)}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
