import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { useState } from 'react';
import { download, downloadAsText } from 'helpers/file';

interface Props {
  defaultFileName: string;
  getContent: () => string;
  type?: string;
}

const Home = ({ defaultFileName, getContent, type }: Props) => {
  const [fileName, setFileName] = useState(defaultFileName);

  return (
    <Popover placement="top-start">
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button h="1.75rem" size="sm">
              Export
            </Button>
          </PopoverTrigger>
          <PopoverContent pt="5">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody d="flex" flexDirection="column" gap="4">
              <FormControl>
                <FormLabel>File name</FormLabel>
                <Input
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </FormControl>
              <ButtonGroup d="flex" justifyContent="flex-end" size="sm">
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    if (type === 'text') {
                      downloadAsText(fileName, getContent());
                    } else {
                      download(fileName, getContent());
                    }
                    onClose();
                  }}
                >
                  Save
                </Button>
              </ButtonGroup>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default Home;
