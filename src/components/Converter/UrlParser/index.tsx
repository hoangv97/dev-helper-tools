import { Flex, Text } from '@chakra-ui/react';
import { Textarea } from 'components/Form';
import { capitalize } from 'helpers/string';
import { useState } from 'react';

const fields = [
  // 'href',
  'protocol',
  'host',
  'hostname',
  'origin',
  'username',
  'password',
  'port',
  'pathname',
  'hash',
  'search',
];

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<any>();

  const handleInputChange = (value: string) => {
    setInput(value);
    try {
      setOutput(new URL(value));
    } catch (e) {
      setOutput(null);
    }
  };

  return (
    <Flex direction="column">
      <Textarea value={input} onChange={handleInputChange} />
      <Flex>
        {output === null && <Text color="red">Invalid input!</Text>}
        {output && (
          <Flex direction="column" gap="2">
            {fields.map((field) => (
              <Flex key={field} gap="1">
                <Text w="80px" color="blue.600">
                  {capitalize(field)}:{' '}
                </Text>
                {field !== 'search' && <Text>{output[field]}</Text>}
                {field === 'search' && <Text>{output[field]}</Text>}
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
