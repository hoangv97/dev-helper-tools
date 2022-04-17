import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  Flex,
  Center,
  Heading,
} from '@chakra-ui/react';
import { Sidebar } from 'containers/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'containers/Home';
import LinkTypes, { getPath } from 'constants/LinkTypes';
import './style.scss';
import theme from './theme';
import { capitalize } from 'helpers/string';

export const App = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  let headingElement;
  for (const type of LinkTypes) {
    for (const item of type.items) {
      if ('/' + getPath(type, item) === pathname) {
        headingElement = (
          <Center>
            <Heading size="md">
              {item.name + ' ' + capitalize(type.name)}
            </Heading>
          </Center>
        );
        break;
      }
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box transition="3s ease">
        <Grid>
          <Flex h="100vh" overflow="hidden">
            <Sidebar />
            <Flex
              flexGrow={1}
              pl="6"
              pr="3"
              py="3"
              overflowY="scroll"
              h="full"
              direction="column"
              alignItems="stretch"
              gap="5"
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
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
