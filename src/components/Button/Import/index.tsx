import { Button } from '@chakra-ui/react';
import { importFile } from 'helpers/file';

interface Props {
  setContent: (_: string) => void;
}

const Home = ({ setContent }: Props) => {
  return (
    <Button h="1.75rem" size="sm" onClick={() => importFile(setContent)}>
      Import
    </Button>
  );
};

export default Home;
