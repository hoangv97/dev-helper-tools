import { Textarea, Flex } from '@chakra-ui/react';
import {
  CopyButton,
  ClipboardButton,
  ClearButton,
  ImportButton,
} from 'components/Button';

interface Props {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  minH?: string;
}

const TextareaWrapper = ({ value, onChange, readOnly, minH }: Props) => {
  return (
    <Flex direction="column" w="full" h="full" gap="2">
      <Textarea
        flexGrow={1}
        minH={minH ?? '200px'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></Textarea>
      <Flex justifyContent="end" gap="2">
        {!readOnly && (
          <>
            <ImportButton setContent={onChange} />
            <ClearButton onClick={onChange} />
            <ClipboardButton onClick={onChange} />
          </>
        )}
        <CopyButton value={value} />
      </Flex>
    </Flex>
  );
};

export default TextareaWrapper;
