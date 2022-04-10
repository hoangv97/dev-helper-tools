import { Box, Textarea, Flex } from '@chakra-ui/react';
import { CopyButton, ClipboardButton } from 'components/Common';

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
    <Box>
      <Textarea
        minH={minH ?? '120px'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></Textarea>
      <Flex justifyContent="end" gap="2" mt="2">
        {!hidesClipboard && <ClipboardButton onClick={onChange} />}
        {!hidesCopy && <CopyButton value={value} />}
      </Flex>
    </Box>
  );
};

export default TextareaWrapper;
