import { Button, useToast } from '@chakra-ui/react';

interface Props {
  value: string;
}

const CopyButton = ({ value }: Props) => {
  const toast = useToast();

  return (
    <Button
      h="1.75rem"
      size="sm"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        toast({ description: 'Copied to clipboard' });
      }}
    >
      Copy
    </Button>
  );
};

export default CopyButton;
