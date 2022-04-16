import { Flex, Icon, FlexProps, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon?: IconType;
  children: ReactText;
  path: string;
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  const { pathname } = useLocation();

  const bg = useColorModeValue('gray.300', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Link to={'/' + path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="1.5"
        fontSize="sm"
        role="group"
        cursor="pointer"
        _hover={{
          bg,
          color,
        }}
        {...(pathname === '/' + path
          ? {
              bg,
              color,
            }
          : {})}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="1"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
