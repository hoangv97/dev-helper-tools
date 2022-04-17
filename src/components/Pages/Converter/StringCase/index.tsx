import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Select, Center, IconButton, Button } from '@chakra-ui/react';
import { Textarea } from 'components/Form';
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

  const handleInputChange = (value: string) => {
    setInput(value);
    setOutput(convertStrByCase(value, caseType));
  };

  const insertSample = () => {
    setInput(sampleStr);
    setOutput(convertStrByCase(sampleStr, caseType));
  };

  return (
    <Flex h="full">
      <Flex direction="column" gap="3" flexGrow={1}>
        <Flex minH="40px">
          <Button size="sm" onClick={insertSample}>
            Sample
          </Button>
        </Flex>
        <Flex flexGrow={1}>
          <Textarea value={input} onChange={handleInputChange} />
        </Flex>
      </Flex>
      <Center>
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          disabled
          cursor="default !important"
          onClick={() => {}}
          icon={<ArrowForwardIcon />}
          aria-label={``}
        />
      </Center>
      <Flex direction="column" gap="3" flexGrow={1}>
        <Flex justifyContent="flex-end">
          <Select value={caseType} onChange={handleCaseTypeChange}>
            {CASE_TYPES.map((type) => (
              <option key={type} value={type}>
                {convertStrByCase(`${type} case`, type)}
              </option>
            ))}
          </Select>
        </Flex>
        <Textarea value={output} onChange={() => {}} readOnly />
      </Flex>
    </Flex>
  );
};

export default StringCase;
