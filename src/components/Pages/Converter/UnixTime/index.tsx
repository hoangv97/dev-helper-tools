import { Flex } from '@chakra-ui/react';
import CurrentTime from './CurrentTime';
import DateToUnix from './DateToUnix';
import UnixToDate from './UnixToDate';

const Home = () => {
  return (
    <Flex direction="column" gap="10">
      <CurrentTime />
      <UnixToDate />
      <DateToUnix />
    </Flex>
  );
};

export default Home;
