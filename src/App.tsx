import * as React from 'react';
import {
  ChakraProvider,
  Box,
  HStack,
  Grid,
  Flex,
  Center,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Sidebar } from 'containers/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'containers/Home';
import LinkTypes, { getPath } from 'constants/LinkTypes';
import './styles.css';
import theme from './theme';

export const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  // TODO fix this
  const borderRightColor = useColorModeValue('gray.200', 'red.700');
  // console.log(borderRightColor);

  let headingElement;
  for (const type of LinkTypes) {
    for (const item of type.items) {
      if ('/' + getPath(type, item) === pathname) {
        headingElement = (
          <Center mb="5">
            <Heading size="lg">{item.name + ' ' + type.name}</Heading>
          </Center>
        );
        break;
      }
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid>
          <HStack h="100vh" overflow="hidden">
            <Box
              w="300px"
              px="3"
              py="3"
              borderRight="1px"
              borderRightColor={borderRightColor}
            >
              <Sidebar />
            </Box>
            <Flex
              flexGrow={1}
              p="3"
              overflowY="scroll"
              h="full"
              direction="column"
              alignItems="stretch"
            >
              {headingElement}
              <Box flexGrow={1}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  {LinkTypes.map((type, i) => (
                    <React.Fragment key={i}>
                      {type.items.map((item, i) => (
                        <Route
                          key={i}
                          path={'/' + getPath(type, item)}
                          element={item.element}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </Routes>
              </Box>
            </Flex>
          </HStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
