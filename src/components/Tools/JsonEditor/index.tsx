import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Flex, Select, Text } from '@chakra-ui/react';
import { JsonEditor } from 'components/Form';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home = () => {
  const editor1 = useRef<any>();
  const editor2 = useRef<any>();

  return (
    <Flex direction="row" gap="3" h="full" alignItems="stretch">
      <JsonEditor ref={editor1} mode="text" containerStyle={{ flexGrow: 1 }} />
      <Flex direction="column" justifyContent="center">
        <ButtonGroup size="sm" spacing="2">
          <Button
            onClick={() => {
              editor1.current.set(editor2.current.get());
            }}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            onClick={() => {
              editor2.current.set(editor1.current.get());
            }}
          >
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </Flex>
      <JsonEditor ref={editor2} mode="tree" containerStyle={{ flexGrow: 1 }} />
    </Flex>
  );
};

export default Home;
