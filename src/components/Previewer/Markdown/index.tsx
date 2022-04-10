import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import { ClipboardButton, CopyButton } from 'components/Common';

import '@toast-ui/chart/dist/toastui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';

import Prism from 'prismjs';

// Import language files of prismjs that you need
// import 'prismjs/components/prism-javascript';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

import uml from '@toast-ui/editor-plugin-uml';
import { useRef } from 'react';

const Home = () => {
  const theme = useColorModeValue('light', 'dark');
  console.log(theme);

  const editorRef = useRef<any>();

  return (
    <Flex w="full" h="full" direction="column">
      <Box w="full" flexGrow={1}>
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
          referenceDefinition={true}
          hideModeSwitch={true}
          previewHighlight={true}
          frontMatter={true}
          theme={theme}
          plugins={[
            chart,
            [codeSyntaxHighlight, { highlighter: Prism }],
            colorSyntax,
            tableMergedCell,
            uml,
          ]}
          viewer={true}
        />
      </Box>
      <Flex mt="3" gap="2">
        <Button
          h="1.75rem"
          size="sm"
          onClick={() => {
            editorRef.current.editorInst.setMarkdown('');
          }}
        >
          Clear
        </Button>
        <ClipboardButton
          onClick={(value) => {
            editorRef.current.editorInst.setMarkdown(value);
          }}
        />
        <CopyButton
          onClick={async () => {
            const value = editorRef.current.editorInst.getMarkdown();
            await navigator.clipboard.writeText(value);
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
