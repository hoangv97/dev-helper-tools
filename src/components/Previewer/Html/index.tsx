import { Box, Button, Flex } from '@chakra-ui/react';
import { CodeEditor } from 'components/Form';
import {
  ACTIONS,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localStorage';
import { useEffect, useState } from 'react';

const SAMPLE_CODE = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`;

const Home = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(getLocalStorage(ACTIONS.HTML_PREVIEW_CODE));
  }, []);

  useEffect(() => {
    setLocalStorage(ACTIONS.HTML_PREVIEW_CODE, code || SAMPLE_CODE);
  }, [code]);

  return (
    <Flex alignItems="stretch" gap="3">
      <Box flexGrow={1}>
        <CodeEditor
          mode="html"
          height="calc(100vh - 150px)"
          value={code}
          onChange={(value) => setCode(value)}
          debounceChangePeriod={1000}
        />
      </Box>
      <Flex
        flexGrow={1}
        border="1px solid"
        borderColor="gray.200"
        bg="white"
        alignItems="stretch"
      >
        <iframe
          style={{ flexGrow: 1 }}
          title="Html preview"
          srcDoc={code}
        ></iframe>
      </Flex>
    </Flex>
  );
};

export default Home;
