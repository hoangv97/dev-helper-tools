import { Flex, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      h="full"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="5"
    >
      <Heading fontSize="5xl">Dev Tools</Heading>
      <Text fontSize="lg">
        A Toolbox every developers need to optimize workflow
      </Text>
    </Flex>
  );
};

export default Home;
