import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Select, Center, IconButton, Button } from '@chakra-ui/react';
import { TextareaWrapper } from 'components/common';
import { capitalize } from 'helpers';
import { useState } from 'react';

const CASE_TYPES = [
  'lower',
  'upper',
  'constant',
  'camel',
  'snake',
  'kebab',
  'pascal',
];

const convertStr = (str: string, converter: any) => {
  return str
    .split('\n')
    .map((s) => s.replace(/[-_]/g, ' '))
    .map(converter)
    .join('\n');
};

const convertStrByCase = (str: string, caseType: string) => {
  switch (caseType) {
    case 'lower':
      return str.toLowerCase();
    case 'upper':
      return str.toUpperCase();
    case 'constant':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '_').toUpperCase()
      );
    case 'camel':
      return convertStr(str, (s: string) =>
        s.replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
      );
    case 'snake':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '_').toLowerCase()
      );
    case 'kebab':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '-').toLowerCase()
      );
    case 'pascal':
      return convertStr(str, (s: string) =>
        capitalize(s.replace(/\s(.)/g, (match, group1) => group1.toUpperCase()))
      );
    default:
      return str;
  }
};

const sampleStr = CASE_TYPES.map((type) =>
  convertStrByCase(`${type} case`, type)
).join('\n');

const StringCase = () => {
  const [caseType, setCaseType] = useState(CASE_TYPES[0]);

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleCaseTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCaseType(e.target.value);
    setOutput(convertStrByCase(input, e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setOutput(convertStrByCase(e.target.value, caseType));
  };

  const insertSample = () => {
    setInput(sampleStr);
    setOutput(convertStrByCase(sampleStr, caseType));
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex direction="column" w="48%">
          <Flex minH="60px" alignItems="center">
            <Button size="sm" onClick={insertSample}>
              Sample
            </Button>
          </Flex>
          <TextareaWrapper
            {...{ minH: '300px' }}
            value={input}
            onChange={handleInputChange}
          />
        </Flex>
        <Center>
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            disabled
            onClick={() => {}}
            icon={<ArrowForwardIcon />}
            aria-label={``}
          />
        </Center>
        <Flex direction="column" w="48%">
          <Flex minH="60px" justifyContent="flex-end">
            <Select w="200px" value={caseType} onChange={handleCaseTypeChange}>
              {CASE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {convertStrByCase(`${type} case`, type)}
                </option>
              ))}
            </Select>
          </Flex>
          <TextareaWrapper
            {...{ minH: '300px' }}
            value={output}
            onChange={() => {}}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default StringCase;
