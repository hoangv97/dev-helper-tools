import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { CopyButton } from 'components/Common';
import { InputWithCopy } from 'components/Form';
import moment, { Moment } from 'moment';
import { useState } from 'react';

const DateToUnix = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<Moment | undefined>();

  const convertToTime = () => {
    setTime(moment(date));
  };

  return (
    <Box>
      <Flex>
        <InputWithCopy
          leftAddon={{ children: 'Date' }}
          value={date}
          onChange={(value) => setDate(value)}
        />
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
            <Box ml="5">
              <CopyButton value={time.unix() + ''} />
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default DateToUnix;
