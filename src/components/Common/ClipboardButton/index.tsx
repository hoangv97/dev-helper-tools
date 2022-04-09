import { Button } from '@chakra-ui/react';

interface Props {
  onClick: (value: string) => void;
}

const ClipboardButton = ({ onClick }: Props) => {
  return (
    <Button
      h="1.75rem"
      size="sm"
      onClick={async () => {
        const value = await navigator.clipboard.readText();
        onClick(value);
      }}
    >
      Clipboard
    </Button>
  );
};

export default ClipboardButton;
