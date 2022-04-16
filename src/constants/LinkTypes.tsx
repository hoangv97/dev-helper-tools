import { ReactElement } from 'react';
import {
  JsonCsv,
  JsonQueryString,
  NumberBase,
  StringCase,
  UnixTime,
  Css as CssConverter,
  Cipher,
  BackslashEscape,
  UrlParser,
} from 'components/Converter';
import {
  Url as UrlEncoder,
  Base64Image,
  Base64String,
  HtmlEntities,
} from 'components/Encoder';
import { Hash, LoremIpsum, Password, QrCode } from 'components/Generator';
import { Html as HtmlPreviewer, Markdown } from 'components/Previewer';
import {
  Cronjob,
  RegexTester,
  TextDiffChecker,
  CssFlexboxPlayground,
  CodeEditor,
  JsonEditor,
  Paint,
} from 'components/Tools';
import { convertStrByCase } from 'helpers/string';

interface TypeProp {
  name: string;
  items: ItemProp[];
}

interface ItemProp {
  name: string;
  element: ReactElement;
}

const Types: TypeProp[] = [
  {
    name: '',
    items: [
      {
        name: 'Regex Tester',
        element: <RegexTester />,
      },
      { name: 'Cronjob', element: <Cronjob /> },
      {
        name: 'Text Diff Checker',
        element: <TextDiffChecker />,
      },
      {
        name: 'CSS Flexbox',
        element: <CssFlexboxPlayground />,
      },
      {
        name: 'Code Editor',
        element: <CodeEditor />,
      },
      {
        name: 'JSON Editor',
        element: <JsonEditor />,
      },
      {
        name: 'Paint',
        element: <Paint />,
      },
    ],
  },
  {
    name: 'previewer',
    items: [
      {
        name: 'HTML',
        element: <HtmlPreviewer />,
      },
      { name: 'Markdown', element: <Markdown /> },
    ],
  },
  {
    name: 'converter',
    items: [
      {
        name: 'Cipher Algorithms',
        element: <Cipher />,
      },
      {
        name: 'Number Base',
        element: <NumberBase />,
      },
      {
        name: 'String Case',
        element: <StringCase />,
      },
      { name: 'Unix Time', element: <UnixTime /> },
      { name: 'Backslash Escape', element: <BackslashEscape /> },
      { name: 'URL Parser', element: <UrlParser /> },
      {
        name: 'CSS - SCSS/LESS',
        element: <CssConverter />,
      },
      { name: 'JSON - CSV', element: <JsonCsv /> },
      {
        name: 'JSON - Query String',
        element: <JsonQueryString />,
      },
    ],
  },
  {
    name: 'encoder/decoder',
    items: [
      { name: 'HTML Entities', element: <HtmlEntities /> },
      { name: 'Base64 String', element: <Base64String /> },
      { name: 'Base64 Image', element: <Base64Image /> },
      { name: 'URL', element: <UrlEncoder /> },
    ],
  },
  {
    name: 'generator',
    items: [
      { name: 'Hash', element: <Hash /> },
      {
        name: 'Lorem Ipsum',
        element: <LoremIpsum />,
      },
      { name: 'Password', element: <Password /> },
      { name: 'QR Code', element: <QrCode /> },
    ],
  },
];

export const getPath = (type: TypeProp, item: ItemProp) => {
  return (
    (type.name ? type.name.replace(/\//g, '-') + '/' : '') +
    convertStrByCase(item.name.replace(/\//g, '-'), 'kebab')
  );
};

export default Types;
