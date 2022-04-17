import { Flex } from '@chakra-ui/react';
import { ClipboardButton, CopyButton } from 'components/Button';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';
import './style.scss';

const JsonEditorContainer = (
  { mode, containerStyle, ...props }: any,
  ref: any
) => {
  const containerRef = useRef(null);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      // docs: https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
      editorRef.current = new JSONEditor(
        containerRef.current,
        {
          modes: ['tree', 'view', 'form', 'code', 'text', 'preview'],
          mode: mode || 'tree',
          ...props,
        },
        {}
      );
      // console.log(editorRef.current);
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [containerRef, props, mode]);

  useImperativeHandle(ref, () => ({
    get: () => editorRef.current.get(),
    set: (json: any) => editorRef.current.set(json),
  }));

  return (
    <Flex direction="column" gap="3" {...containerStyle}>
      <Flex ref={containerRef} flexGrow={1}></Flex>
      <Flex justifyContent="end" gap="2">
        <ClipboardButton
          onClick={(value) => {
            editorRef.current.setText(value);
          }}
        />
        <CopyButton
          onClick={() =>
            navigator.clipboard.writeText(editorRef.current.getText())
          }
        />
      </Flex>
    </Flex>
  );
};

export default forwardRef(JsonEditorContainer);
