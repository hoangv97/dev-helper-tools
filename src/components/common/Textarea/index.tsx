import { Box, useToast, Textarea, Button } from '@chakra-ui/react';
import { copyToClipboard } from 'helpers';

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaWrapper = ({ value, onChange, ...rest }: TextareaProps) => {
  const toast = useToast();

  return (
    <Box {...rest}>
      <Textarea h="full" value={value} onChange={onChange}></Textarea>
      <Button
        float="right"
        mt="2"
        h="1.75rem"
        size="sm"
        onClick={() => copyToClipboard(value, toast)}
      >
        Copy
      </Button>
    </Box>
  );
};

export default TextareaWrapper;
