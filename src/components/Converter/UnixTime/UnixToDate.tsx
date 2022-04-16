import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { CopyButton } from 'components/Common';
import { NumberInput } from 'components/Form';
import moment, { Moment } from 'moment';
import { useState } from 'react';

const UnixToDate = () => {
  const [unixTime, setUnixTime] = useState<number>(moment().unix());
  const [date, setDate] = useState<Moment | undefined>();

  const convertToDate = () => {
    if (unixTime >= 10 ** 10) {
      // TODO overflow
    }
    setDate(moment.unix(unixTime));
  };

  return (
    <Box>
      <Flex>
        <NumberInput
          leftAddon={{ children: 'Unix time' }}
          value={unixTime}
          onChange={(_, num) => setUnixTime(num)}
        />
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
            <Box ml="5">
              <CopyButton value={date.format('LLLL')} />
            </Box>
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
