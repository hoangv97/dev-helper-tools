import * as React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Flex,
  extendTheme,
  useColorModeValue,
  Center,
  Heading,
} from '@chakra-ui/react';
import { Sidebar } from 'containers/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'containers/Home';
import LinkTypes from 'constants/LinkTypes';
import './styles.css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const App = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  let headingElement;
  for (const type of LinkTypes) {
    for (const item of type.items) {
      if ((type.name ? '/' : '') + type.name + '/' + item.path === pathname) {
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
          <VStack spacing={8}>
            <Flex h="full" minW="100%" color="current">
              <Box
                w="400px"
                h="100vh"
                px="3"
                py="3"
                // borderRight="1px"
                // borderRightColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <Sidebar />
              </Box>
              <Box w="100%" px="4" py="3">
                {headingElement}
                <Routes>
                  <Route path="/" element={<Home />} />
                  {LinkTypes.map((type, i) => (
                    <React.Fragment key={i}>
                      {type.items.map((item, i) => (
                        <Route
                          key={i}
                          path={'/' + type.name + '/' + item.path}
                          element={item.element}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </Routes>
              </Box>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
