import { Textarea, Flex } from '@chakra-ui/react';
import { CopyButton, ClipboardButton } from 'components/Button';

interface Props {
  value: string;
  onChange: (value: string) => void;
  hidesClipboard?: boolean;
  hidesCopy?: boolean;
  minH?: string;
}

const TextareaWrapper = ({
  value,
  onChange,
  hidesClipboard,
  hidesCopy,
  minH,
}: Props) => {
  return (
    <Flex direction="column" w="full" h="full" gap="2">
      <Textarea
        flexGrow={1}
        minH={minH ?? '200px'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></Textarea>
      <Flex justifyContent="end" gap="2">
        {!hidesClipboard && <ClipboardButton onClick={onChange} />}
        {!hidesCopy && <CopyButton value={value} />}
      </Flex>
    </Flex>
  );
};

export default TextareaWrapper;
