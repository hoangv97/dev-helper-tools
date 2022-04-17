import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import {
  ClipboardButton,
  CopyButton,
  ExportButton,
  ImportButton,
} from 'components/Button';
import './style.scss';

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
import { useEffect, useRef, useState } from 'react';
import {
  ACTIONS,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localStorage';

const Home = () => {
  const theme = useColorModeValue('light', 'dark');
  // console.log(theme);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    const timer2 = setTimeout(() => {
      if (editorRef.current) {
        const value = getLocalStorage(ACTIONS.MD_PREVIEW_CODE);
        editorRef.current.editorInst.setMarkdown(value);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [theme]);

  const editorRef = useRef<any>();

  return (
    <Flex w="full" h="full" direction="column">
      {!isLoading && (
        <>
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
              onChange={() => {
                const value = editorRef.current.editorInst.getMarkdown();
                setLocalStorage(ACTIONS.MD_PREVIEW_CODE, value);
              }}
            />
          </Box>
          <Flex mt="3" gap="2" w="50%" justifyContent="space-between">
            <Flex gap="2">
              <ImportButton
                setContent={(value) =>
                  editorRef.current.editorInst.setMarkdown(value)
                }
              />
              <ExportButton
                defaultFileName="README.md"
                getContent={() => editorRef.current.editorInst.getMarkdown()}
              />
            </Flex>
            <Flex gap="2">
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
        </>
      )}
    </Flex>
  );
};

export default Home;
