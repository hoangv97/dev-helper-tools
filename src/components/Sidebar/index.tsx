import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  BoxProps,
  InputGroup,
  Input,
  InputLeftElement,
  Heading,
  Link as ChakraLink,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LinkTypes, { getPath } from 'constants/LinkTypes';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import HelpButton from './HelpButton';
import { capitalize } from 'helpers/string';
import { FaGithub } from 'react-icons/fa';

interface SidebarProps extends BoxProps {}

export const Sidebar = (props: SidebarProps) => {
  const [search, setSearch] = useState('');

  const sidebarTypes = LinkTypes.map((type, i) => {
    const items = type.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      ...type,
      items,
    };
  }).filter((type) => type.items.length > 0);

  return (
    <Flex
      w="240px"
      py="3"
      direction="column"
      justifyContent="space-between"
      gap="3"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Flex justifyContent="center">
        <Text
          fontSize="2xl"
          textAlign="center"
          fontFamily="monospace"
          fontWeight="bold"
        >
          <Link to="/">Dev Tools</Link>
        </Text>
      </Flex>
      <Flex px="3">
        <InputGroup size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={
              <SearchIcon color={useColorModeValue('black', 'white')} />
            }
          />
          <Input
            type="text"
            placeholder=""
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Flex>
      <Flex direction="column" flexGrow={1} overflowY="scroll">
        {sidebarTypes.map((type, i) => (
          <Box key={i}>
            {type.name && (
              <Heading size="xs" textTransform="uppercase" mt="3" mb="2" pl="3">
                {capitalize(type.name)}
              </Heading>
            )}
            {type.items.map((item, i) => (
              <NavItem key={i} path={getPath(type, item)} pl="3">
                {item.name}
              </NavItem>
            ))}
          </Box>
        ))}
      </Flex>
      <Flex pl="3" justifyContent="flex-start" gap="2">
        <HelpButton />
        <ColorModeSwitcher />
        <ChakraLink
          href="https://github.com/ngviethoang/dev-helper-tools"
          isExternal
        >
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            icon={<FaGithub />}
            aria-label={`Github`}
          />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
