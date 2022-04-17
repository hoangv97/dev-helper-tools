import { Box, Flex, Button } from '@chakra-ui/react';
import { InputWithCopy, Textarea } from 'components/Form';
import { useState } from 'react';
import CryptoJs from 'crypto-js';

interface HashFuncProp {
  name: string;
  func: any;
  value?: string;
}

const HASH_FUNCTIONS: HashFuncProp[] = [
  {
    name: 'MD5',
    func: CryptoJs.MD5,
  },
  {
    name: 'SHA-1',
    func: CryptoJs.SHA1,
  },
  {
    name: 'SHA-256',
    func: CryptoJs.SHA256,
  },
  {
    name: 'SHA-512',
    func: CryptoJs.SHA512,
  },
  {
    name: 'Keccak (SHA-3)',
    func: CryptoJs.SHA3,
  },
  {
    name: 'RIPEMD-160',
    func: CryptoJs.RIPEMD160,
  },
];

const Home = () => {
  const [input, setInput] = useState('');
  const [hashFuncs, setHashFuncs] = useState(
    HASH_FUNCTIONS.map((f) => ({ ...f, value: '' }))
  );

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const generate = () => {
    setHashFuncs(
      hashFuncs.map((func) => ({
        ...func,
        value: func.func(input).toString(),
      }))
    );
  };

  return (
    <Box>
      <Flex direction="column" w="full">
        <Textarea value={input} onChange={handleInputChange}></Textarea>
      </Flex>
      <Flex justifyContent="center" mb="6">
        <Button size="md" onClick={generate}>
          Generate
        </Button>
      </Flex>
      <Flex direction="column" gap="4">
        {hashFuncs.map((func, i) => (
          <InputWithCopy
            key={func.name}
            value={func.value}
            leftAddon={{ children: func.name, minW: '145px' }}
            onChange={() => {}}
            readOnly
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
