import {
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { CopyButton } from 'components/Common';

interface Props {
  value: string;
  onChange: (value: string) => void;
  leftAddon?: { children: string; minW?: string };
}

const InputWithCopy = ({ value, onChange, leftAddon }: Props) => {
  return (
    <InputGroup>
      {leftAddon && (
        <InputLeftAddon children={leftAddon.children} minW={leftAddon.minW} />
      )}
      <Input
        type="text"
        placeholder=""
        pr="5rem"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <CopyButton value={value} />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputWithCopy;
