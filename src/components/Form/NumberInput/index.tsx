import {
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

interface Props {
  value: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  leftAddon?: { children: string; minW?: string };
}

const NumberInputWrapper = ({ value, onChange, leftAddon }: Props) => {
  return (
    <InputGroup>
      {leftAddon && (
        <InputLeftAddon children={leftAddon.children} minW={leftAddon.minW} />
      )}
      <NumberInput allowMouseWheel value={value} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  );
};

export default NumberInputWrapper;
