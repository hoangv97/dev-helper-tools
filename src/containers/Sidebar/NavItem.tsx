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

  const selectedCss = {
    bg: 'cyan.400',
    color: 'white',
  };

  return (
    <Link to={'/' + path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="1"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={selectedCss}
        {...(pathname === '/' + path ? selectedCss : {})}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
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
