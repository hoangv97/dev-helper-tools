import { Button } from '@chakra-ui/react';

interface Props {
  onClick: (value: string) => void;
}

const ClearButton = ({ onClick }: Props) => {
  return (
    <Button
      h="1.75rem"
      size="sm"
      onClick={() => {
        onClick('');
      }}
    >
      Clear
    </Button>
  );
};

export default ClearButton;
