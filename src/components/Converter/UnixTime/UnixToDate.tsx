import {
  Box,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import moment, { Moment } from 'moment';
import { useState } from 'react';

const UnixToDate = () => {
  const [unixTime, setUnixTime] = useState<string>(moment().unix() + '');
  const [date, setDate] = useState<Moment | undefined>();

  const convertToDate = () => {
    if (unixTime.length > 10) {
      console.log(unixTime);
    }
    setDate(moment.unix(parseFloat(unixTime)));
  };

  return (
    <Box>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="UNIX time" />
          <NumberInput
            allowMouseWheel
            value={unixTime}
            onChange={(e) => setUnixTime(e)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </InputGroup>
        <Box>
          <Button onClick={convertToDate}>Convert to date</Button>
        </Box>
      </Flex>
      {date && (
        <Box fontSize="lg">
          <Flex mt="4">
            <Text mr="2" fontWeight="bold">
              Date:{' '}
            </Text>
            {date.format('LLLL')}
          </Flex>
          <Flex mt="2">
            <Text mr="2" fontWeight="bold">
              Relative:{' '}
            </Text>
            {date.fromNow()}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default UnixToDate;
