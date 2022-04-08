import { ReactElement } from 'react';
import {
  Html as HtmlBeautifier,
  Css as CssBeautifier,
  Javascript,
  Sql,
} from 'components/Beautifier';
import {
  JsonCsv,
  JsonQueryString,
  NumberBase,
  StringCase,
  UnixTime,
  Css as CssConverter,
} from 'components/Converter';
import { Hash, LoremIpsum, Password, QrCode } from 'components/Generator';
import { Html as HtmlPreviewer, Markdown } from 'components/Previewer';
import {
  Cronjob,
  RegexpTester,
  TextDiffChecker,
  CssPlayground,
} from 'components/Others';

interface TypeProp {
  name: string;
  items: ItemProp[];
}

interface ItemProp {
  name: string;
  path: string;
  element: ReactElement;
}

const Types: TypeProp[] = [
  {
    name: '',
    items: [
      {
        name: 'Regexp tester',
        path: 'regexp-tester',
        element: <RegexpTester />,
      },
      { name: 'Cronjob', path: 'cronjob', element: <Cronjob /> },
      {
        name: 'Text diff checker',
        path: 'text-diff-checker',
        element: <TextDiffChecker />,
      },
      {
        name: 'CSS Playground',
        path: 'css-playground',
        element: <CssPlayground />,
      },
    ],
  },
  {
    name: 'beautifier',
    items: [
      { name: 'HTML', path: 'html', element: <HtmlBeautifier /> },
      { name: 'CSS', path: 'css', element: <CssBeautifier /> },
      { name: 'Javascript', path: 'js', element: <Javascript /> },
      { name: 'SQL', path: 'sql', element: <Sql /> },
    ],
  },
  {
    name: 'converter',
    items: [
      {
        name: 'CSS - SCSS/LESS',
        path: 'css',
        element: <CssConverter />,
      },
      { name: 'JSON - CSV', path: 'json-csv', element: <JsonCsv /> },
      {
        name: 'JSON - Query String',
        path: 'json-query-string',
        element: <JsonQueryString />,
      },
      {
        name: 'Number base',
        path: 'number-base',
        element: <NumberBase />,
      },
      {
        name: 'String case',
        path: 'string-case',
        element: <StringCase />,
      },
      { name: 'UNIX time', path: 'unix-time', element: <UnixTime /> },
    ],
  },
  {
    name: 'generator',
    items: [
      { name: 'Hash', path: 'unix-time', element: <Hash /> },
      {
        name: 'Lorem Ipsum',
        path: 'lorem-ipsum',
        element: <LoremIpsum />,
      },
      { name: 'Password', path: 'password', element: <Password /> },
      { name: 'QR Code', path: 'qr-code', element: <QrCode /> },
    ],
  },
  {
    name: 'previewer',
    items: [
      {
        name: 'HTML',
        path: 'html',
        element: <HtmlPreviewer />,
      },
      { name: 'Markdown', path: 'markdown', element: <Markdown /> },
    ],
  },
];

export default Types;
