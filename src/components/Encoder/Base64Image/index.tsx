import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Button, ButtonGroup } from '@chakra-ui/react';
import { ExportButton, ImportButton } from 'components/Button';
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
          Encode
        </Button>
        <Button rightIcon={<ArrowUpIcon />} size="sm">
          Decode
        </Button>
      </Flex>
      <Flex direction="column" gap="3" flexGrow={1}>
        <ButtonGroup justifyContent="end">
          <ImportButton setContent={handleOutputChange}></ImportButton>
          <ExportButton
            defaultFileName="image.png"
            getContent={() => output}
          ></ExportButton>
        </ButtonGroup>
        <Flex
          w="full"
          h="full"
          border="1px solid"
          borderColor="gray.500"
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
