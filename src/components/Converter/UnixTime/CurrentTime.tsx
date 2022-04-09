import { Box } from '@chakra-ui/react';
import { InputWithCopy } from 'components/Form';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

const CurrentTime = () => {
  const getCurrentTime = () => {
    return moment().unix() + '';
  };

  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime);

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
      <InputWithCopy
        leftAddon={{ children: 'Current epoch time' }}
        value={currentTime}
        onChange={() => {}}
      />
    </Box>
  );
};

export default CurrentTime;
