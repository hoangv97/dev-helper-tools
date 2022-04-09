import {
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/react';
import { copyToClipboard } from 'helpers';
import moment, { Moment } from 'moment';
import { useState } from 'react';

const DateToUnix = () => {
  const toast = useToast();

  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<Moment | undefined>();

  const convertToTime = () => {
    setTime(moment(date));
  };

  return (
    <Box>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Date" />
          <Input
            type="text"
            placeholder=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputGroup>
        <Box ml="5">
          <Button onClick={convertToTime}>Convert to timestamp</Button>
        </Box>
      </Flex>
      {time && !time.isValid() && (
        <Text fontSize="md" mt="2" color="red.400">
          Invalid format!
        </Text>
      )}
      {time && time.isValid() && (
        <Box fontSize="lg">
          <Flex mt="4">
            <Text mr="2" fontWeight="bold">
              Timestamp:{' '}
            </Text>
            {time.unix() + ''}
            <Button
              h="1.75rem"
              size="sm"
              ml="5"
              onClick={() => copyToClipboard(time.unix() + '', toast)}
            >
              Copy
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default DateToUnix;
