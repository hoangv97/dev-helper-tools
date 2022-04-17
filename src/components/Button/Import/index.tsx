import { Button } from '@chakra-ui/react';
import { importFile } from 'helpers/file';

interface Props {
  importType?: string;
  setContent: (_: string) => void;
}

const Home = ({ importType, setContent }: Props) => {
  return (
    <Button
      h="1.75rem"
      size="sm"
      onClick={() => importFile(setContent, importType)}
    >
      Import
    </Button>
  );
};

export default Home;
