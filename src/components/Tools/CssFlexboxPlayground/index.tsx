import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
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
} from '@chakra-ui/react';
import { CodeEditor, NumberInput } from 'components/Form';
import { randomObject } from 'helpers/color';
import { camelToKebabCase, convertStrByCase } from 'helpers/string';
import { useEffect, useState } from 'react';

interface ContainerStyle {
  name: string;
  options: string[];
}

const containerStyles: ContainerStyle[] = [
  {
    name: 'flex-direction',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  {
    name: 'flex-wrap',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
  },
  {
    name: 'justify-content',
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ],
  },
  {
    name: 'align-items',
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  },
  {
    name: 'align-content',
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch',
    ],
  },
];

interface ItemStyle {
  name: string;
  number?: number;
  string?: string;
  options?: string[];
}

const itemStyles: ItemStyle[] = [
  { name: 'order', number: 0 },
  { name: 'flex-grow', number: 0 },
  { name: 'flex-shrink', number: 1 },
  { name: 'flex-basis', string: 'auto' },
  {
    name: 'align-self',
    options: [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ],
  },
];

interface Item {
  index?: number;
  edited?: boolean;
  style: any;
}

const Home = () => {
  const newItem = (): Item => {
    const style: any = { ...randomObject() };
    itemStyles.forEach((item) => {
      let value;
      if (item.options) {
        value = item.options[0];
      } else if (item.number !== undefined) {
        value = item.number;
      } else if (item.string !== undefined) {
        value = item.string;
      }
      style[convertStrByCase(item.name, 'camel')] = value;
    });
    return { style };
  };

  const [containerStyle, setContainerStyle] = useState<any>(() => {
    const style: any = {};
    containerStyles.forEach((item) => {
      style[convertStrByCase(item.name, 'camel')] = item.options[0];
    });
    return style;
  });
  const [items, setItems] = useState<Item[]>(() => {
    const initialItems = 3;
    const items: Item[] = [];
    for (let i = 0; i < initialItems; i++) {
      items.push(newItem());
    }
    return items;
  });
  const [editedItem, setEditedItem] = useState<Item | undefined>();

  const [cssCode, setCssCode] = useState<string>('');

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  useEffect(() => {
    let cssCode = `.container {
  ${Object.keys(containerStyle)
    .map((k) => `${camelToKebabCase(k)}: ${containerStyle[k]};`)
    .join('\n  ')}
}`;
    items.forEach((item, i) => {
      if (item.edited) {
        cssCode += `
.item-${i + 1} {
  ${Object.keys(item.style)
    .filter((k) => !['bg'].includes(k))
    .map((k) => `${camelToKebabCase(k)}: ${item.style[k]};`)
    .join('\n  ')}
}`;
      }
    });
    setCssCode(cssCode);
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
                <Stack direction="row" gap="2">
                  {item.options.map((option) => (
                    <Radio key={option} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Flex>
          ))}
        </Flex>
        <Flex my="4" gap="3">
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
              Clear
            </Button>
          )}
        </Flex>
      </Box>
      <Box border="1px solid gray">
        <Flex h="full" minH="300px" style={{ ...containerStyle }}>
          {items.map((item, index) => (
            <Flex
              key={index}
              minW="100px"
              minH="50px"
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
              _hover={{ fontWeight: 'bold' }}
              {...item.style}
              onClick={() => {
                setEditedItem({ ...item, index });
                onOpenModal();
              }}
            >
              {index + 1}
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
                        <Stack direction="row" gap="2">
                          {item.options.map((option) => (
                            <Radio key={option} value={option}>
                              {option}
                            </Radio>
                          ))}
                        </Stack>
                      </RadioGroup>
                    )}
                  </Flex>
                ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
              Close
            </Button>
            {!!editedItem && (
              <Button
                colorScheme="red"
                variant="solid"
                onClick={(e) => {
                  setItems((items) =>
                    items.filter((item, i) => i !== editedItem.index)
                  );
                  onCloseModal();
                }}
              >
                Delete
              </Button>
            )}
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
          height="200px"
        />
      </Box>
    </Box>
  );
};

export default Home;
