import {
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { ClipboardButton, CopyButton } from 'components/Common';

interface Props {
  value: string;
  onChange: (value: string) => void;
  leftAddon?: { children: string; minW?: string };
  readOnly?: boolean;
  inputStyle?: any;
}

const InputWithCopy = ({
  value,
  onChange,
  leftAddon,
  readOnly,
  inputStyle,
}: Props) => {
  return (
    <InputGroup>
      {leftAddon && (
        <InputLeftAddon children={leftAddon.children} minW={leftAddon.minW} />
      )}
      <Input
        type="text"
        placeholder=""
        pr={!readOnly ? '44' : '20'}
        {...{ ...inputStyle }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputRightElement
        w={!readOnly ? '44' : '20'}
        gap="2"
        justifyContent="flex-end"
        pr="2"
      >
        {!readOnly && <ClipboardButton onClick={onChange} />}
        <CopyButton value={value} />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputWithCopy;
