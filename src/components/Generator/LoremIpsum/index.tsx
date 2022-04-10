import { Flex, Text, Select } from '@chakra-ui/react';
import { NumberInput, Textarea } from 'components/Form';
import { useEffect, useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { LoremUnit } from 'lorem-ipsum/types/src/constants/units';

const UNITS = ['words', 'sentences', 'paragraphs'];

const Home = () => {
  const [unit, setUnit] = useState(UNITS[2]);
  const [count, setCount] = useState(3);
  const [text, setText] = useState('');

  useEffect(() => {
    const text = loremIpsum({
      count, // Number of "words", "sentences", or "paragraphs"
      format: 'plain', // "plain" or "html"
      paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      paragraphUpperBound: 7, // Max. number of sentences per paragraph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 5, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
      units: unit as LoremUnit, // paragraph(s), "sentence(s)", or "word(s)"
      // words: []       // Array of words to draw from
    });
    setText(text);
  }, [unit, count]);

  return (
    <Flex direction="column" gap="8" alignItems="stretch">
      <Flex gap="8">
        <Flex direction="row" alignItems="center">
          <Text fontSize="md" mr="3">
            Unit:
          </Text>
          <Select
            w="150px"
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          >
            {UNITS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex direction="row" alignItems="center">
          <Text fontSize="md" mr="3">
            Count:
          </Text>
          <NumberInput value={count} onChange={(_, value) => setCount(value)} />
        </Flex>
      </Flex>
      <Flex w="full">
        <Textarea
          value={text}
          onChange={() => {}}
          minH="350px"
          hidesClipboard
        />
      </Flex>
    </Flex>
  );
};

export default Home;
