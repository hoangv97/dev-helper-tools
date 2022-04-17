import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { CodeEditor, NumberInput } from 'components/Form';
import { getCurrentSettings } from 'components/Form/CodeEditor/settings';
import {
  ACTIONS,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localStorage';
import { convertStrByCase } from 'helpers/string';
import { useEffect, useState } from 'react';
import {
  containerStyles,
  getDefaultContainerStyle,
  defaultItems,
  getDefaultItemStyle,
  getCssCode,
  Item,
  itemStyles,
  newItem,
} from './helper';
import './style.scss';

const Home = () => {
  const [containerStyle, setContainerStyle] = useState<any>(() => {
    const data = getLocalStorage(ACTIONS.CSS_FLEXBOX);
    if (data) {
      return data.containerStyle;
    }
    return getDefaultContainerStyle();
  });
  const [items, setItems] = useState<Item[]>(() => {
    const data = getLocalStorage(ACTIONS.CSS_FLEXBOX);
    if (data) {
      return data.items;
    }
    return defaultItems();
  });
  const [editedItem, setEditedItem] = useState<Item | undefined>();

  const [cssCode, setCssCode] = useState<string>('');

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  useEffect(() => {
    const tabSize = getCurrentSettings().tabSize;
    const tab = ' '.repeat(tabSize);
    setCssCode(getCssCode(containerStyle, items, tab));
    setLocalStorage(ACTIONS.CSS_FLEXBOX, { containerStyle, items });
  }, [containerStyle, items]);

  useEffect(() => {
    if (editedItem) {
      setItems((items) =>
        items.map((item, index) => {
          if (index === editedItem.index) {
            return { ...item, edited: true, style: editedItem.style };
          }
          return item;
        })
      );
    }
  }, [editedItem]);

  const handleChangeEditedItem = (name: string, value: string) => {
    setEditedItem((prev) => ({
      ...prev,
      style: {
        ...(prev ? prev.style : {}),
        [convertStrByCase(name, 'camel')]: value,
      },
    }));
  };

  return (
    <Box>
      <Box>
        <Flex gap="4" direction="column">
          {containerStyles.map((item) => (
            <Flex key={item.name} direction="row" gap="4" alignItems="center">
              <Text fontSize="md" fontWeight="bold">
                {item.name}
              </Text>
              <RadioGroup
                onChange={(value) => {
                  setContainerStyle((curStyle: any) => ({
                    ...curStyle,
                    [convertStrByCase(item.name, 'camel')]: value,
                  }));
                }}
                value={containerStyle[convertStrByCase(item.name, 'camel')]}
              >
                <Flex direction="row" gap="2">
                  {item.options.map((option) => (
                    <Radio key={option} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Flex>
              </RadioGroup>
            </Flex>
          ))}
        </Flex>
        <Flex my="4" gap="3">
          <Button
            size="sm"
            onClick={() => {
              setContainerStyle(getDefaultContainerStyle());
            }}
          >
            Default style
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setItems((items: any) => [...items, newItem()]);
            }}
          >
            Add item
          </Button>
          {!!items.length && (
            <Button
              size="sm"
              onClick={() => {
                setItems([]);
              }}
            >
              Clear items
            </Button>
          )}
        </Flex>
      </Box>
      <Box border="1px solid" borderColor="gray.500">
        <Flex h="full" minH="300px" style={{ ...containerStyle }}>
          {items.map((item, index) => (
            <Flex
              key={index}
              minW="100px"
              minH="50px"
              cursor="pointer"
              justifyContent="end"
              alignItems="stretch"
              position="relative"
              className="item"
              {...item.style}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                _hover={{ fontWeight: 'bold' }}
                onClick={() => {
                  setEditedItem({ ...item, index });
                  onOpenModal();
                }}
              >
                {index + 1}
              </Flex>
              <IconButton
                size="xs"
                variant="outline"
                aria-label="Delete item"
                position="absolute"
                icon={<CloseIcon />}
                className="delete-btn"
                onClick={(e) => {
                  setItems((items) => items.filter((_, i) => i !== index));
                  onCloseModal();
                }}
              />
            </Flex>
          ))}
        </Flex>
      </Box>
      <Modal isOpen={isOpenModal} onClose={onCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Edit Item{' '}
            {!!editedItem &&
              editedItem.index !== undefined &&
              editedItem.index + 1}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="3" direction="column">
              {!!editedItem &&
                itemStyles.map((item) => (
                  <Flex
                    key={item.name}
                    direction="row"
                    gap="4"
                    alignItems="center"
                  >
                    <Text fontSize="md" fontWeight="bold" minW="90px">
                      {item.name}
                    </Text>
                    {item.number !== undefined && (
                      <NumberInput
                        value={
                          editedItem.style[convertStrByCase(item.name, 'camel')]
                        }
                        onChange={(value) =>
                          handleChangeEditedItem(item.name, value)
                        }
                      />
                    )}
                    {item.string !== undefined && (
                      <Input
                        w="230px"
                        value={
                          editedItem.style[convertStrByCase(item.name, 'camel')]
                        }
                        onChange={(e) =>
                          handleChangeEditedItem(item.name, e.target.value)
                        }
                      />
                    )}
                    {item.options && (
                      <RadioGroup
                        value={
                          editedItem.style[convertStrByCase(item.name, 'camel')]
                        }
                        onChange={(value) =>
                          handleChangeEditedItem(item.name, value)
                        }
                      >
                        <Flex direction="row" gap="2">
                          {item.options.map((option) => (
                            <Radio key={option} value={option}>
                              {option}
                            </Radio>
                          ))}
                        </Flex>
                      </RadioGroup>
                    )}
                  </Flex>
                ))}
            </Flex>
          </ModalBody>

          <ModalFooter gap="3">
            <Button
              colorScheme="blue"
              variant="solid"
              onClick={(e) => {
                setEditedItem((prev) => ({
                  ...prev,
                  style: {
                    ...(prev ? prev.style : {}),
                    ...getDefaultItemStyle(),
                  },
                }));
              }}
            >
              Default
            </Button>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box my="4">
        <Text mb="1" fontSize="lg" fontWeight="bold">
          CSS:
        </Text>
        <CodeEditor
          mode="css"
          value={cssCode}
          onChange={() => {}}
          readOnly
          hidesBeautify
          height="200px"
        />
      </Box>
    </Box>
  );
};

export default Home;
