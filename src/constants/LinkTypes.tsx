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
        name: 'Regexp tester',
        element: <RegexpTester />,
      },
      { name: 'Cronjob', element: <Cronjob /> },
      {
        name: 'Text diff checker',
        element: <TextDiffChecker />,
      },
      {
        name: 'CSS Playground',
        element: <CssPlayground />,
      },
    ],
  },
  {
    name: 'beautifier',
    items: [
      { name: 'HTML', element: <HtmlBeautifier /> },
      { name: 'CSS', element: <CssBeautifier /> },
      { name: 'Javascript', element: <Javascript /> },
      { name: 'SQL', element: <Sql /> },
    ],
  },
  {
    name: 'converter',
    items: [
      {
        name: 'CSS - SCSS/LESS',
        element: <CssConverter />,
      },
      { name: 'JSON - CSV', element: <JsonCsv /> },
      {
        name: 'JSON - Query String',
        element: <JsonQueryString />,
      },
      {
        name: 'Number base',
        element: <NumberBase />,
      },
      {
        name: 'String case',
        element: <StringCase />,
      },
      { name: 'UNIX time', element: <UnixTime /> },
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
];

export const getPath = (type: TypeProp, item: ItemProp) => {
  return (
    (type.name ? type.name + '/' : '') + convertStrByCase(item.name, 'kebab')
  );
};

export default Types;
