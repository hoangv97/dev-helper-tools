import { Flex, Icon, FlexProps } from '@chakra-ui/react';
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

  return (
    <Link to={'/' + path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="1.5"
        fontSize="md"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.300',
          color: 'white',
        }}
        {...(pathname === '/' + path
          ? {
              bg: 'blue.300',
              color: 'white',
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
