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

interface ItemProp {
  name: string;
  isHeading?: boolean;
  path?: string;
  element?: ReactElement;
}

const Items: Array<ItemProp> = [
  { name: 'Beautifier', isHeading: true },
  { name: 'HTML', path: 'beautify/html', element: <HtmlBeautifier /> },
  { name: 'CSS', path: 'beautify/css', element: <CssBeautifier /> },
  { name: 'Javascript', path: 'beautify/js', element: <Javascript /> },
  { name: 'SQL', path: 'beautify/sql', element: <Sql /> },

  { name: 'Converter', isHeading: true },
  { name: 'CSS - SCSS/LESS', path: 'converter/css', element: <CssConverter /> },
  { name: 'JSON - CSV', path: 'converter/json-csv', element: <JsonCsv /> },
  {
    name: 'JSON - Query String',
    path: 'converter/json-query-string',
    element: <JsonQueryString />,
  },
  {
    name: 'Number base',
    path: 'converter/number-base',
    element: <NumberBase />,
  },
  {
    name: 'String case',
    path: 'converter/string-case',
    element: <StringCase />,
  },
  { name: 'UNIX time', path: 'converter/unix-time', element: <UnixTime /> },

  { name: 'Generator', isHeading: true },
  { name: 'Hash', path: 'generator/unix-time', element: <Hash /> },
  {
    name: 'Lorem Ipsum',
    path: 'generator/lorem-ipsum',
    element: <LoremIpsum />,
  },
  { name: 'Password', path: 'generator/password', element: <Password /> },
  { name: 'QR Code', path: 'generator/qr-code', element: <QrCode /> },

  { name: 'Previewer', isHeading: true },
  {
    name: 'HTML',
    path: 'previewer/html',
    element: <HtmlPreviewer />,
  },
  { name: 'Markdown', path: 'previewer/markdown', element: <Markdown /> },

  { name: 'Others', isHeading: true },
  { name: 'Cronjob', path: 'others/cronjob', element: <Cronjob /> },
  {
    name: 'Regexp tester',
    path: 'others/regexp-tester',
    element: <RegexpTester />,
  },
  {
    name: 'Text diff checker',
    path: 'others/text-diff-checker',
    element: <TextDiffChecker />,
  },
  {
    name: 'CSS Playground',
    path: 'others/css-playground',
    element: <CssPlayground />,
  },
];

export default Items;
