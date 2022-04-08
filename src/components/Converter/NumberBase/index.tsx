import {
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Button,
  useToast,
  Flex,
  Text,
} from '@chakra-ui/react';
import { copyToClipboard } from 'helpers';
import { useState } from 'react';

interface NumberProp {
  radix: number;
  value: string;
}

const NumberBase = () => {
  const toast = useToast();

  const [numbers, setNumbers] = useState<NumberProp[]>([
    { radix: 2, value: '' },
    { radix: 10, value: '' },
    { radix: 16, value: '' },
  ]);

  const handleChange = (number: NumberProp, newValue: string) => {
    const numValue = parseInt(newValue, number.radix);
    if (newValue && isNaN(numValue)) {
      toast({ description: 'Invalid number', status: 'error' });
      return;
    }
    setNumbers((numbers) =>
      numbers.map((n) => ({
        ...n,
        value: newValue ? new Number(numValue).toString(n.radix) : '',
      }))
    );
  };

  const clearInputs = () => {
    setNumbers((numbers) =>
      numbers.map((n) => ({
        ...n,
        value: '',
      }))
    );
  };

  return (
    <div>
      <Stack spacing={4}>
        <Text fontSize="lg">
          Auto convert number in one base type to others.
        </Text>
        <Flex justifyContent="end">
          <Button size="sm" onClick={clearInputs}>
            Clear
          </Button>
        </Flex>
        {numbers.map((number, i) => (
          <InputGroup key={number.radix}>
            <InputLeftAddon children={`Base ${number.radix}`} minW="90px" />
            <Input
              type="text"
              placeholder=""
              value={number.value}
              onChange={(e) => handleChange(number, e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => copyToClipboard(number.value, toast)}
              >
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>
        ))}
      </Stack>
    </div>
  );
};

export default NumberBase;
