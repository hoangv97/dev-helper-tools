import { Flex, Button, Select } from '@chakra-ui/react';
import { PasswordInput, Textarea } from 'components/Form';
import { useState } from 'react';
import CryptoJs from 'crypto-js';

interface CipherAlgorithmProp {
  name: string;
  func: any;
}

const CIPHER_ALGORITHMS: CipherAlgorithmProp[] = [
  {
    name: 'AES',
    func: CryptoJs.AES,
  },
  {
    name: 'DES',
    func: CryptoJs.DES,
  },
  {
    name: 'TripleDES',
    func: CryptoJs.TripleDES,
  },
  {
    name: 'Rabbit',
    func: CryptoJs.Rabbit,
  },
  {
    name: 'RC4',
    func: CryptoJs.RC4,
  },
  {
    name: 'RC4Drop',
    func: CryptoJs.RC4Drop,
  },
];

const Home = () => {
  const [input, setInput] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [output, setOutput] = useState('');
  const [cipherAlgorithm, setCipherAlgorithm] = useState(
    CIPHER_ALGORITHMS[0].name
  );

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleCipherAlgorithmChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCipherAlgorithm(e.target.value);
  };

  const encrypt = () => {
    const cipher = CIPHER_ALGORITHMS.find(
      (algo) => algo.name === cipherAlgorithm
    );
    if (cipher) {
      const encrypted = cipher.func.encrypt(input, passphrase);
      console.log(encrypted);
      setOutput(encrypted.toString());
    }
  };

  const decrypt = () => {
    const cipher = CIPHER_ALGORITHMS.find(
      (algo) => algo.name === cipherAlgorithm
    );
    if (cipher) {
      const decrypted = cipher.func.decrypt(input, passphrase);
      console.log(decrypted);
      setOutput(decrypted.toString(CryptoJs.enc.Utf8));
    }
  };

  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" w="full" gap="3">
        <Textarea value={input} onChange={handleInputChange}></Textarea>
        <PasswordInput
          value={passphrase}
          onChange={(value) => setPassphrase(value)}
          placeholder="Enter passphrase"
        />
      </Flex>

      <Flex justifyContent="center">
        <Select
          w="200px"
          value={cipherAlgorithm}
          onChange={handleCipherAlgorithmChange}
        >
          {CIPHER_ALGORITHMS.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex justifyContent="center" gap="4">
        <Button size="md" onClick={encrypt}>
          Encrypt
        </Button>
        <Button size="md" onClick={decrypt}>
          Decrypt
        </Button>
      </Flex>

      <Flex direction="column" w="full" mt="5">
        <Textarea value={output} onChange={() => {}} hidesClipboard></Textarea>
      </Flex>
    </Flex>
  );
};

export default Home;
