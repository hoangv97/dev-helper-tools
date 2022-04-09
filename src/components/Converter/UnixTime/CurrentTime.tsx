import {
  Box,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react';
import { copyToClipboard } from 'helpers';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

const CurrentTime = () => {
  const toast = useToast();

  const getCurrentTime = () => {
    return moment().unix();
  };

  const [currentTime, setCurrentTime] = useState<number>(getCurrentTime);

  const currentTimeInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    currentTimeInterval.current = setTimeout(() => {
      setCurrentTime(getCurrentTime);
    }, 1000);
    return () => {
      currentTimeInterval.current && clearTimeout(currentTimeInterval.current);
    };
  }, [currentTime]);

  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children="Current epoch time" />
        <Input
          type="text"
          placeholder=""
          value={currentTime}
          onChange={() => {}}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => copyToClipboard(currentTime + '', toast)}
          >
            Copy
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default CurrentTime;
