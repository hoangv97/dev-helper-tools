import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react';
import { InputWithCopy, NumberInput } from 'components/Form';
import { capitalize, convertStrByCase } from 'helpers/string';
import { useState } from 'react';
import { OPTIONS, CHAR_OPTIONS, generatePassword } from './utils';

const Home = () => {
  const [options, setOptions] = useState<any>({
    ...OPTIONS.reduce((acc: any, option) => {
      acc[option.name] = option.value;
      return acc;
    }, {}),
    ...CHAR_OPTIONS,
    ...Object.keys(CHAR_OPTIONS).reduce((acc: any, key) => {
      acc[`use_${key}`] = true;
      return acc;
    }, {}),
  });
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const getWishlistByOptions = (options: any) => {
    let wishlist =
      (options.use_lowercase ? options.lowercase : '') +
      (options.use_uppercase ? options.uppercase : '') +
      (options.use_numbers ? options.numbers : '') +
      (options.use_symbols ? options.symbols : '');
    if (options.no_similar_characters) {
      wishlist = wishlist.replace(/[il1loO0]/g, '');
    }
    // remove duplicates
    wishlist = Array.from(new Set(wishlist.split(''))).join('');
    console.log('wishlist', wishlist);
    return wishlist;
  };

  const checkAndSetOptions = (key: string, value: any) => {
    const newOptions = { ...options, [key]: value };
    // console.log('newOptions', newOptions);
    let msg = '';

    const isValid = () => {
      if (
        newOptions.begin_with_a_letter &&
        !newOptions.use_lowercase &&
        !newOptions.use_uppercase
      ) {
        msg = 'You must choose at least one letter case.';
      } else if (
        newOptions.no_duplicate_characters &&
        getWishlistByOptions(newOptions).length < newOptions.password_length
      ) {
        msg =
          'Characters length must be equals to or greater than password length.';
      }
      return !msg;
    };

    if (!isValid()) {
      setErrMsg(msg);
    } else {
      setErrMsg('');
      setOptions(newOptions);
    }
  };

  const generatePasswordByOptions = () => {
    const password = generatePassword(
      options.password_length,
      getWishlistByOptions(options),
      options.begin_with_a_letter,
      options.no_duplicate_characters,
      options.no_sequential_characters
    );
    if (password) {
      setErrMsg('');
      setPassword(password);
    } else {
      setErrMsg('Something went wrong.');
    }
  };

  return (
    <Flex direction="column" alignItems="stretch" gap="6">
      <Flex direction="column" gap="4">
        {OPTIONS.map((item) => (
          <Flex key={item.name} direction="row" gap="4" alignItems="center">
            <Text fontSize="md" minW="200px">
              {convertStrByCase(item.name, 'capitalize')}
            </Text>
            {item.type === 'number' && (
              <NumberInput
                value={options[item.name]}
                onChange={(_, value) => checkAndSetOptions(item.name, value)}
              />
            )}
            {item.type === 'boolean' && (
              <>
                <Checkbox
                  isChecked={options[item.name]}
                  onChange={(e) =>
                    checkAndSetOptions(item.name, !options[item.name])
                  }
                ></Checkbox>
                <Text>{capitalize(item.desc || '')}</Text>
              </>
            )}
          </Flex>
        ))}
        {Object.keys(CHAR_OPTIONS).map((item: string) => (
          <Flex key={item} direction="row" gap="4" alignItems="center">
            <Text fontSize="md" minW="200px">
              Includes {convertStrByCase(item, 'capitalize')}
            </Text>
            <Checkbox
              isChecked={options['use_' + item]}
              onChange={(e) => {
                const key = 'use_' + item;
                checkAndSetOptions(key, !options[key]);
              }}
            />
            <Input
              letterSpacing={3}
              value={options[item]}
              onChange={(e) => {
                const value = e.target.value;
                // check valid input
                for (const char of value) {
                  if (CHAR_OPTIONS[item].indexOf(char) === -1) {
                    return;
                  }
                }
                checkAndSetOptions(item, value);
              }}
            />
            <Button
              size="sm"
              px="6"
              title={CHAR_OPTIONS[item]}
              onClick={() => {
                setOptions((prev: any) => ({
                  ...prev,
                  [item]: CHAR_OPTIONS[item],
                }));
              }}
            >
              Default
            </Button>
          </Flex>
        ))}
        <Text color="red.400" fontSize="md">
          {errMsg}
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Button onClick={generatePasswordByOptions}>Generate</Button>
      </Flex>
      <Flex alignItems="center">
        <Text mr="3" fontSize="md">
          Password:{' '}
        </Text>
        <Box flexGrow={1}>
          <InputWithCopy
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
