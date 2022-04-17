import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import { Textarea } from 'components/Form';
import { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleOutputChange = (value: string) => {
    setOutput(value);
  };

  return (
    <Flex h="full" gap="2" direction="column">
      <Flex direction="column" gap="3" flexGrow={1}>
        <Flex flexGrow={1}>
          <Textarea value={input} onChange={handleInputChange} />
        </Flex>
      </Flex>
      <Flex justifyContent="center" gap="2">
        <Button rightIcon={<ArrowDownIcon />} size="sm">
          Escape
        </Button>
        <Button rightIcon={<ArrowUpIcon />} size="sm">
          Unescape
        </Button>
      </Flex>
      <Flex direction="column" gap="3" flexGrow={1}>
        <Textarea value={output} onChange={handleOutputChange} />
      </Flex>
    </Flex>
  );
};

export default Home;
