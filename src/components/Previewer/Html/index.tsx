import { Box, Button, Flex } from '@chakra-ui/react';
import { CodeEditor } from 'components/Form';
import { useState } from 'react';

const SAMPLE_CODE = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`;

const Home = () => {
  const [code, setCode] = useState('');

  return (
    <Flex alignItems="stretch">
      <Box w="50%">
        <CodeEditor
          mode="html"
          height="calc(100vh - 200px)"
          value={code}
          onChange={(value) => setCode(value)}
          debounceChangePeriod={1000}
          leftAddon={
            <Button h="1.75rem" size="sm" onClick={() => setCode(SAMPLE_CODE)}>
              Sample
            </Button>
          }
        />
      </Box>
      <Flex
        w="50%"
        mx="3"
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
