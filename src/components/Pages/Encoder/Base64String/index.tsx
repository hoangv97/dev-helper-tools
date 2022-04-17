import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import { Textarea } from 'components/Form';
import { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <Flex h="full" gap="2" direction="column">
      <Flex direction="column" gap="3" flexGrow={1}>
        <Flex flexGrow={1}>
          <Textarea
            value={input}
            onChange={(value) => {
              setInput(value);
              setOutput(btoa(value));
            }}
          />
        </Flex>
      </Flex>
      <Flex justifyContent="center" gap="2">
        <Button
          rightIcon={<ArrowDownIcon />}
          size="sm"
          onClick={() => setOutput(btoa(input))}
        >
          Encode
        </Button>
        <Button
          rightIcon={<ArrowUpIcon />}
          size="sm"
          onClick={() => setInput(atob(output))}
        >
          Decode
        </Button>
      </Flex>
      <Flex direction="column" gap="3" flexGrow={1}>
        <Textarea
          value={output}
          onChange={(value) => {
            setOutput(value);
            setInput(atob(value));
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
