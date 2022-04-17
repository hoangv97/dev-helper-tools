import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import { Textarea } from 'components/Form';
import { useEffect, useState } from 'react';

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    console.log(input1, input2);
  }, [input1, input2]);

  return (
    <Flex h="full" gap="2" direction="column">
      <Flex gap="4" flexGrow={1}>
        <Flex direction="column" gap="3" flexGrow={1}>
          <Textarea value={input1} onChange={setInput1} />
        </Flex>
        <Flex direction="column" gap="3" flexGrow={1}>
          <Textarea value={input2} onChange={setInput2} />
        </Flex>
      </Flex>
      <Flex flexGrow={1}>Output</Flex>
    </Flex>
  );
};

export default Home;
