import { Flex } from '@chakra-ui/react';
import { InputWithCopy } from 'components/Form';
import { useEffect, useState } from 'react';

const rules = [
  { name: 'minute', values: '0-59' },
  { name: 'hour', values: '0-23' },
  { name: 'day (month)', values: '1-31' },
  { name: 'month', values: '1-12' },
  { name: 'day (week)', values: '0-6' },
];

const Home = () => {
  const [input, setInput] = useState('* * * * *');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    const cron = input.split(' ');
    if (cron.length !== 5) {
      setValid(false);
      return;
    }
    setValid(true);
  }, [input]);

  return (
    <Flex>
      <InputWithCopy
        value={input}
        onChange={(value) => setInput(value.trim())}
        inputStyle={{ letterSpacing: 2 }}
      />
    </Flex>
  );
};

export default Home;
