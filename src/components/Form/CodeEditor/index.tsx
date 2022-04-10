import { Box, Flex } from '@chakra-ui/react';
import { CopyButton, ClipboardButton } from 'components/Common';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-xml';

import 'ace-builds/src-noconflict/theme-monokai';

import 'ace-builds/src-noconflict/ext-language_tools';

interface Props {
  mode: string;
  value: string;
  onChange: (value: string, event?: any) => void;
  readOnly?: boolean;
  hidesCopy?: boolean;
  height?: string;
}

const CodeEditor = ({
  mode,
  value,
  onChange,
  readOnly,
  hidesCopy,
  height,
}: Props) => {
  return (
    <Box>
      <AceEditor
        mode={mode}
        theme="monokai"
        width="100%"
        height={height ?? '500px'}
        value={value}
        onChange={onChange}
        name="code-editor"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        tabSize={2}
        readOnly={!!readOnly}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
      <Flex justifyContent="end" gap="2" mt="2">
        {!readOnly && <ClipboardButton onClick={onChange} />}
        {!hidesCopy && <CopyButton value={value} />}
      </Flex>
    </Box>
  );
};

export default CodeEditor;
