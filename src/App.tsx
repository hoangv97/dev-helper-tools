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
import LinkItems from 'constants/LinkItems';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const App = () => {
  const { pathname } = useLocation();

  const currentLinkItem = LinkItems.find(
    (link) => '/' + link.path === pathname
  );

  let headingElement;
  if (currentLinkItem) {
    headingElement = (
      <Center>
        <Heading size="lg">{currentLinkItem.name}</Heading>
      </Center>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" minW="100vw">
          <VStack spacing={8}>
            <Flex h="full" minW="100%" color="current">
              <Box
                w="400px"
                p="3"
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <Sidebar />
              </Box>
              <Box w="100%" p="3">
                {headingElement}
                <Routes>
                  <Route path="/" element={<Home />} />
                  {LinkItems.map((link, i) => (
                    <Route
                      key={i}
                      path={'/' + link.path}
                      element={link.element}
                    />
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
