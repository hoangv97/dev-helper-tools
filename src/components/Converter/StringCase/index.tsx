import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Select, Center, IconButton, Button } from '@chakra-ui/react';
import { TextareaWrapper } from 'components/common';
import { CASE_TYPES, convertStrByCase } from 'helpers/string';
import { useState } from 'react';

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
