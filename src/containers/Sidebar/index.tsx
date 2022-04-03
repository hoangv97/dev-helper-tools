import { useState } from 'react';
import {
  Box,
  Grid,
  Flex,
  VStack,
  useColorModeValue,
  Text,
  BoxProps,
  InputGroup,
  Input,
  InputLeftElement,
  Heading,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LinkItems from 'constants/LinkItems';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import HelpButton from './HelpButton';

interface SidebarProps extends BoxProps {}

export const Sidebar = (props: SidebarProps) => {
  const [search, setSearch] = useState('');

  const sidebarItems = LinkItems.filter((link, i) => {
    if (!link.isHeading && !link.name.toLowerCase().includes(search)) {
      return false;
    }
    return true;
  });

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
      <Box transition="3s ease" w="full" h="full">
        {sidebarItems.map((link, i) => (
          <Box key={i}>
            {link.isHeading && (
              <Heading size="md" mt="2" mb="1">
                {link.name}
              </Heading>
            )}
            {!link.isHeading && link.path && (
              <NavItem path={link.path} fontSize="md">
                {link.name}
              </NavItem>
            )}
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
