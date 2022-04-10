import { Button, useToast } from '@chakra-ui/react';

interface Props {
  value?: string;
  onClick?: () => void;
}

const CopyButton = ({ value, onClick }: Props) => {
  const toast = useToast();

  return (
    <Button
      h="1.75rem"
      size="sm"
      onClick={async () => {
        if (value) {
          await navigator.clipboard.writeText(value);
        } else if (onClick) {
          onClick();
        } else {
          return;
        }
        toast({ description: 'Copied to clipboard' });
      }}
    >
      Copy
    </Button>
  );
};

export default CopyButton;
