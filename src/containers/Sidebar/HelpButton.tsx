import * as React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

type ButtonProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: React.FC<ButtonProps> = (props) => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={() => {}}
      icon={<FaQuestion />}
      aria-label={`Help`}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
