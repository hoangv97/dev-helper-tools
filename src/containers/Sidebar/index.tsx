import { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  BoxProps,
  InputGroup,
  Input,
  InputLeftElement,
  Heading,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LinkTypes, { getPath } from 'constants/LinkTypes';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import HelpButton from './HelpButton';
import { capitalize } from 'helpers/string';

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
    <VStack>
      <Link to="/">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Dev Helper Tools
        </Text>
      </Link>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder=""
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <Box
        transition="3s ease"
        w="full"
        h="calc(100vh - 160px)"
        overflowY="scroll"
      >
        {sidebarTypes.map((type, i) => (
          <Box key={i}>
            {type.name && (
              <Heading size="md" mt="2" mb="1">
                {capitalize(type.name)}
              </Heading>
            )}
            {type.items.map((item, i) => (
              <NavItem key={i} path={getPath(type, item)}>
                {item.name}
              </NavItem>
            ))}
          </Box>
        ))}
      </Box>
      <Flex w="full" justifyContent="flex-end">
        <ColorModeSwitcher />
        <HelpButton />
      </Flex>
    </VStack>
  );
};
