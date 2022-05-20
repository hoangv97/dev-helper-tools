import { Box, Button, Flex, Select, Text } from '@chakra-ui/react';
import { CodeEditor } from 'components/Form';
import {
  ACTIONS,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localStorage';
import { useEffect, useState } from 'react';

const MODES = [
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'C++', value: 'c_cpp' },
  { label: 'Dockerfile', value: 'dockerfile' },
  { label: 'Golang', value: 'golang' },
  { label: 'GraphQL Schema', value: 'graphqlschema' },
  { label: 'JSON', value: 'json' },
  { label: 'JSX', value: 'jsx' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'SQL', value: 'sql' },
  { label: 'Typescript', value: 'typescript' },
  { label: 'TSX', value: 'tsx' },
  { label: 'LESS', value: 'less' },
  { label: 'SASS', value: 'sass' },
  { label: 'SCSS', value: 'scss' },
];

const Home = () => {
  const [mode, setMode] = useState(
    getLocalStorage(ACTIONS.CODE_EDITOR_PAGE_SETTINGS, { mode: MODES[0].value })
      .mode
  );
  const [code, setCode] = useState(
    getLocalStorage(ACTIONS.CODE_EDITOR_PAGE_SETTINGS, { code: '' }).code
  );

  useEffect(() => {
    setLocalStorage(ACTIONS.CODE_EDITOR_PAGE_SETTINGS, { mode, code });
  }, [mode, code]);

  return (
    <Flex direction="column" gap="4">
      <Flex direction="row" alignItems="center">
        <Text fontSize="md" mr="4">
          Language:
        </Text>
        <Select
          w="200px"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value);
          }}
        >
          {MODES.map((mode) => (
            <option key={mode.value} value={mode.value}>
              {mode.label}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex direction="column" alignItems="stretch">
        <CodeEditor
          mode={mode}
          height="calc(100vh - 200px)"
          value={code}
          onChange={(value) => setCode(value)}
          debounceChangePeriod={1000}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
