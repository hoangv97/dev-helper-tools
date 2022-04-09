import { Stack, Button, useToast, Flex, Text } from '@chakra-ui/react';
import { InputWithCopy } from 'components/Form';
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
          <InputWithCopy
            key={number.radix}
            leftAddon={{ children: `Base ${number.radix}`, minW: '90px' }}
            value={number.value}
            onChange={(value) => handleChange(number, value)}
          />
        ))}
      </Stack>
    </div>
  );
};

export default NumberBase;
